import { Link } from "react-router-dom";

const PanelTitle: React.FC = () => {
  return (
    <Link to="/admin" className="panel-title">
      Admin Panel
    </Link>
  );
};

export default PanelTitle;
