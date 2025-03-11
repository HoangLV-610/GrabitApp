import { ChevronDown } from "lucide-react";

const ButtonDropDown = ({ children, ...props }) => {
  const { icon, content } = props;

  return (
    <>
      <div className="flex relative justify-start px-4 py-0 rounded-md bg-main text-white text-[15px] min-h-[50px] items-center w-full max-w-[200px] font-medium cursor-pointer group">
        <span className="mr-2">{icon}</span>
        {children}
        <span className="absolute right-[15px]">
          <ChevronDown size={18} />
        </span>

        {content}
      </div>
    </>
  );
};

export default ButtonDropDown;
