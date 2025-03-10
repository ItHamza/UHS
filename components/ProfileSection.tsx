import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


const ProfileSection = () => (
  <div className="flex items-center space-x-3 p-3 border-t">
    <Avatar>
      <AvatarImage src="/icons/avatar.svg" alt="User" />
      <AvatarFallback>JS</AvatarFallback>
    </Avatar>
    <div>
      <p className="text-sm font-medium">John Smith</p>
      <p className="text-xs text-gray-500">john@urban.services</p>
    </div>
    <img src="/icons/logout.svg" alt="logout" />
  </div>
);

export default ProfileSection