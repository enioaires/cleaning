import { Building2Icon, BuildingIcon, HouseIcon } from "lucide-react";
import { FC } from "react";
import IconContainer from "./icon-container";

export const Services: FC = ({}) => {
  const services = [
    {
      title: "House cleaning",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus!",
      Icon: HouseIcon,
    },
    {
      title: "Office cleaning",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus!",
      Icon: Building2Icon,
    },
    {
      title: "Building cleaning",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus!",
      Icon: BuildingIcon,
    },
  ];
  return (
    <div className="flex justify-center py-10 px-2 md:px-0 cursor-default">
      <div className="flex justify-between w-full gap-4 px-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center border border-border rounded-lg p-4 shadow-md max-w-[320px] gap-y-2"
          >
            <IconContainer icon={service.Icon} />
            <h3 className="text-lg font-medium">{service.title}</h3>
            <p className="text-sm text-muted-foreground">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
