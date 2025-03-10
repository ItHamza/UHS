
'use client'
import { Home, Package, User, HelpCircle, Lock, FileText, Book } from "lucide-react";
import LogoSection from "./LogoSection";
import ProfileSection from "./ProfileSection";
import SidebarItem from "./SidebarItem";
import { usePathname } from 'next/navigation';

const Sidebar = () => {

  const currentPath = usePathname();
  console.log(currentPath)

  const links = [
    { label: "Home", src: "/icons/home.svg", path: "/" },
    { label: "All Bookings", src: "/icons/booking.svg", path: "/bookings" },
    { label: "All Packages", src: "/icons/package.svg", path: "/packages" },
    { label: "Support Requests", src: "/icons/support.svg", path: "/support" },
    { label: "My Profile", src: "/icons/profile.svg", path: "/profile" },
    { label: "FAQs", src: "/icons/faq.svg", path: "/faq" },
    { label: "Inclusion / Exclusions", src: "/icons/incl-excl.svg", path: "/incl" },
    { label: "Terms and Conditions", src: "/icons/tnc.svg", path: "/terms" },
    { label: "Privacy", src: "/icons/incl-excl.svg", path: "/privacy" },
  ];


  return (
    <aside className="w-64 bg-white h-screen p-5 shadow-md flex flex-col justify-between">
      <LogoSection />
      <hr className="mb-4 w-full border-0 h-[1px] bg-[radial-gradient(circle,_black_0px,_transparent_1px)] bg-[length:6px_1px]" />


      <nav className="flex-1">
        <ul className="space-y-2">

          {links.map(({ label, src, path }, index) => (
            <SidebarItem  key={index} id={index} href={`${path}`} iconSrc={src} label={`${label}`} active={currentPath == path} />
          ))}
        </ul>
      </nav>
      

      <ProfileSection />
    </aside>
  );
};



export default Sidebar;
