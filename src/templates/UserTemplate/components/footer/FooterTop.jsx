import {
  footerCategories,
  footerCompanyLinks,
  footerAccountLinks,
  contactInfo,
  socialLinks,
} from "./DataFooter";

import logo from "../../../../../public/logo.png";
import logoAndroid from "../../../../assets/image/logo_android.png";
import logoIOS from "../../../../assets/image/logo_ios.png";
import MenuFooter from "./MenuFooter";
import InfoFooter from "./InfoFooter";
const FooterTop = () => {
  return (
    <div className="footer-top">
      <div className="wrap-content container mx-auto grid grid-cols-12 space-x-[24px]">
        {/* Logo */}
        <div className="logo-container col-span-3">
          <div className="logo max-w-[144px] mb-[30px]">
            <img src={logo} className="aspect-[144/39] w-full"></img>
          </div>
          <span className="detail mb-[30px] text-[14px] leading-[27px] font-normal text-gray inline-block w-full max-w-[400px]">
            Grabit is the biggest market of grocery products. Get your daily
            needs from our store.
          </span>
          <div className="app-store flex space-x-[15px]">
            <img
              src={logoAndroid}
              className="aspect-[140/42] max-w-[140px] rounded-md"
            />
            <img
              src={logoIOS}
              className="aspect-[140/42] max-w-[140px] rounded-md"
            />
          </div>
        </div>

        {/* Menu */}
        <MenuFooter title="Category" listMenu={footerCategories} />
        <MenuFooter title="Company" listMenu={footerCompanyLinks} />
        <MenuFooter title="Account" listMenu={footerAccountLinks} />
        <InfoFooter
          title="Contact"
          listInfo={contactInfo}
          icons={socialLinks}
        />
      </div>
    </div>
  );
};

export default FooterTop;
