import { activityData } from '../data/activity';
import '../styles/ActivityFeed.css';

function ActivityFeed() {
  const barsPerDay = 4; // Number of bars per day

  // Use CSS custom properties for barWidth and gapBetweenBars
  const rootStyles = getComputedStyle(document.documentElement);
  let barWidth = parseFloat(rootStyles.getPropertyValue('--bar-width')) || 6;
  let gapBetweenBars = parseFloat(rootStyles.getPropertyValue('--gap-between-bars')) || 14;

  // On mobile, dynamically adjust barWidth and gapBetweenBars to fit parent width
  const activityFeedElement = document.querySelector('.activity-feed');
  const parentWidth = activityFeedElement ? activityFeedElement.offsetWidth : 514; // Fallback to RightPanel desktop width
  const totalBars = activityData.length * barsPerDay; // 28 bars
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    // Calculate available width after padding (approximate RightPanel padding: 16px on mobile)
    const effectiveWidth = parentWidth - 32; // Adjust for padding (16px left + 16px right)
    // Total space: totalBars * barWidth + (totalBars - 1) * gapBetweenBars = effectiveWidth
    // Let barWidth = x, gapBetweenBars = y
    // 28x + 27y = effectiveWidth
    // Assume y = 2x (gap is twice the bar width for proportionality)
    // 28x + 27(2x) = 28x + 54x = 82x = effectiveWidth
    barWidth = Math.max(2, effectiveWidth / 82); // Minimum 2px for visibility
    gapBetweenBars = barWidth * 2;
  }

  // Width of one day's bar group (4 bars + 3 gaps)
  const dayGroupWidth = barsPerDay * barWidth + (barsPerDay - 1) * gapBetweenBars;

  // Calculate the total width of all bars and gaps
  const totalWidth = totalBars * barWidth + (totalBars - 1) * gapBetweenBars;

  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h3>Activity</h3>
        <p>3 appointments this week</p>
      </div>
      <div className="activity-chart">
        <div className="bars-container" style={{ width: isMobile ? '100%' : `${totalWidth}px` }}>
          {activityData.map((data) =>
            [
              data.bar1,
              data.bar2,
              data.bar3,
              data.bar4,
            ].map((bar, index) => (
              <div
                key={`${data.day}-${index}`}
                className={`bar bar${index + 1} ${bar.isBroken ? 'broken' : ''}`}
                style={{ transform: `translateY(${bar.offset}px)` }}
              >
                {bar.isBroken ? (
                  <>
                    <div className="bar-segment top" style={{ height: `${bar.height * 0.6}px` }}></div>
                    <div className="bar-segment bottom" style={{ height: `${bar.height * 0.4}px` }}></div>
                  </>
                ) : (
                  <div className="bar-segment full" style={{ height: `${bar.height}px` }}></div>
                )}
              </div>
            ))
          )}
        </div>
        <div className="day-labels" style={{ width: isMobile ? '100%' : `${totalWidth}px` }}>
          {activityData.map((data, dayIndex) => (
            <span
              key={data.day}
              style={{
                position: 'absolute',
                left: `${dayIndex * dayGroupWidth}px`,
                width: `${dayGroupWidth}px`,
                textAlign: 'center',
              }}
            >
              {data.day}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ActivityFeed;