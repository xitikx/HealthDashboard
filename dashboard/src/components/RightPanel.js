import CalendarView from './CalendarView';
import Appointments from './Appointments';
import UpcomingSchedule from "./UpcomingSchedule";
import '../styles/RightPanel.css';

function RightPanel() {
  return (
    <div className="right-panel">
      <CalendarView />
      <Appointments />
      <UpcomingSchedule />
    </div>
  );
}

export default RightPanel;