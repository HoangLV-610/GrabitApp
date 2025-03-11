const TabSpecifications = (props) => {
  const { description } = props.dataSpecification;
  return (
    <div className="wrap-content-detail text-[14px] text-gray leading-[28px] font-normal font-poppins">
      <p className="mb-[15px]">{description}</p>
      <ul className="list-disc pl-[25px]">
        {Object.entries(props.dataSpecification).map(([key, value]) => {
          if (key === "description") return null; // Bỏ qua description

          return (
            <li key={key} className="text-[15px] text-slate-gray">
              {/* Chuyển đổi key thành chữ hoa chữ cái đầu, ví dụ: "model" => "Model" */}
              <strong className="mr-[25px] min-w-[150px] inline-block font-medium">
                {key.charAt(0).toUpperCase() + key.slice(1)}:
              </strong>{" "}
              {/* Kiểm tra nếu value là mảng thì join các phần tử thành chuỗi, 
                ngăn cách bằng dấu phẩy, ngược lại hiển thị giá trị bình thường */}
              {Array.isArray(value) ? value.join(", ") : value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TabSpecifications;
