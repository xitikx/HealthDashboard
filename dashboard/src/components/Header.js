import { Search, Bell } from 'lucide-react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
    <div className="top-bar">
    <div className="search-bar">
      <Search size={20} />
      <input type="text" placeholder="Search" disabled />
    </div>
     <div className="header-icons">
      <Bell size={20} color="#023c92" fill="#023c92" />
    </div>
  </div>

  <div className="dashboard-row">
    <h1 className="dashboard-title">Dashboard</h1>
    <p className="dashboard-period">This Week</p>
  </div>
</header>
  );
}

export default Header;