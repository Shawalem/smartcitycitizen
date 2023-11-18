import { Link } from 'react-router-dom';
import './sidebar.scss'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_wrapper">
      <Link to='/' href="#">View Reports</Link>
      </div>
    </div>
  );
};

export default Sidebar;
