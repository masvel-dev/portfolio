import { useState } from "react";
import toast from "react-hot-toast";

import { sendEmail } from "../lib/email";

type FormData = {
  from_name: string;
  from_email: string;
  message: string;
  botcheck: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const INITIAL_FORM: FormData = {
  from_name: "",
  from_email: "",
  message: "",
  botcheck: "",
};

export function useContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  const validateField = (name: keyof FormData, value: string): string => {
    switch (name) {
      case "from_name":
        return value.trim() ? "" : "Name is required";
      case "from_email":
        return /^\S+@\S+\.\S+$/.test(value) ? "" : "Invalid email";
      case "message":
        return value.trim().length >= 10
          ? ""
          : "Message must be at least 10 characters";
      default:
        return "";
    }
  };

  const validateForm = (): FormErrors => {
    const fields: (keyof FormData)[] = ["from_name", "from_email", "message"];
    const newErrors: FormErrors = {};
    fields.forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    return newErrors;
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM);
    setErrors({});
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const key = name as keyof FormData;

    setFormData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({
      ...prev,
      [key]: validateField(key, value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.botcheck) {
      toast.error("Form submission failed. Possible bot detected.");
      return;
    }

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      await sendEmail(formData);
      toast.success("Message sent successfully!");
      resetForm();
    } catch (err) {
      console.error(err);
      toast.error("Message not sent. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return { formData, errors, loading, handleChange, handleSubmit };
}