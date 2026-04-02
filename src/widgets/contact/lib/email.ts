import emailjs from "@emailjs/browser";

type FormData = {
  from_name: string;
  from_email: string;
  message: string;
  botcheck: string;
};

export const sendEmail = (data: FormData) => {
  return emailjs.send("service_vhvkdpb", "template_9u86bp1", data, "Z029k2YwelvkZonwv");
};