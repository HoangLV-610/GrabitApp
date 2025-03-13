import { Link } from "react-router-dom";
import { pathRoute } from "../../../routes/path";

const TabReviews = () => {
  const styleText = "cursor-pointer text-[#007aff] hover:text-[#007aff]";
  return (
    <div>
      <p className="text-[14px] font-medium text-gray font-poppins mb-4">
        Please{" "}
        <Link className={styleText} href={pathRoute.homePage}>
          login{" "}
        </Link>
        or{" "}
        <Link className={styleText} href={pathRoute.register}>
          register
        </Link>{" "}
        to review the product.
      </p>
    </div>
  );
};

export default TabReviews;
