import React from 'react';
import { FiMic, FiChevronDown } from 'react-icons/fi';

const assistants = [
  { icon: '🧠', title: 'AI Planning Assistant', desc: 'Design your year with ease — set goals, align curriculum, and auto-schedule lessons.' },
  { icon: '✍️', title: 'AI Class Assistant', desc: 'Design daily content — quizzes, homework, and assignments, personalized by AI.' },
  { icon: '🎨', title: 'AI Resource Generator', desc: 'Create personalized classroom materials — flashcards, slides, and visual aids in seconds.' },
  { icon: '📊', title: 'AI Admin Assistant', desc: 'Track student progress, send reports, and manage communication in one place.' },
  { icon: '🌱', title: 'AI Growth Assistant', desc: 'Achieve your PD goals — self-assess, earn certifications, and grow with AI support.' },
  { icon: '🧑‍🏫', title: 'AI Co-Teacher', desc: 'Teach with an AI avatar — co-deliver lessons, explain concepts, and guide students.' },
];

const resumeCards = [
  {
    icon: '🔬',
    title: 'CONTINUE WORKING ON GRADE 6 SCIENCE LESSON?',
    subtitle: 'Last opened: Worksheet Builder · 2 days ago',
  },
  {
    icon: '👩‍💻',
    title: 'CONTINUE WORKING ON JULIA - YOUR AI CO-TEACHER?',
    subtitle: 'Last opened: Avatar Hub · 3 days ago',
  },
  {
    icon: '⚗️',
    title: 'CONTINUE CREATING GRADE 7 CHEMISTRY EXPERIMENT?',
    subtitle: 'Last opened: Content Lab · 4 days ago',
  },
];

