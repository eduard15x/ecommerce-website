import { useState } from "react";
// icons
import { AiOutlineDashboard } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { BiBookContent } from "react-icons/bi";
import { GrCatalog } from "react-icons/gr";
import { TbChartInfographic } from "react-icons/tb";
// components
import SideNavItem from "./SideNavItem";

interface SideNavItemModel {
  name: string;
  icon: any;
  link: string;
}

const arr: SideNavItemModel[] = [
  {
    name: "Dashboard",
    icon: <AiOutlineDashboard />,
    link: "dashboard",
  },
  {
    name: "Content",
    icon: <BiBookContent />,
    link: "content",
  },
  {
    name: "Catalogs",
    icon: <GrCatalog />,
    link: "catalogs",
  },
  {
    name: "Sales",
    icon: <TbChartInfographic />,
    link: "sales",
  },
  {
    name: "Settings",
    icon: <CiSettings />,
    link: "settings",
  },
];

const SideNav: React.FC = () => {
  return (
    <ul className="sidenav">
      {arr.map((item, index) => (
        <SideNavItem
          linkTo={item.link}
          text={item.name}
          icon={item.icon}
          key={index}
        />
      ))}
    </ul>
  );
};

export default SideNav;
