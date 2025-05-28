import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import ActivityFeed from './ActivityFeed';
import '../styles/DashboardMainContent.css';

function DashboardMainContent() {
  return (
    <main className="dashboard-main-content">
      <div className="left-column">
        <div className="image-health-container">
          <AnatomySection />
          <HealthStatusCards />
        </div>
        <ActivityFeed />
      </div>
    </main>
  );
}

export default DashboardMainContent;