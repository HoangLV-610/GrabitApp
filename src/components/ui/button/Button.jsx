const Button = ({ children, ...props }) => {
  const { icon, buttonType, type = "button" } = props;
  return (
    <button
      type={type}
      className={`flex text-white font-medium rounded-md w-max items-center justify-center transition duration-300 cursor-pointer
      ${
        buttonType == "buttonIcon"
          ? "px-[15px] py-[10px] bg-slate-gray text-[15px] hover:bg-main"
          : "px-[10px] py-[5px] bg-main text-[14px] hover:bg-slate-gray"
      }`}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </button>
  );
};

export default Button;
