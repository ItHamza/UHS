const ServiceFilters = () => {
  const filters = [ ["Regular Cleaning", "residential"],
                    ["Deep Cleaning", "residential"],
                    ["Specialised Cleaning", "specialised"],
                    ["Car Wash", "car-wash"]];

  return (
    <div className="flex gap-4">
      {filters.map(([filter, img], index) => (
        <button key={index} className="flex justify-center items-center px-auto flex-1 border bg-white text-gray-500 font-semibold px-4 py-2 rounded-lg">
          <img src={`/icons/${img}.svg`} alt="filter" className="h-6 mr-2" />
          {filter}
        </button>
      ))}
    </div>
  );
};

export default ServiceFilters;
