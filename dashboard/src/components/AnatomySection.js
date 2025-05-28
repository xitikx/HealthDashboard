import { Star } from 'lucide-react';
import { healthIndicators } from '../data/healthData';
import bodyImage from '../assets/anatomy.png'; // Placeholder image
import '../styles/AnatomySection.css';

function AnatomySection() {
  return (
    <div className="anatomy-section">
      <img src={bodyImage} alt="Human body illustration" className="body-image" />
    </div>
  );
}

export default AnatomySection;