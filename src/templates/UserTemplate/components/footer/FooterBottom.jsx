import paymentMethod from "../../../../assets/image/payment_method.png";

const FooterBottom = () => {
  return (
    <div className="footer-bottom bg-[#f8f8fb] items-center flex mt-20 border-y border-light-gray">
      <div className="wrap-content container mx-auto flex justify-between items-center py-[10px]">
        <div className="footer-bottom-left">
          <p className="text-gray font-light tracking-[1px] text-[13px]">
            Copyright ©<span className="text-hight-light">Grabit </span>
            all rights reserved. Powered by Grabit.
          </p>
        </div>
        <div className="footer-bottom-right">
          <img
            src={paymentMethod}
            alt="Payment method"
            className="aspect-[335/30]"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
