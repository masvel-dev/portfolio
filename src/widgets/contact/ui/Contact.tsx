import { useState } from "react";
import toast from 'react-hot-toast';
import emailjs from "@emailjs/browser";

import { contacts } from "@/shared/config/contacts";
import { Container } from "@/shared/ui/container";

import { Blurs } from "./Blurs";
import { InputField } from "./InputField";

type FormData = {
  from_name: string;
  from_email: string;
  message: string;
  botcheck: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const INITIAL_FORM = {
  from_name: "",
  from_email: "",
  message: "",
  botcheck: "",
};

export function Contact() {
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

  const sendEmail = async () => {
    return emailjs.send("service_vhvkdpb", "template_9u86bp1", formData, "Z029k2YwelvkZonwv");
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
      await sendEmail();
      toast.success("Message sent successfully!");
      resetForm();
    } catch (error) {
      console.error(error);
      toast.error("Message not sent. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden" id="contact">
      <Blurs />

      <Container>
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h6>Let's Work Together</h6>
          <h2 className="mb-6">Contact Me</h2>
          <p>Have a project in mind or just want to say hello? Feel free to reach out. I'm always open to discussing new ideas, collaborations, or opportunities.</p>
        </div>

        <div className="max-w-xl mx-auto p-6 sm:p-10 pt-6 bg-white dark:bg-white/5 backdrop-blur-xl rounded-xl border border-gray-100 dark:border-white/10 shadow-lg space-y-8 relative z-10 transition-colors duration-300">
          <form noValidate onSubmit={handleSubmit} className="space-y-6">
            <InputField
              label="Your Name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              error={errors.from_name}
            />
            <InputField
              label="Your Email"
              name="from_email"
              type="email"
              value={formData.from_email}
              onChange={handleChange}
              error={errors.from_email}
            />
            <InputField
              label="Message"
              name="message"
              type="textarea"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
            />
            <input
              type="text"
              name="botcheck"
              value={formData.botcheck}
              onChange={handleChange}
              className="hidden"
              autoComplete="off"
              tabIndex={-1}
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 text-white font-medium tracking-wide rounded-lg transition-colors duration-300
                bg-accent hover:bg-accent-hover disabled:bg-gray-300 disabled:hover:bg-gray-300 disabled:cursor-not-allowed`}
            >{loading ? "Sending..." : "Send Message"}</button>
          </form>
        </div>

        <p className="text-sm font-mdeium text-center py-6">Or email me at:{" "}<a
          href={`mailto:${contacts.email}`}
          className="text-accent underline hover:no-underline transition-colors duration-300"
        >{contacts.email}</a></p>
      </Container>
    </section>
  );
}