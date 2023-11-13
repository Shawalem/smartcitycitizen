import { Link } from 'react-router-dom';
import './sidebar.scss'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to='/' href="#">View Reports</Link>
      <Link to='/communication'>Communication Center</Link>
    </div>
  );
};

export default Sidebar;
