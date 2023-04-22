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
  icon?: any;
  link?: string;
}

const arr: SideNavItemModel[] = [
  {
    name: "Dashboard",
    icon: <AiOutlineDashboard />,
  },
  {
    name: "Content",
    icon: <BiBookContent />,
  },
  {
    name: "Catalogs",
    icon: <GrCatalog />,
  },
  {
    name: "Sales",
    icon: <TbChartInfographic />,
  },
  {
    name: "Settings",
    icon: <CiSettings />,
  },
];

const SideNav: React.FC = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <ul className="sidenav">
      {arr.map((item, index) => (
        <SideNavItem
          text={item.name}
          icon={item.icon}
          index={index}
          active={active}
          setActive={setActive}
          key={index}
        />
      ))}
    </ul>
  );
};

export default SideNav;
