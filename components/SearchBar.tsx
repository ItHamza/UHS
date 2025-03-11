import { Search } from "lucide-react";
import { Input } from "./ui/input";

const SearchBar = () => (
    <div className="relative w-full max-w-sm">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
      <Input
        type="text"
        placeholder="Search for services and bookings"
        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
);

export default SearchBar;
