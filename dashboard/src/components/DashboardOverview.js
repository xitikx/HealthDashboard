import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import '../styles/DashboardOverview.css';

function DashboardOverview() {
  return (
    <div className="dashboard-overview">
      <AnatomySection />
      <HealthStatusCards />
    </div>
  );
}

export default DashboardOverview;