import { Truck, Headset, BadgePercent, ShieldCheck } from "lucide-react";
import React from "react";

const serviceData = [
  {
    icon: <Truck size={32} />,
    title: "Free Shipping",
    subtitle: "Free shipping on all US order or order above $200",
  },
  {
    icon: <Headset size={32} />,
    title: "24X7 Support",
    subtitle: "Contact us 24 hours a day, 7 days a week",
  },
  {
    icon: <BadgePercent size={32} />,
    title: "30 Days Return",
    subtitle: "Simply return it within 30 days for an exchange",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Payment Secure",
    subtitle: "Contact us 24 hours a day, 7 days a week",
  },
];
const Services = () => {
  return (
    <div className="services flex container mx-auto py-10 space-x-[24px]">
      {serviceData.map((service, index) => {
        return (
          <div
            key={index}
            className="item-service cursor-pointer flex-row justify-center items-center bg-white p-[30px] rounded-[5px] border border-light-gray text-center"
          >
            <div className="icons flex justify-center mb-[15px]">
              {React.cloneElement(service.icon, {
                size: 46,
                color: "#5CAF90",
                strokeWidth: "1",
              })}
            </div>
            <div className="content">
              <h4 className="mb-[10px] text-[18px] text-slate-gray leading-[1.2] tracking-[0.6px] font-medium">
                {service.title}
              </h4>
              <span className="text-[14px] text-gray block leading-[1.5] tracking-[.5px] font-light">
                {service.subtitle}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
