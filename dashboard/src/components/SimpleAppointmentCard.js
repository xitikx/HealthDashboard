import * as Icons from 'lucide-react';
import '../styles/SimpleAppointmentCard.css';

function SimpleAppointmentCard({ title, time, doctor, icon, bgColor }) {
  const Icon = Icons[icon];
  return (
    <div className="appointment-card" style={{ backgroundColor: bgColor }}>
      <div className="appointment-icon">
        <Icon size={20} />
      </div>
      <div className="appointment-details">
        <h4>{title}</h4>
        <p>{time}</p>
        {doctor && <p>{doctor}</p>}
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;