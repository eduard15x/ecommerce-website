import React from "react";
import { AdminNavbarItem } from "./Navbar";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";

interface Props {
  arr: AdminNavbarItem[];
}

const NavItemList: React.FC<Props> = ({ arr }) => {
  const { logout } = useLogout();
  const handleLogout = (): void => {
    logout(false);
  };

  return arr && arr.length ? (
    <div className="navbar__item--list">
      {arr.map((item, index) => (
        <Link
          to={`${item.link ? item.link : "#"}`}
          target={
            item.name === "site" ||
            item.name === "mail" ||
            item.name === "database"
              ? "_blank"
              : ""
          }
          className="list-item"
          key={index}
          onClick={handleLogout}
        >
          <span className="icon">{item.icon}</span>
          <span>{item.name}</span>
        </Link>
      ))}
    </div>
  ) : (
    <p>Empty</p>
  );
};

export default NavItemList;
