import { Play } from "lucide-react";

const Stats = () => {
  const stats = [
    { label: "Services Booked", value: 12, change: "-2", color: "text-red-500" },
    { label: "Completed Services", value: 9, change: "+4", color: "text-green-500" },
    { label: "Pending Services", value: 3, change: "+2", color: "text-blue-500" },
  ];

  
  return (
    <div className="grid grid-cols-3 gap-4 px-4">
      {stats.map(({ label, value, change, color }, index) => (
        <div key={index} className="p-4 bg-white rounded-lg">
          <p className="flex text-bold">
            {label}
            <Play className={`mt-1.5 mx-1 w-3 h-3 transition-transform duration-300 ${
              Number(change) >= 0 ? "rotate-270 text-green-500 fill-green-500" : "rotate-90 text-red-500 fill-red-500"
            }`} />
            <span className={`mt-1 text-xs ${color}`}>{Math.abs(Number(change))}</span>
          </p>
          
          <p className="text-xl font-bold">{value}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
