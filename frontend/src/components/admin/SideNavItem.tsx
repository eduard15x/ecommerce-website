import { Link, useLocation } from "react-router-dom";

interface Props {
  linkTo: string;
  text: string;
  icon: any;
}

const SideNavItem: React.FC<Props> = ({ linkTo, text, icon }) => {
  const location = useLocation();

  return (
    <Link
      to={`/admin/${linkTo}`}
      className={
        location.pathname === `/admin/${linkTo}`
          ? "sidenav__item  sidenav__item--active"
          : "sidenav__item"
      }
    >
      <span className="text">{text}</span>
      <span className="icon">{icon}</span>
    </Link>
  );
};

export default SideNavItem;
