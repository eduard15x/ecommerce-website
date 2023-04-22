import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

interface Props {
  icon: any;
  text: string;
  isToggled: boolean;
  setToggleButton: React.Dispatch<React.SetStateAction<boolean>>;
  setToggleOtherBtn: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavItem: React.FC<Props> = ({
  icon,
  text,
  isToggled,
  setToggleButton,
  setToggleOtherBtn,
}) => {
  const handleToggle = () => {
    setToggleButton(!isToggled);
    setToggleOtherBtn(false);
  };

  return (
    <button className="navbar__item--btn" onClick={handleToggle}>
      <span className="btn-icon">{icon}</span>
      <span className="btn-text">{text}</span>
      <span className="btn-icon">
        {isToggled ? <AiFillCaretUp /> : <AiFillCaretDown />}
      </span>
    </button>
  );
};

export default NavItem;
