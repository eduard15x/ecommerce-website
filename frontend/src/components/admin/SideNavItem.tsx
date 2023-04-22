interface Props {
  text: string;
  icon: any;
  index: number;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}

const SideNavItem: React.FC<Props> = ({
  text,
  icon,
  index,
  active,
  setActive,
}) => {
  const handle = (index: number) => {
    setActive(index);
  };

  return (
    <li
      className={
        active === index
          ? "sidenav__item  sidenav__item--active"
          : "sidenav__item"
      }
      onClick={() => handle(index)}
    >
      <span className="text">{text}</span>
      <span className="icon">{icon}</span>
    </li>
  );
};

export default SideNavItem;
