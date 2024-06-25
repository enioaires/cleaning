import { LucideIcon } from "lucide-react";
import { FC } from "react";

type Props = {
  icon: LucideIcon;
};

const IconContainer: FC<Props> = ({ icon: Icon }) => {
  return (
    <div className="bg-primary rounded-full w-24 h-24 flex items-center justify-center">
      <Icon className="text-white size-10" />
    </div>
  );
};
export default IconContainer;
