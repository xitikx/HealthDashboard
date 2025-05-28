import {
  Grid,
  Calendar,
  BarChart,
  MessageSquare,
  Phone,
  Settings,
} from 'lucide-react';
import { navLinks } from '../data/navigation';
import '../styles/Sidebar.css';

// Map icon names to their components
const iconMap = {
  Grid: Grid,
  Calendar: Calendar,
  BarChart: BarChart,
  MessageSquare: MessageSquare,
  Phone: Phone,
  Settings: Settings,
};

function Sidebar() {
  return (
    <nav className="sidebar">
      {/* HealthCare Heading */}
      <div className="logo">
        <span className="logo-health">Health</span>
        <span className="logo-care">Care.</span>
      </div>
      {/* General Section */}
      <div className="sidebar-heading">General</div>
      <ul className="nav-links">
        {navLinks.general.map((link) => {
          const Icon = iconMap[link.icon];
          if (!Icon) {
            console.error(`Icon "${link.icon}" not found for ${link.name}`);
            return null;
          }
          return (
            <li
              key={link.id}
              className={`nav-item ${link.name === 'Dashboard' ? 'active' : ''}`}
            >
              <Icon size={20} />
              <span>{link.name}</span>
            </li>
          );
        })}
      </ul>

      {/* Tools Section */}
      <div className="sidebar-heading">Tools</div>
      <ul className="nav-links">
        {navLinks.tools.map((link) => {
          const Icon = iconMap[link.icon];
          if (!Icon) {
            console.error(`Icon "${link.icon}" not found for ${link.name}`);
            return null;
          }
          return (
            <li key={link.id} className="nav-item">
              <Icon size={20} />
              <span>{link.name}</span>
            </li>
          );
        })}
      </ul>

      {/* Settings Section (Pinned to Bottom) */}
      <div className="settings-container">
        <ul className="nav-links">
          {navLinks.settings.map((link) => {
            const Icon = iconMap[link.icon];
            if (!Icon) {
              console.error(`Icon "${link.icon}" not found for ${link.name}`);
              return null;
            }
            return (
              <li key={link.id} className="nav-item">
                <Icon size={20} />
                <span>{link.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;