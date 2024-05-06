import { FloatingLabel } from "flowbite-react";
import { FC } from "react";
interface SearchProps {
  onSearch: (value: string) => void;
  value: string;
}
const Search: FC<SearchProps> = ({ onSearch, value }) => {
  return (
    <FloatingLabel
      className="max-w-xs   dark"
      variant="outlined"
      label="Search"
      onChange={(e) => onSearch(e.target.value)}
      value={value}
    />
  );
};

export default Search;
