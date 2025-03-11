import { Search } from "lucide-react";

const SearchIcon = (props) => {
  return (
    <Search
      color={props.color}
      stroke={props.stroke}
      size={props.size}
      className="h-full"
    />
  );
};

export default SearchIcon;
