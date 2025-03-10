import DataTable from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Button className="m-4 new-booking-color px-[55]" variant="destructive">
        <img src="icons/plus.svg" alt="add" className="plus-background rounded-full h-4.5 p-[3]" />
        <img src="icons/booking.svg" style={{ filter: 'brightness(100)' }} />
        Book New Service
      </Button>
      <div className="p-4 bg-white mx-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">All Bookings</h2>
        <DataTable />
      </div>
    </>
  );
}
