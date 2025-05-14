import React, { useState } from "react";
import {
  FiX, FiClock, FiChevronLeft, FiChevronRight, FiMessageSquare,
  FiCalendar, FiArrowRight, FiAlertCircle
} from "react-icons/fi";

const Calender: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  const generateCalendar = () => {
    const days = [];
    const totalCells = firstDay + daysInMonth;
    const rows = Math.ceil(totalCells / 6);
    let day = 1;

    for (let i = 0; i < rows; i++) {
      const week = [];
      for (let j = 0; j < 6; j++) {
        const cellIndex = i * 6 + j;
        if (cellIndex >= firstDay && day <= daysInMonth) {
          week.push(<td key={j} className="py-2 text-center">{day++}</td>);
        } else {
          week.push(<td key={j} className="py-2 text-center text-gray-300">-</td>);
        }
      }
      days.push(<tr key={i}>{week}</tr>);
    }

    return days;
  };

  return (
    <div className="fixed right-0 top-16 h-[calc(100vh-4rem)] w-80 bg-gray-50 shadow-md z-40">
      <div
        className="h-full p-4 space-y-6 overflow-y-auto scroll-smooth"
        style={{
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none' // IE/Edge
        }}
      >
        {/* Hide scrollbar in WebKit browsers */}
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Assistant */}
        <div className="bg-gray-900 text-white rounded-lg p-4 flex flex-col justify-between min-h-[300px]">
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <FiMessageSquare className="mr-2" />
                <h2 className="font-bold">Yo Assistant</h2>
              </div>
              <FiX />
            </div>
            <div className="bg-white text-black p-3 rounded mb-4 max-h-24 overflow-y-auto text-sm">
              Hello, how can I help you?
            </div>
          </div>
          <input
            type="text"
            placeholder="Chat with Yo Assistant..."
            className="p-2 text-sm rounded border w-full bg-gray-50 text-black"
          />
        </div>

        {/* Calendar */}
        <div>
          <div className="flex items-center mb-2">
            <FiCalendar className="mr-2 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-800">Mini Calendar</h3>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <button onClick={handlePrevMonth} className="text-gray-600">
                <FiChevronLeft />
              </button>
              <span className="font-medium">{monthName} {year}</span>
              <button onClick={handleNextMonth} className="text-gray-600">
                <FiChevronRight />
              </button>
            </div>

            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-500 text-xs">
                  <th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th>
                </tr>
              </thead>
              <tbody>{generateCalendar()}</tbody>
            </table>

            {/* Action Buttons */}
            <div className="flex justify-between border-t pt-3 mt-3">
              <button className="text-sm text-red-500 flex items-center space-x-2">
                <span className="w-5 h-5 border-2 border-red-500 rounded-full flex items-center justify-center text-xs">×</span>
                <span>CANCEL</span>
              </button>
              <button className="text-sm text-green-500 flex items-center space-x-2">
                <span className="w-5 h-5 border-2 border-green-500 rounded-full flex items-center justify-center text-xs">✓</span>
                <span>SAVE</span>
              </button>
            </div>
          </div>
        </div>

        {/* Suggestions */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center mb-2">
              <span className="text-yellow-500 mr-2">🧠</span>
              <h3 className="text-lg font-semibold">Yo Suggests</h3>
            </div>
            <div className="bg-white p-3 rounded shadow-sm">
              <p className="text-sm text-gray-800 flex items-start">
                <FiAlertCircle className="text-yellow-500 mr-2 mt-0.5" />
                Time to assess Class 7B?
              </p>
              <button className="text-xs text-blue-500 mt-2 flex items-center">
                Launch Evaluation Assistant <FiArrowRight className="ml-1" />
              </button>
            </div>
          </div>

          {/* Notifications */}
          <div>
            <div className="flex items-center mb-2">
              <span className="text-blue-500 mr-2">🔔</span>
              <h3 className="text-lg font-semibold">Notifications</h3>
            </div>

            {/* Notification 1 */}
            <div className="bg-white p-3 rounded shadow-sm mb-2">
              <p className="text-sm text-gray-800 flex items-start">
                <span className="mr-2">🔔</span>Physics Assignments waiting for evaluation
              </p>
              <button className="text-xs text-blue-500 mt-1 flex items-center">
                Launch Evaluation Assistant <FiArrowRight className="ml-1" />
              </button>
            </div>

            {/* Notification 2 */}
            <div className="bg-white p-3 rounded shadow-sm">
              <p className="text-sm text-gray-800 flex items-start">
                <span className="mr-2">🔔</span>Reminder: English Class Test
              </p>
              <div className="text-xs text-blue-500 mt-1 flex items-center">
                <FiClock className="mr-1" />
                5th May (Tomorrow) @ 2:30 PM
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
