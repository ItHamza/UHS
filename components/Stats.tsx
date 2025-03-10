const Stats = () => {
  const stats = [
    { label: "Services Booked", value: 12, change: "-2", color: "text-red-500" },
    { label: "Completed Services", value: 9, change: "+4", color: "text-green-500" },
    { label: "Pending Services", value: 3, change: "+2", color: "text-blue-500" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map(({ label, value, change, color }, index) => (
        <div key={index} className="p-4 bg-white rounded-lg">
        <p className="text-bold">{label}</p>
          <span className={`text-xs ${color}`}>{change}</span>
          <p className="text-lg font-bold">{value}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
