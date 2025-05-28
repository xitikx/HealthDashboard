import { healthIndicators } from '../data/healthData';
import lungsImage from '../assets/lungs.png'; // Import lungs image
import teethImage from '../assets/teeth.png'; // Import teeth image
import boneImage from '../assets/bone.png'; // Import bone image
import { ChevronRight } from 'lucide-react';
import '../styles/HealthStatusCards.css';

function HealthStatusCards() {
  // Map health indicator labels to their corresponding images
  const imageMap = {
    "Lungs": lungsImage,
    "Teeth": teethImage,
    "Bone": boneImage,
  };

  return (
    <div className="health-status-container">
      <div className="health-status-cards">
        {healthIndicators
          .filter((indicator) => indicator.label !== "Healthy Heart")
          .map((indicator) => {
            const imageSrc = imageMap[indicator.label] || lungsImage; // Default to lungs image if no match
            return (
              <div key={indicator.id} className="health-card">
                <div className="health-card-header">
                  <img src={imageSrc} alt={`${indicator.label} icon`} className="health-icon" />
                  <span className="health-label">{indicator.label}</span>
                </div>
                <span className="health-date">{indicator.date}</span>
                <div className="status-bar">
                  <div
                    className="status-fill"
                    style={{ width: '50%', backgroundColor: indicator.color }}
                  ></div>
                </div>
                
              </div>
            );
          })}
      </div>
      <div className="details">
        <a href="/" className="details-link">
          Details <ChevronRight size={16} />
        </a>
      </div>
    </div>
  );
}

export default HealthStatusCards;