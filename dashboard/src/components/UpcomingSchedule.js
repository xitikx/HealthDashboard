import { upcomingSchedule } from '../data/upcomingSchedule';
import "../styles/UpcomingSchedule.css";

// Map icon strings to emojis
const emojiMap = {
  Syringe: '💉',
  Eye: '👁️',
  Heart: '❤️',
  User: '👨‍⚕️', // Doctor with a mustache vibe
};

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h3 className="schedule-title">The Upcoming Schedule</h3>
      {upcomingSchedule.map((dayData, idx) => (
        <div key={idx} className="day-section">
          <h4 className="day-header">{`On ${dayData.day}`}</h4>
          <div className="appointments">
            {dayData.appointments.map((appointment) => {
              const iconEmoji = emojiMap[appointment.icon] || '👨‍⚕️';
              return (
                <div key={appointment.id} className="appointment-card">
                  <div className="appointment-icon">
                    <span style={{ fontSize: '16px' }}>{iconEmoji}</span>
                  </div>
                  <div className="appointment-details">
                    <span className="appointment-title">{appointment.title}</span>
                    <span className="appointment-time">{appointment.time}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
