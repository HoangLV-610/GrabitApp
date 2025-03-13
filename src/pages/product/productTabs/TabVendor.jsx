import logoVendor from "../../../assets/image/logo-vendor.jpg";

const TabVendor = (props) => {
  const { name, products_count, sales, contact, description } =
    props.dataVendor;
  return (
    <>
      <div className="vendor-info flex mb-[15px]">
        <img
          src={logoVendor}
          className="w-full aspect-square max-w-[78px] border border-light-gray mr-[15px]"
        />
        <div className="info space-y-2 text-[14px] text-gray">
          <h4 className="text-[15px] font-semibold text-slate-gray">{name}</h4>
          <p>Products: {products_count}</p>
          <p>Sales: {sales}</p>
        </div>
      </div>
      <div className="des">
        <ul className="contact mb-[15px] pl-[24px] list-disc text-slate-gray font-poppins">
          <li className="mb-1 font-normal text-gray text-[15px]">
            <strong className="mr-[25px] min-w-[150px] inline-block text-slate-gray font-medium">
              Phone No. :
            </strong>
            {contact.phone}
          </li>
          <li className="mb-1 font-normal text-gray text-[15px]">
            <strong className="mr-[25px] min-w-[150px] inline-block text-slate-gray font-medium">
              Email :
            </strong>{" "}
            {contact.email}
          </li>
          <li className="mb-1 font-normal text-gray text-[15px]">
            <strong className="mr-[25px] min-w-[150px] inline-block text-slate-gray font-medium">
              Address :
            </strong>{" "}
            {contact.address}
          </li>
        </ul>
        <div className="content text-gray text-[14px] leading-[28px] font-poppins tracking-[.01rem]">
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default TabVendor;
