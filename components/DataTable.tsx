import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import TooltipSection from "./TooltipSection";
import { formatDate } from "@/lib/utils";
import Image  from "next/image";
import { start } from "repl";

const DataTable = () => {
  const data = [
    { id: 1, service: "Deep Cleaning", customer: "John Doe", status: "Canceled", date: "2024-03-05", startTime: "10:00 AM", endTime: "12:00 PM", team_no: 7, phoneNumber: '1122 3344', apartmentType: '2BHK' },
    { id: 2, service: "Car Wash", customer: "Jane Smith", status: "Completed", date: "2024-03-04", startTime: "4:00 PM", endTime: "5:00 PM", team_no: 10, phoneNumber: '1122 3344', apartmentType: 'Sedan' },
    { id: 3, service: "Regular Cleaning", customer: "Alice Johnson", status: "Pending", date: "2024-03-03", startTime: "12:30 PM", endTime: "1:30 PM", team_no: 3, phoneNumber: '1122 3344', apartmentType: '1BHK' },
    { id: 4, service: "Specialized Cleaning", customer: "Alice Johnson", status: "Completed", date: "2024-03-03", startTime: "4:00 PM", endTime: "6:00 PM", team_no: 1, phoneNumber: '1122 3344', apartmentType: '2BHK' },
  ];

  const ImagePathSetting: Record<string, string> = {
    "Deep Cleaning": "residential",
    "Car Wash": "car-wash",
    "Regular Cleaning": "residential",
    "Specialized Cleaning": "specialised",
  };

  return (
    <div className="overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead>Name</TableHead>
            <TableHead>Service Date</TableHead>
            <TableHead>Service Type</TableHead>
            <TableHead>Aprt. Type</TableHead>
            <TableHead>Team No.</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id} className="hover:bg-gray-50">
              <TableCell>
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <Image src={`/icons/${ImagePathSetting[item?.service]}.svg`} alt={item.service}
                className="w-10 h-10 rounded-full object-cover" width={50} height={50} />

                <div>
                  <p className="font-medium">{item.customer}</p>
                  <p className="text-sm text-gray-500"># {item.phoneNumber}</p>
                </div>
              </div>
              </TableCell>
              <TableCell>
                <p className="">{formatDate(item.date)}</p>
                <p className="text-sm text-gray-500">{item.startTime} to {item.endTime}</p>
              </TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold 
                    ${item.service === "Deep Cleaning" ? "bg-green-100 text-green-700" :
                      item.service === "Car Wash" ? "bg-yellow-100 text-yellow-700" :
                      item.service === "Regular Cleaning" ? "bg-pink-100 text-pink-700" :
                      item.service === "Specialized Cleaning" ? "bg-blue-100 text-blue-700" :
                      "bg-red-200 text-red-700"}`}
                >
                  {item.service}
                </span>
              </TableCell>
              <TableCell>{item.apartmentType}</TableCell>
              <TableCell>{item.team_no}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold 
                    ${item.status === "Completed" ? "bg-green-200 text-green-800" :
                      item.status === "Pending" ? "bg-yellow-200 text-yellow-800" :
                      "bg-red-200 text-red-800"}`}
                >
                  {item.status}
                </span>
              </TableCell>
              <TableCell>
                { item.status != 'Canceled' && (
                  <>
                    <TooltipSection trigger={<Image src="/icons/edit-2.svg" alt="reschedule" title="Reschedule" width={20} height={20} />} tooltip="Reschedule" />
                    <TooltipSection trigger={<Image src="/icons/trash.svg" alt="cancel" title="Cancel" width={20} height={20} />} tooltip="Cancel" />
                  </>
                ) }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;
