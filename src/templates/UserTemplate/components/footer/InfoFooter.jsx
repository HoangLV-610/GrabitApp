import { Mail, MapPinHouse, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import FacebookIcon from "../../../../components/icons/FacebookIcon";
import LinkedinIcon from "../../../../components/icons/LinkedinIcon";
import TwitterIcon from "../../../../components/icons/TwitterIcon";
import InstagramIcon from "../../../../components/icons/InstagramIcon";

const InfoFooter = ({ listInfo, title, className = "col-span-3" }) => {
  const { address, phone, email } = listInfo;
  return (
    <div className={`${className}`}>
      <h4 className="text-[18px] font-medium mb-5 text-gray w-full pb-[15px] border-b border-b-light-gray">
        {title}
      </h4>
      <div className="info-container">
        <div className="location flex space-x-[7px] leading-[28px] mb-4 items-center justify-start">
          <MapPinHouse color="#5CAF90" size={22} className="self-start mt-1 " />
          <span className="text-gray font-normal text-[14px] inline-block">
            {address}
          </span>
        </div>
        <div className="phone flex space-x-[7px] leading-[28px] mb-4 items-center justify-start">
          <Smartphone color="#5CAF90" size={18} className="self-start mt-1 " />
          <span className="text-gray font-normal text-[14px] inline-block">
            {phone}
          </span>
        </div>
        <div className="email flex space-x-[7px] leading-[28px] mb-4 items-center justify-start">
          <Mail color="#5CAF90" size={18} className="self-start mt-1" />
          <span className="text-gray font-normal text-[14px] inline-block">
            {email}
          </span>
        </div>
      </div>
      <div className="icons">
        <ul className="flex space-x-[5px]">
          <li className="w-[30px] h-[30px] bg-slate-gray rounded-[5px] flex items-center justify-center cursor-pointer">
            <Link to="#">
              <FacebookIcon width={16} height={"auto"} fill="#ffffff" />
            </Link>
          </li>
          <li className="w-[30px] h-[30px] bg-slate-gray rounded-[5px] flex items-center justify-center cursor-pointer">
            <Link to="#">
              <LinkedinIcon width={15} height={15} fill="#ffffff" />
            </Link>
          </li>
          <li className="w-[30px] h-[30px] bg-slate-gray rounded-[5px] flex items-center justify-center cursor-pointer">
            <Link to="#">
              <TwitterIcon width={14} height={"auto"} fill="#ffffff" />
            </Link>
          </li>

          <li className="w-[30px] h-[30px] bg-slate-gray rounded-[5px] flex items-center justify-center cursor-pointer">
            <Link to="#">
              <InstagramIcon width={15} height={15} fill="#ffffff" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InfoFooter;
