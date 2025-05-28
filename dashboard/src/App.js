import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardMainContent from './components/DashboardMainContent';
import RightPanel from './components/RightPanel';
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <div className="content-wrapper">
        <Sidebar />
        <div className="center-section">
          <Header />
          <DashboardMainContent />
        </div>
        <RightPanel />
      </div>
    </div>
  );
}

export default App;