import {
  Globe,
  LucidePhone,
  Mail,
  MapPin,
  MapPinIcon,
  Smartphone,
} from "lucide-react";
import React from "react";

const contactInfo = {
  mail_website: {
    icon: <Mail />,
    title: "Mail & Website",
    email: "mail.example@gmail.com",
    website: "www.yourdomain.com",
  },
  contact: {
    icon: <Smartphone />,
    title: "Contact",
    phone_1: "(+91)-9876XXXXX",
    phone_2: "(+91)-987654XXXX",
  },
  address: {
    icon: <MapPin />,
    title: "Address",
    street: "Ruami Mello Moraes Filho, 987",
    city: "Salvador",
    state: "MA",
    postal_code: "40352",
    country: "Brazil",
  },
};

const ItemContact = () => {
  return (
    <div className="list-contact flex gap-x-[24px]">
      {Object.values(contactInfo).map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center justify-center contact-item h-full p-[24px] border border-light-gray bg-[#f8f8fb] rounded-[5px] flex-1 text-center"
          >
            <div className="flex justify-center w-[70px] h-[70px] mb-[15px] bg-slate-gray items-center rounded-[5px]">
              {React.cloneElement(item.icon, { size: 25, color: "#fff" })}
            </div>
            <h3 className="font-semibold text-[20px] text-slate-gray tracking-[.02rem] mb-2">
              {item.title}
            </h3>
            {item.email && (
              <p className="flex items-start justify-start gap-x-3 text-[14px] text-gray font-light font-poppins leading-[28px]">
                <div className="wrap-icon mt-[6px]">
                  <Mail size={15} color="#777" />
                </div>
                {item.email}
              </p>
            )}
            {item.website && (
              <p className="flex items-start justify-start gap-x-3 text-[14px] text-gray font-light font-poppins leading-[28px]">
                <div className="wrap-icon mt-[6px]">
                  <Globe size={15} color="#777" />
                </div>
                {item.email}
                {item.website}
              </p>
            )}
            {item.phone_1 && (
              <p className="flex items-start justify-start gap-x-3 text-[14px] text-gray font-light font-poppins leading-[28px]">
                <div className="wrap-icon mt-[6px]">
                  <LucidePhone size={15} color="#777" />
                </div>
                {item.email}
                {item.phone_1}
              </p>
            )}
            {item.phone_2 && (
              <p className="flex items-start justify-start gap-x-3 text-[14px] text-gray font-light font-poppins leading-[28px]">
                <div className="wrap-icon mt-[6px]">
                  <LucidePhone size={15} color="#777" />
                </div>
                {item.phone_2}
              </p>
            )}
            {item.street && (
              <p className="flex items-start justify-start gap-x-3 text-[14px] text-gray font-light font-poppins leading-[28px]">
                <div className="wrap-icon mt-[6px]">
                  <MapPinIcon size={15} color="#777" />
                </div>
                {item.email}
                {item.street}, {item.city}, {item.state}, {item.postal_code},
                {item.country}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ItemContact;
