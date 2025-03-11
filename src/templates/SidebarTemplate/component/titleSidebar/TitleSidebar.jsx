import { ChevronDown } from "lucide-react";

const TitleSidebar = ({ title, isOpen, toggleOpen }) => {
  return (
    <div className="title-block border-b border-b-light-gray pb-[15px] flex justify-between items-center">
      <h3 className="text-[20px] font-semibold text-slate-gray">{title}</h3>
      <span
        onClick={toggleOpen}
        className={`cursor-pointer flex-shrink-0 transition-transform duration-300 ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
      >
        <ChevronDown size={18} strokeWidth={1} color="#212529" />
      </span>
    </div>
  );
};

export default TitleSidebar;
