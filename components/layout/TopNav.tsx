import WelcomeMessage from "../WelcomeMessage";
import SearchBar from "../SearchBar";

const TopNav = () => {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-lg">
      <div className="flex justify-between items-center">
        <WelcomeMessage name="John" />
        <SearchBar />
      </div>
    </div>
  );
};

export default TopNav;
