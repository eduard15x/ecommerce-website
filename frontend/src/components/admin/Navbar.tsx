import NavItem from "./NavItem";
import { CiSettings, CiUser } from "react-icons/ci";
import { FiDatabase, FiLogOut } from "react-icons/fi";
import { FaUserAlt, FaSitemap } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { useState } from "react";
import NavItemList from "./NavItemList";

export interface AdminNavbarItem {
  icon: any;
  name: string;
  link?: string;
}

const Navbar: React.FC = () => {
  const [settingsBtn, setSettingsBtn] = useState<boolean>(false);
  const [accountBtn, setAccountBtn] = useState<boolean>(false);

  const settingsArr: AdminNavbarItem[] = [
    {
      icon: <FaSitemap />,
      name: "site",
    },
    {
      icon: <AiOutlineMail />,
      name: "mail",
    },
    {
      icon: <FiDatabase />,
      name: "database",
    },
  ];

  const accountArr: AdminNavbarItem[] = [
    {
      icon: <FiLogOut />,
      name: "logout",
    },
    {
      icon: <FaUserAlt />,
      name: "my account",
    },
  ];

  return (
    <div className="navbar">
      <div className="navbar__item">
        <NavItem
          icon={<CiSettings />}
          text="Settings"
          isToggled={settingsBtn}
          setToggleButton={setSettingsBtn}
          setToggleOtherBtn={setAccountBtn}
        />
        {settingsBtn ? <NavItemList arr={settingsArr} /> : ""}
      </div>

      <div className="navbar__item">
        <NavItem
          icon={<CiUser />}
          text="Username"
          isToggled={accountBtn}
          setToggleButton={setAccountBtn}
          setToggleOtherBtn={setSettingsBtn}
        />
        {accountBtn ? <NavItemList arr={accountArr} /> : ""}
      </div>
    </div>
  );
};

export default Navbar;
