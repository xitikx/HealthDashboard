import React, { useState } from "react";
import { User, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import "../styles/Calendar.css";

const calendarData = [
  { day: "Mon", date: 25, blocks: ["10:00", "11:00", "12:00"] },
  { day: "Tue", date: 26, blocks: ["08:00", "09:00", "10:00"], blueBlock: "09:00" },
  { day: "Wed", date: 27, blocks: ["12:00", "13:00"] },
  { day: "Thu", date: 28, blocks: ["10:00", "11:00"], grayBlocks: ["11:00"] },
  { day: "Fri", date: 29, blocks: ["14:00", "16:00"] },
  { day: "Sat", date: 30, blocks: ["12:00", "14:00", "15:00"], grayBlocks: ["12:00"] },
  { day: "Sun", date: 31, blocks: ["09:00", "10:00", "11:00"], grayBlocks: ["09:00"] },
];

const CalendarView = () => {
  // State for the current month and year
  const [currentDate, setCurrentDate] = useState(new Date(2021, 9, 1)); // October 2021 (month is 0-indexed: 9 = October)
  const monthYear = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' }); // "October 2021"

  // Handlers for month navigation
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <div className="calendar">
      {/* Calendar header with two rows */}
      <div className="calendar-header">
        {/* First row: Avatar and plus button, right-aligned */}
        <div className="header-row-1">
          <div className="avatar">
            <User size={24} color="#FFFFFF" fill="#023c92" />
          </div>
          <div className="plus-button">
            <Plus size={16} color="#FFFFFF" />
          </div>
        </div>

        {/* Second row: Month and year on the left, arrows on the right */}
        <div className="header-row-2">
          <span className="month-year">{monthYear}</span>
          <div className="month-navigation">
            <ChevronLeft size={16} className="arrow" onClick={handlePrevMonth} />
            <ChevronRight size={16} className="arrow" onClick={handleNextMonth} />
          </div>
        </div>
      </div>

      {/* Days and dates row */}
      <div className="header-row">
        {calendarData.map((day, idx) => (
          <div key={idx} className={`day-cell ${day.day === "Tue" ? "tuesday" : ""}`}>
            <div className="day">{day.day}</div>
            <div className="date">{day.date}</div>
          </div>

        ))}
      </div>

      {/* Time slots */}
      <div className="body">
        {Array.from({ length: 3 }).map((_, timeIdx) => (
          <div key={timeIdx} className="time-row">
            {calendarData.map((day, colIdx) => {
              const time = day.blocks[timeIdx];
              if (!time) return <div key={colIdx} className={`slot empty ${day.day === "Tue" ? "tuesday" : ""}`}>―</div>;
              const isBlue = day.blueBlock === time;
              const isGray = day.grayBlocks?.includes(time);
              return (
                <div
                  key={colIdx}
                  className={`slot ${isBlue ? "blue" : isGray ? "gray" : "light"} ${day.day === "Tue" ? "tuesday" : ""}`}

                >
                  {time}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;