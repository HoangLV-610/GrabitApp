import { Link } from "react-router-dom";
import Button from "../../components/ui/button/Button";

const BannerSale = (props) => {
  const {
    image,
    title,
    subtitle,
    discountText,
    description,
    buttonText,
    buttonLink,
    discountLabel,
    layoutType,
  } = props;
  return (
    <div className="w-full">
      <div
        className={`banner-sale rounded-[5px] overflow-hidden relative w-full ${
          layoutType == "single"
            ? "aspect-[1296/400]"
            : layoutType == "double"
            ? "aspect-[600/300]"
            : "aspect-[306/421]"
        }`}
      >
        <img src={image} className="cover w-full" />
        <div
          className={`content absolute top-0 right-0 w-full h-full flex flex-col justify-center ${
            layoutType == "single"
              ? " px-20 py-[100px] items-end  text-right"
              : layoutType == "double"
              ? "max-w-[200px] mr-[50px]  items-start text-left"
              : "!justify-start max-w-full p-[30px] m-0"
          }`}
        >
          <h2
            className={`font-semibold text-slate-gray ${
              layoutType == "single"
                ? "text-[50px] leading-[65px] tracking-[0.01rem]"
                : layoutType == "double"
                ? "text-[34px] leading-[1.2] tracking-[-0.09rem]"
                : "text-[22px] leading-[32px] text-[#444444]"
            }`}
          >
            {title}
            <br /> {subtitle}
          </h2>
          <p
            className={`font-normal ${
              layoutType == "single"
                ? "mt-[15px] mb-[30px] text-slate-gray text-[28px]"
                : "text-[17px] text-gray mt-2 mb-4 leading-[22px] "
            }`}
          >
            <span className="text-main font-semibold">{discountText} </span>
            {description}
          </p>
          <Button>
            <Link to={buttonLink}>{buttonText}</Link>
          </Button>
        </div>
        {discountLabel && discountLabel.trim() !== undefined && (
          <div className="lables text-xs absolute top-[15px] left-[15px] bg-slate-gray text-white rounded-[5px] px-[7px] py-[2px] opacity-[.8]">
            {discountLabel} Off
          </div>
        )}
      </div>
    </div>
  );
};

export default BannerSale;
