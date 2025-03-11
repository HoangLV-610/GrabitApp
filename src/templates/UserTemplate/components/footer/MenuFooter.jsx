import { Link } from "react-router-dom";

const MenuFooter = ({ listMenu, title, className = "col-span-2" }) => {
  return (
    <div className={`${className}`}>
      <h4 className="text-[18px] font-medium mb-5 text-gray w-full pb-[15px] border-b border-b-light-gray">
        {title}
      </h4>
      <ul>
        {listMenu.map((item, index) => {
          return (
            <li
              key={index}
              className="leading-[20px] font-normal text-[14px] mb-[16px] text-gray"
            >
              <Link
                to={item.link}
                className=" transition duration-300 hover:text-main "
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuFooter;
