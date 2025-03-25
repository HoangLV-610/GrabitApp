const factsData = [
  {
    count: "65K+",
    title: "Vendors",
    subtitle: "Contrary to popular belief, Lorem is not simply random text.",
  },
  {
    count: "45B+",
    title: "Earnings",
    subtitle: "Contrary to popular belief, Lorem is not simply random text.",
  },
  {
    count: "25M+",
    title: "Sold",
    subtitle: "Contrary to popular belief, Lorem is not simply random text.",
  },
  {
    count: "70K+",
    title: "Products",
    subtitle: "Contrary to popular belief, Lorem is not simply random text.",
  },
];
const Facts = () => {
  return (
    <div className="services flex container mx-auto py-10 space-x-[24px]">
      {factsData.map((fact, index) => {
        return (
          <div
            key={index}
            className="item-service cursor-pointer flex-row justify-center items-center bg-white p-[30px] rounded-[5px] border border-light-gray text-center"
          >
            <div className="count flex justify-center font-poppins text-[40px] font-extrabold tracking-[.02rem] text-[#ddd]">
              {fact.count}
            </div>
            <div className="content">
              <h4 className="mb-[10px] text-[20px] text-slate-gray leading-[1.2] tracking-[0.01rem] font-semibold font-poppins ">
                {fact.title}
              </h4>
              <span className="text-[14px] text-gray block leading-[28px] tracking-[.02rem] font-light font-poppins">
                {fact.subtitle}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Facts;
