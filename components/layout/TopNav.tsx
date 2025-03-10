import WelcomeMessage from "../WelcomeMessage";
import Stats from "../Stats";
import SearchBar from "../SearchBar";
import ServiceFilters from "../SearchFilters";

const TopNav = () => {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-lg">
      <div className="flex justify-between items-center">
        <WelcomeMessage name="John" />
        <SearchBar />
      </div>
      <ServiceFilters />
      <Stats />
    </div>
  );
};

export default TopNav;
