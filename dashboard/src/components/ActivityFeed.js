import { activityData } from '../data/activity';
import '../styles/ActivityFeed.css';

function ActivityFeed() {
  const barsPerDay = 4; // Number of bars per day
  const barWidth = 6; // Width of each bar in pixels
  const gapBetweenBars = 14; // Gap between bars in pixels
  const centerBarsWidth = 2 * barWidth + gapBetweenBars; // Width of the two center bars (bar2 and bar3) including the gap

  // Calculate the total width of all bars and gaps
  const totalBars = activityData.length * barsPerDay; // Total number of bars (7 days * 4 bars = 28)
  const totalWidth = totalBars * barWidth + (totalBars - 1) * gapBetweenBars; // 546px

  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h3>Activity</h3>
        <p>3 appointments this week</p>
      </div>
      <div className="activity-chart">
        <div className="bars-container" style={{ width: `${totalWidth}px` }}>
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
        <div className="day-labels" style={{ width: `${totalWidth}px` }}>
          {activityData.map((data, dayIndex) => (
            <span
              key={data.day}
              style={{
                position: 'absolute',
                left: `${(dayIndex * barsPerDay + 1) * (barWidth + gapBetweenBars) + (barWidth + gapBetweenBars - centerBarsWidth) / 2}px`,
                width: `${centerBarsWidth}px`,
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