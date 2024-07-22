import { FC } from "react";
import { ContactInfo } from "./contact-info";
import { ContactForm } from "./contact-form";

export const Contact: FC = ({}) => {
  return (
    <div
      className="flex flex-col md:flex-row justify-center items-center gap-6 p-4"
      id="contact"
    >
      <ContactInfo />
      <ContactForm />
    </div>
  );
};
