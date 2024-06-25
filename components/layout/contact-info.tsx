import { ClockIcon, LocateIcon, MailIcon, PhoneIcon } from "lucide-react";
import { FC } from "react";

export const ContactInfo: FC = ({}) => {
  const items = [
    {
      title: "Office Adress",
      description: "123 Main Street, Anytown, USA",
      icon: LocateIcon,
    },
    { title: "Phone Number", description: "(123) 456-7890", icon: PhoneIcon },
    { title: "Email", description: "info@example.com", icon: MailIcon },
    {
      title: "Opening Time",
      description: "9:00 AM - 5:00 PM",
      icon: ClockIcon,
    },
  ];

  return (
    <div className="flex flex-col gap-y-4 cursor-default">
      <div>
        <h1 className="font-semibold text-2xl max-w-[400px]">
          Feel free to contact us with any kind of questions.
        </h1>
        <span className="text-sm text-muted-foreground">
          We will get back to you as soon as possible.
        </span>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
        {items.map((item) => (
          <div key={item.title} className="flex items-center gap-4">
            <item.icon className="w-8 h-8 text-primary" />
            <div>
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
