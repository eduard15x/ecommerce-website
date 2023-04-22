import React from "react";
import { AdminNavbarItem } from "./Navbar";

interface Props {
  arr: AdminNavbarItem[];
}

const NavItemList: React.FC<Props> = ({ arr }) => {
  return arr && arr.length ? (
    <ul className="navbar__item--list">
      {arr.map((item, index) => (
        <li className="list-item" key={index}>
          <span className="icon">{item.icon}</span>
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  ) : (
    <p>Empty</p>
  );
};

export default NavItemList;
