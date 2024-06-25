import { FC } from "react";
import { ContactInfo } from "./contact-info";
import { ContactForm } from "./contact-form";

export const Contact: FC = ({}) => {
  return (
    <div className="flex justify-center items-center gap-y-4">
      <ContactInfo />
      <ContactForm />
    </div>
  );
};
