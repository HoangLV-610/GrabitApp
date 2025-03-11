import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { pathRoute } from "../../routes/path";

const Breadcrumb = (props) => {
  const { titleBreadcrumb, itemBreadcrumb, link = pathRoute.homePage } = props;
  return (
    <div className="wrap-breadcrumb grid grid-cols-12 items-center p-[15px] border-x border-b border-light-gray rounded-b-[5px] mb-10">
      <div className="title-breadcrumb col-span-6 px-[12px]">
        <h4 className="text-slate-gray text-[15px] font-semibold leading-[22px]">
          {titleBreadcrumb}
        </h4>
      </div>
      <div className="list-breadcrumb col-span-6 px-[12px] flex justify-end">
        <ul className="flex items-center gap-1">
          <li className="inline-block text-slate-gray text-sm font-normal tracking-[.02rem]">
            <Link to={link}>Home </Link>
          </li>
          <li className="active flex items-center gap-1 text-sm font-normal tracking-[.02rem] text-main">
            <ChevronRight size={14} />
            <span>{itemBreadcrumb}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
