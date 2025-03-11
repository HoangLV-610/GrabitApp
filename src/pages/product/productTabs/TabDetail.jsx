const TabDetail = (props) => {
  const { description, features, extra_info } = props.dataDetail;
  return (
    <div className="wrap-content-detail text-[14px] text-gray leading-[28px] font-normal font-poppins">
      <p className="mb-[15px]">{description}</p>
      <ul className="mb-[15px] pl-6 list-disc">
        {features &&
          features.map((item, index) => {
            return (
              <li key={index} className="mb-1 text-[15px]">
                {item}
              </li>
            );
          })}
      </ul>
      <p>{extra_info}</p>
    </div>
  );
};

export default TabDetail;
