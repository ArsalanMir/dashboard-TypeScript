import React, { useState } from "react";
import {
  FiClock,
  FiChevronLeft,
  FiChevronRight,
  FiArrowRight,
} from "react-icons/fi";

const Calender: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const daysInMonth = getDaysInMonth(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );
  const firstDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();
  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  const generateCalendar = () => {
    const days = [];
    const totalCells = firstDay + daysInMonth;
    const rows = Math.ceil(totalCells / 6);
    let day = 1;

    const today = new Date();
    const isSameDay = (d1: Date, d2: Date) =>
      d1.getDate() === d2.getDate() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getFullYear() === d2.getFullYear();

    for (let i = 0; i < rows; i++) {
      const week = [];
      for (let j = 0; j < 6; j++) {
        const cellIndex = i * 6 + j;
        if (cellIndex >= firstDay && day <= daysInMonth) {
          const thisDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            day
          );
          const isToday = isSameDay(thisDate, today);

          week.push(
            <td key={j} className="py-2 text-center">
              <div
                className={`w-8 h-8 flex items-center justify-center mx-auto ${
                  isToday ? "bg-green-100 text-green-700 rounded" : ""
                }`}
              >
                {day++}
              </div>
            </td>
          );
        } else {
          week.push(
            <td key={j} className="py-2 text-center text-gray-300">
              -
            </td>
          );
        }
      }
      days.push(<tr key={i}>{week}</tr>);
    }

    return days;
  };

  return (
    <div className="fixed right-0 top-16 h-[calc(100vh-4rem)] w-full sm:w-80 bg-gray-50 shadow-md z-40 transform transition-transform duration-300 ease-in-out">
  <div
    className="h-full p-4 space-y-6 overflow-y-auto scroll-smooth"
    style={{
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    }}
  >
    <style>{`
      div::-webkit-scrollbar {
        display: none;
      }
    `}</style>

    {/* Chat Widget */}
    <div className="w-full sm:w-[280px] h-[414px] rounded-[8px] bg-[#264653] flex flex-col text-white overflow-hidden mx-auto">
      {/* Header */}
      <div className="px-4 pt-4 pb-2 flex items-center space-x-2">
        <h1 className="text-sm font-bold">💬 Yo Assistant</h1>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 mx-4" />

      <div className="px-4 mt-6">
        <div className="bg-white rounded-lg px-3 py-2 w-max max-w-[80%]">
          <p className="text-sm text-[#264653]">
            Hello, How can I help you?
          </p>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-grow" />

      {/* Divider line */}
      <div className="border-t border-gray-600 mx-4" />

      {/* Input Area */}
      <div className="px-4 py-3">
        <input
          type="text"
          placeholder="Chat with Yo Assistant..."
          className="w-full px-3 py-2 text-xs text-white placeholder-gray-300 bg-[#005F73] border border-gray-500 rounded-full focus:outline-none"
        />
      </div>
    </div>

    {/* Calendar */}
    <div className="mx-auto max-w-[300px] sm:max-w-none">
      <div className="flex items-center mb-2">
        <span className="mr-2 text-gray-600">📆</span>
        <h3 className="text-lg font-semibold text-gray-800">
          Mini Calendar
        </h3>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-3">
          <button onClick={handlePrevMonth} className="text-gray-600">
            <FiChevronLeft />
          </button>
          <span className="font-medium">
            {monthName} {year}
          </span>
          <button onClick={handleNextMonth} className="text-gray-600">
            <FiChevronRight />
          </button>
        </div>

        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-500 text-xs">
              <th>S</th>
              <th>M</th>
              <th>T</th>
              <th>W</th>
              <th>T</th>
              <th>F</th>
            </tr>
          </thead>
          <tbody>{generateCalendar()}</tbody>
        </table>

        {/* Action Buttons */}
        <div className="flex justify-between border-t pt-3 mt-3">
          <button className="text-sm text-red-500 flex items-center space-x-2">
            <span className="w-5 h-5 border-2 border-red-500 rounded-full flex items-center justify-center text-xs">
              ×
            </span>
            <span className="text-black font-light">CANCEL</span>
          </button>
          <button className="text-sm text-green-500 flex items-center space-x-2">
            <span className="w-5 h-5 border-2 border-green-500 rounded-full flex items-center justify-center text-xs">
              ✓
            </span>
            <span className="text-black font-light">SAVE</span>
          </button>
        </div>
      </div>
    </div>

    {/* Suggestions */}
    <div className="space-y-6 mx-auto max-w-[300px] sm:max-w-none">
      <div>
        <div className="flex items-center mb-2">
          <span className="text-yellow-500 mr-2">🧠</span>
          <h3 className="text-lg font-semibold">Yo Suggests</h3>
        </div>
        <div className="bg-white p-3 rounded shadow-sm">
          <p className="text-sm text-gray-800 flex items-start">
            <span className="text-yellow-500 mr-2 mt-0.5" >💡</span>
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
            <span className="mr-2">🔔</span>Physics Assignments waiting for
            evaluation
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
