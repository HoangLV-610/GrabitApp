// Input của tất cả form
const InputForm = ({
  className = "",
  classNameInput = "",
  lables,
  placeholder,
  name,
  value,
  handleChange,
  handleBlur,
  touched,
  errors,
  typeInput = "text",
  type = "input",
  options,
}) => {
  return (
    <span className={`login-wrap inline-block w-full mb-6 ${className}`}>
      <label
        className="mb-[10px] leading-[1] text-slate-gray text-[15px] font-medium inline-block"
        htmlFor=""
      >
        {lables}
      </label>

      <div className="wrap-input">
        {type === "input" ? (
          <input
            className={`px-[15px] bg-transparent border text-gray text-[14px] 
        outline-none leading-[25px] min-h-[50px] w-full rounded-[5px] 
        focus:ring-4 focus:ring-blue-500/25 ${classNameInput}
        ${
          touched && errors
            ? "border-error focus:ring-0 focus:ring-error"
            : "border-light-gray focus:ring-4 focus:ring-blue-500/25"
        }`}
            placeholder={placeholder}
            type={typeInput}
            name={name}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        ) : (
          <select
            className={`px-[15px] bg-transparent border border-light-gray text-gray text-[14px] outline-none leading-[25px] min-h-[50px] w-full rounded-[5px] focus:ring-4 focus:ring-blue-500/25  ${
              touched && errors
                ? "border-error focus:ring-0 focus:ring-error"
                : "border-light-gray focus:ring-4 focus:ring-blue-500/25"
            }`}
            name="country"
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            {options.map((item, index) => {
              return (
                <option key={index} value={item.key}>
                  {item.value}
                </option>
              );
            })}
          </select>
        )}
        {touched && errors && (
          <p className="text-error mt-2 text-sm">{errors}</p>
        )}
      </div>
    </span>
  );
};

export default InputForm;
