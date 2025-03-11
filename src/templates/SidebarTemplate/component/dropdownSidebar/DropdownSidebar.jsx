import ItemCategory from "./ItemSidebar";

const DropdownSidebar = ({ isOpen, items, type = "" }) => {
  return (
    <div
      className={`dropdown-block overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
        isOpen ? "max-h-auto opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <ul>
        {items.length > 0 ? (
          items.map((item, index) => (
            <ItemCategory key={index} item={item} type={type} />
          ))
        ) : (
          <li className="text-gray text-sm p-3">Không có danh mục nào</li>
        )}
      </ul>
    </div>
  );
};

export default DropdownSidebar;
