import '../styles/Appointments.css';

function Appointments() {
  return (
    <div className="appointments-container">
      <div className="appointments-card blue">
        <div className="appointments-icon">🦷</div>
        <p className="appointments-title">Dentist</p>
        <p>09:00–11:00</p>
        <p className="appointments-doctor">Dr. Cameron Williamson</p>
      </div>
      <div className="appointments-card purple">
        <div className="appointments-icon">💪</div>
        <p className="appointments-title">Physiotherapy Appointment</p>
        <p>11:00–12:00</p>
        <p className="appointments-doctor">Dr. Kevin Djones</p>
      </div>
    </div>
  );
}

export default Appointments;
