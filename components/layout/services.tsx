import { Building2Icon, BuildingIcon, HouseIcon } from "lucide-react";
import { FC } from "react";
import IconContainer from "./icon-container";

export const Services: FC = ({}) => {
  const services = [
    {
      title: "House cleaning",
      description:
        "Keep your home clean and organized with our residential cleaning services. Our skilled team ensures a safe and hygienic environment for you and your family.",
      Icon: HouseIcon,
    },
    {
      title: "Office cleaning",
      description:
        "Maintain your workspace spotless with our professional office cleaning services. We ensure a clean and productive work environment.",
      Icon: Building2Icon,
    },
    {
      title: "Building cleaning",
      description:
        "We offer comprehensive cleaning services for commercial and residential buildings, taking care of all common areas, hallways, stairs, and facades.",
      Icon: BuildingIcon,
    },
  ];

  return (
    <div
      className="flex flex-col items-center py-10 px-2 sm:px-6 lg:px-8 cursor-default"
      id="services"
    >
      <div className="flex flex-col md:flex-row justify-between w-full gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center border border-border rounded-lg p-4 shadow-md w-full md:max-w-[320px] gap-y-2"
          >
            <IconContainer icon={service.Icon} />
            <h3 className="text-lg font-medium text-center">{service.title}</h3>
            <p className="text-sm text-muted-foreground text-center">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
