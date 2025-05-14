import React, { useState, useMemo } from "react";
import { FiMic, FiChevronDown } from "react-icons/fi";
import { assistants, resumeCards, teachingTools } from "../data/data";
import image1 from "../assets/image1.png";
import graph from "../assets/graph.png";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const HeroDashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [wishlist, setWishlist] = useState<string[]>([]);

  const toggleWishlist = (title: string) => {
  setWishlist((prev) =>
    prev.includes(title)
      ? prev.filter((t) => t !== title)
      : [...prev, title]
  );
};

  const filteredTools = useMemo(() => {
    return teachingTools.filter((tool) => {
      const matchesSearch = tool.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesFilter =
        activeFilter === "All" || tool.category === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, activeFilter]);

  return (
    <>
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

        {/* Hero Section */}
        <div className="rounded-xl bg-gradient-to-r from-[#3CA4F7] to-[#4F6CE1] text-white p-8 relative flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-6 text-center">
            What will you teach today?
          </h1>
          <div className="w-full max-w-xl bg-white text-gray-800 rounded-full flex items-center px-4 py-2 shadow-md">
            <input
              type="text"
              placeholder="Ask Yo to create a quiz on..."
              className="flex-1 bg-transparent outline-none text-sm px-2"
            />
            <FiMic className="text-gray-500 mr-2" />
            <button className="bg-gray-100 text-sm text-gray-700 px-2 py-1 rounded-full">
              🎤
            </button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            {["Lesson Plan", "Worksheet", "PD Goal"].map((tag, idx) => (
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
          <h2 className="text-lg font-semibold mb-4">
            🧩 Workspace Quick Launch
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "🧠 Planning Studio",
                desc: "Map your curriculum goals",
                action: "Launch Studio",
              },
              {
                title: "✍️Teaching Studio",
                desc: "Create lesson plans and quizzes",
                action: "Launch Studio",
              },
              {
                title: "🎨Content Lab",
                desc: "Build flashcards, videos, slides",
                action: "Launch Lab",
              },
              {
                title: "📊Command Desk",
                desc: "Track student progress",
                action: "Launch Command",
              },
            ].map((tool, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border"
              >
                <h3 className="font-semibold mb-1">{tool.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{tool.desc}</p>
                <button className="text-blue-600 text-sm font-medium hover:underline">
                  {tool.action} →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Smart Start Guides */}
        <div>
          <h2 className="text-lg font-semibold mb-4">📘 Smart Start Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "This week’s best worksheets" },
              { title: "How to build a full lesson plan with AI" },
              { title: "How to co-teach using avatars" },
            ].map((guide, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <img
                  src={image1}
                  alt="Guide thumbnail"
                  className="w-full h-36 object-cover"
                />
                <div className="p-4">
                  <button className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full mb-2">
                    Learn
                  </button>
                  <h3 className="text-sm font-medium">{guide.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Teaching Assistants Section */}
        <div className="bg-[#F1F7FF] p-6 rounded-xl">
          <h2 className="text-lg font-semibold mb-4">
            🤖 AI Teaching Assistants — Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {assistants.map((assistant, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 shadow-sm border text-sm space-y-2"
              >
                <div className="text-2xl">{assistant.icon}</div>
                <h3 className="font-semibold">{assistant.title}</h3>
                <p className="text-gray-600">{assistant.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Resume Where You Left Off */}
        <div>
          <h2 className="text-lg font-semibold mb-4">
            📌 Resume Where You Left Off
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {resumeCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 shadow-sm border space-y-2"
              >
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
              <h3 className="text-sm font-semibold mb-2">
                👨‍🎓 Student Engagement
              </h3>

              <div className="flex flex-row-reverse items-center space-x-reverse space-x-4">
                {/* SVG on the right */}
                <div className="w-24 h-24">
                  <svg viewBox="0 0 36 36" className="w-full h-full">
                    <circle cx="18" cy="18" r="16" fill="#e5e7eb" />
                    <path
                      fill="transparent"
                      stroke="#06b6d4"
                      strokeWidth="4"
                      strokeDasharray="85, 100"
                      d="M18 2 a 16 16 0 0 1 0 32 a 16 16 0 0 1 0 -32"
                    />
                  </svg>
                </div>

                {/* Text on the left */}
                <div className="text-sm space-y-2">
                  <p className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="font-semibold">34,249</span>
                    <br />
                    <span className="text-gray-500">New students</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span className="font-semibold">420</span>
                    <br />
                    <span className="text-gray-500">Repeated</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Student Progress */}
            <div className="bg-white p-4 rounded-xl shadow-sm border">
              <h3 className="text-sm font-semibold mb-2">
                📈 Student Progress
              </h3>
              <img
                src={graph}
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
                <h3 className="text-sm font-semibold mb-2">
                  📊 Total Students
                </h3>
                <p className="text-3xl font-bold">40,689</p>
                <p className="text-sm text-green-500 mt-1">
                  ▲ 8.5% Up from yesterday
                </p>
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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-96 px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "All",
              "Planning Tools",
              "Instruction Design Tools",
              "Assessment Tools",
              "Text & Mnemonic-Based Tools",
              "Visual & Infographic Tools",
              "Interactive & Multimedia Tools",
            ].map((filter, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFilter(filter)}
                className={`text-sm px-3 py-1 rounded-full ${
                  activeFilter === filter
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Tool Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  {filteredTools.map((tool, idx) => (
    <div
      key={idx}
      className="bg-white p-4 rounded-xl border shadow-sm flex flex-col justify-between relative"
    >
      {/* Wishlist Heart Button (top-right) */}
      <button
        onClick={() => toggleWishlist(tool.title)}
        className="absolute top-2 right-2 text-blue-500"
      >
        {wishlist.includes(tool.title) ? (
          <AiFillHeart className="text-blue-500 text-xl" />
        ) : (
          <AiOutlineHeart className="text-blue-500 text-xl" />
        )}
      </button>

      {/* Icon and Title */}
      <div className="mb-4">
        <div className="flex items-center justify-start gap-2 mb-2">
          <div className="text-3xl text-gray-700">{tool.icon}</div>
        </div>
        <h3 className="font-medium text-base mt-2">{tool.title}</h3>
      </div>

      {/* Category Badge */}
      <span
        className={`text-white text-xs px-2 py-1 rounded-full inline-block self-start ${tool.color}`}
      >
        {tool.category}
      </span>

      {/* Start Button */}
      <div className="mt-4 text-right">
        <button className="text-blue-600 text-sm hover:underline">Start →</button>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
    </>
  );
};

export default HeroDashboard;
