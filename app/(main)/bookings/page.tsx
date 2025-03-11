import DataTable from "@/components/DataTable"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const Booking = () => {
  return (
    <>
      <Button className="m-4 new-booking-color px-[55]" variant="destructive">
        <Image src="icons/plus.svg" alt="add" className="plus-background rounded-full h-4.5 p-[3]" width={15} height={15} />
        <Image src="icons/booking.svg" alt="booking" style={{ filter: 'brightness(100)' }} width={20} height={20} />
        Book New Service
      </Button>
      <div className="p-4 bg-white mx-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">All Bookings</h2>
        <DataTable />
      </div>
    </>
  )
}
export default Booking