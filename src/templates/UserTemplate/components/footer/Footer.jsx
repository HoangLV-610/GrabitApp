import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <div className="footer-container pt-20 border-t border-t-light-gray mt-10">
      <FooterTop />
      <FooterBottom />
    </div>
  );
};

export default Footer;
