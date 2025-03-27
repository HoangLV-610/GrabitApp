const Button = ({ children, ...props }) => {
  const {
    icon,
    buttonType,
    type = "button",
    disabled = false,
    classNameInput,
  } = props;

  return (
    <button
      disabled={disabled}
      type={type}
      className={`flex text-white font-medium rounded-md w-max items-center justify-center transition duration-300 cursor-pointer 
      ${
        buttonType == "buttonIcon"
          ? "px-[15px] py-[10px] bg-slate-gray text-[15px] hover:bg-main"
          : "px-[10px] py-[5px] bg-main text-[14px] hover:bg-slate-gray"
      } ${
        disabled && "!cursor-not-allowed hover:bg-slate-gray"
      } ${classNameInput}`}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </button>
  );
};

export default Button;