const HeroDashboard: React.FC = () => {
  return (
    <div className="flex flex-col space-y-10 p-6 bg-[#F9FBFF] min-h-screen">

      {/* Hero Section */}
      <div className="rounded-xl bg-gradient-to-r from-[#3CA4F7] to-[#4F6CE1] text-white p-8 relative flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-center">What will you teach today?</h1>
        <div className="w-full max-w-xl bg-white text-gray-800 rounded-full flex items-center px-4 py-2 shadow-md">
          <input
            type="text"
            placeholder="Ask Yo to create a quiz on..."
            className="flex-1 bg-transparent outline-none text-sm px-2"
          />
          <FiMic className="text-gray-500 mr-2" />
          <button className="bg-gray-100 text-sm text-gray-700 px-2 py-1 rounded-full">🎤</button>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          {['Lesson Plan', 'Worksheet', 'PD Goal'].map((tag, idx) => (
            <button
              key={idx}
              className="bg-white text-gray-700 text-sm px-3 py-1 rounded-full shadow-sm flex items-center space-x-1"
            >
              <span>{tag}</span>
              <FiChevronDown className="text-xs" />
            </button>
          ))}
        </div>
      </div>

      {/* Workspace Quick Launch */}
      <div>
        <h2 className="text-lg font-semibold mb-4">🍀 Workspace Quick Launch</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Planning Studio', desc: 'Map your curriculum goals', action: 'Launch Studio' },
            { title: 'Teaching Studio', desc: 'Create lesson plans and quizzes', action: 'Launch Studio' },
            { title: 'Content Lab', desc: 'Build flashcards, videos, slides', action: 'Launch Lab' },
            { title: 'Command Desk', desc: 'Track student progress', action: 'Launch Command' }
          ].map((tool, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border">
              <h3 className="font-semibold mb-1">{tool.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{tool.desc}</p>
              <button className="text-blue-600 text-sm font-medium hover:underline">{tool.action} →</button>
            </div>
          ))}
        </div>
      </div>

      {/* Smart Start Guides */}
      <div>
        <h2 className="text-lg font-semibold mb-4">📘 Smart Start Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'This week’s best worksheets' },
            { title: 'How to build a full lesson plan with AI' },
            { title: 'How to co-teach using avatars' }
          ].map((guide, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Guide thumbnail"
                className="w-full h-36 object-cover"
              />
              <div className="p-4">
                <button className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full mb-2">Learn</button>
                <h3 className="text-sm font-medium">{guide.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Teaching Assistants Section */}
      <div className="bg-[#F1F7FF] p-6 rounded-xl">
        <h2 className="text-lg font-semibold mb-4">🤖 AI Teaching Assistants — Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {assistants.map((assistant, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border text-sm space-y-2">
              <div className="text-2xl">{assistant.icon}</div>
              <h3 className="font-semibold">{assistant.title}</h3>
              <p className="text-gray-600">{assistant.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Resume Where You Left Off */}
      <div>
        <h2 className="text-lg font-semibold mb-4">📌 Resume Where You Left Off</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {resumeCards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border space-y-2">
              <div className="text-2xl">{card.icon}</div>
              <h3 className="font-semibold text-sm">{card.title}</h3>
              <p className="text-gray-600 text-xs">{card.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
            {/* Analytics Snapshot */}
      <div>
        <h2 className="text-lg font-semibold mb-4">🧠 Analytics Snapshot</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Student Engagement */}
          <div className="bg-white p-4 rounded-xl shadow-sm border">
            <h3 className="text-sm font-semibold mb-2">👨‍🎓 Student Engagement</h3>
            <div className="flex items-center space-x-4">
              {/* Pie chart */}
              <div className="w-24 h-24">
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  <circle cx="18" cy="18" r="16" fill="#e5e7eb" />
                  <path
                    fill="transparent"
                    stroke="#06b6d4"
                    strokeWidth="4"
                    strokeDasharray="85, 100"
                    d="M18 2
                      a 16 16 0 0 1 0 32
                      a 16 16 0 0 1 0 -32"
                  />
                </svg>
              </div>
              {/* Labels */}
              <div className="text-sm">
                <p><span className="font-semibold">34,249</span> <span className="text-gray-500">New students</span></p>
                <p><span className="font-semibold">420</span> <span className="text-gray-500">Repeated</span></p>
              </div>
            </div>
          </div>

          {/* Student Progress */}
          <div className="bg-white p-4 rounded-xl shadow-sm border">
            <h3 className="text-sm font-semibold mb-2">📈 Student Progress</h3>
            <img
              src="https://via.placeholder.com/300x150?text=Line+Chart"
              alt="Student Progress Graph"
              className="w-full h-32 object-contain"
            />
            <div className="flex justify-between text-xs mt-2 text-gray-500">
              <span>🟢 Below average</span>
              <span>🔵 Above average</span>
            </div>
          </div>

          {/* Total Students */}
          <div className="bg-white p-4 rounded-xl shadow-sm border flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-semibold mb-2">📊 Total Students</h3>
              <p className="text-3xl font-bold">40,689</p>
              <p className="text-sm text-green-500 mt-1">▲ 8.5% Up from yesterday</p>
            </div>
            <button className="mt-4 bg-[#4F6CE1] text-white text-sm py-2 px-4 rounded-full hover:bg-[#3a58cc] transition">
              Check performance
            </button>
          </div>

        </div>
      </div>
            {/* All Tools Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">🧰 All Tools</h2>

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search for tools..."
            className="w-full sm:w-96 px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            'All',
            'Planning Tools',
            'Instruction Design Tools',
            'Assessment Tools',
            'Text & Mnemonic-Based Tools',
            'Visual & Infographic Tools',
            'Interactive & Multimedia Tools',
          ].map((filter, idx) => (
            <button
              key={idx}
              className="bg-gray-100 hover:bg-gray-200 text-sm px-3 py-1 rounded-full"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Tool Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {[
            { title: 'Curriculum Mapper', category: 'Planning Tools', color: 'bg-yellow-400' },
            { title: 'Class Goals Planner', category: 'Planning Tools', color: 'bg-yellow-400' },
            { title: 'Teaching Calendar Planner', category: 'Planning Tools', color: 'bg-yellow-400' },
            { title: 'Reflection Diary', category: 'Planning Tools', color: 'bg-yellow-400' },

            { title: 'Lesson Planner', category: 'Instruction Design Tools', color: 'bg-blue-500' },
            { title: 'Quiz Builder', category: 'Instruction Design Tools', color: 'bg-blue-500' },
            { title: 'Worksheet Generator', category: 'Instruction Design Tools', color: 'bg-blue-500' },
            { title: 'Homework Creator', category: 'Instruction Design Tools', color: 'bg-blue-500' },
            { title: 'Assignment Designer', category: 'Instruction Design Tools', color: 'bg-blue-500' },

            { title: 'Assignment Designer', category: 'Assessment Tools', color: 'bg-red-500' },
            { title: 'Assesment Generator', category: 'Assessment Tools', color: 'bg-red-500' },
            { title: 'Evaluation Assistant', category: 'Assessment Tools', color: 'bg-red-500' },
            { title: 'Report Card Generator', category: 'Assessment Tools', color: 'bg-red-500' },

            { title: 'Mnemonic Maker', category: 'Text & Mnemonic-Based Tools', color: 'bg-pink-400' },
            { title: 'Flashcard Generator', category: 'Text & Mnemonic-Based Tools', color: 'bg-pink-400' },
          ].map((tool, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl border shadow-sm flex flex-col justify-between"
            >
              <div>
                <span
                  className={`text-white text-xs px-2 py-1 rounded-full inline-block mb-2 ${tool.color}`}
                >
                  {tool.category}
                </span>
                <h3 className="font-medium text-sm">{tool.title}</h3>
              </div>
              <div className="mt-4 text-right">
                <button className="text-blue-600 text-sm hover:underline">
                  Start →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default HeroDashboard;
