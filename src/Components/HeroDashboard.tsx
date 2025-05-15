import React, { useState, useMemo } from "react";
import { FiMic, FiChevronDown } from "react-icons/fi";
import { assistants, resumeCards, teachingTools } from "../data/data";
import image1 from "../assets/image1.png";
import graph from "../assets/graph.png";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const HeroDashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [wishlist, setWishlist] = useState<string[]>([]);

  const toggleWishlist = (title: string) => {
    setWishlist((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
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
        <div className="rounded-xl bg-gradient-to-r from-[#3CA4F7] to-[#4F6CE1] text-white px-4 py-8 sm:p-8 relative flex flex-col items-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center">
            What will you teach today?
          </h1>

          {/* Input Box */}
          <div className="w-full max-w-md sm:max-w-xl bg-white text-gray-800 rounded-full flex items-center px-3 py-2 sm:px-4 sm:py-2 shadow-md">
            <input
              type="text"
              placeholder="Ask Yo to create a quiz on..."
              className="flex-1 bg-transparent outline-none text-sm px-2"
            />
            <FiMic className="text-gray-500 mr-2 hidden sm:block" />
            <button className="bg-gray-100 text-sm text-gray-700 px-2 py-1 rounded-full">
              🎤
            </button>
          </div>

          {/* Tags */}
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
        <div className="relative px-4 sm:px-0 mt-6">
          <h2 className="text-base sm:text-lg font-semibold mb-4">
            🧩 Workspace Quick Launch
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
            {[
              {
                title: "🧠 Planning Studio",
                desc: "Map your curriculum goals",
                action: "Launch Studio",
              },
              {
                title: "✍️ Teaching Studio",
                desc: "Create lesson plans and quizzes",
                action: "Launch Studio",
              },
              {
                title: "🎨 Content Lab",
                desc: "Build flashcards, videos, slides",
                action: "Launch Lab",
              },
              {
                title: "📊 Command Desk",
                desc: "Track student progress",
                action: "Launch Command",
              },
            ].map((tool, index) => (
              <div
                key={index}
                className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 hover:border-gray-200 transition-colors"
              >
                <h3 className="font-medium text-sm mb-1">{tool.title}</h3>
                <p className="text-xs text-gray-500 mb-2">{tool.desc}</p>
                <div className="flex justify-end">
                  <button className="text-blue-600 text-xs font-medium hover:underline flex items-center">
                    {tool.action}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Controls */}
          <div className="flex flex-col items-start space-y-1 sm:ml-2 mt-2">
            <div className="flex space-x-1 mb-2 ml-2">
              {[1, 2, 3].map((dot) => (
                <div key={dot} className="w-1 h-1 rounded-full bg-blue-400" />
              ))}
            </div>
            <div className="flex space-x-1">
              <button className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-2.5 w-2.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 hover:bg-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-2.5 w-2.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Smart Start Guides */}
        <div className="relative">
          <h2 className="text-lg font-semibold mb-4">📘 Smart Start Guides</h2>

          {/* Guides grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-1">
            {[
              {
                title: "This week's best worksheets",
                image: image1,
              },
              {
                title: "How to build a full lesson plan with AI",
                image: image1,
              },
              {
                title: "How to co-teach using avatars",
                image: image1,
              },
            ].map((guide, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col"
              >
                <img
                  src={guide.image}
                  alt="Guide thumbnail"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <button className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full mb-2 w-max">
                    Learn
                  </button>
                  <h3 className="text-sm font-medium">{guide.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Mini slider controls */}
          <div className="flex flex-col items-start mt-4 sm:mt-3">
            {/* Dots */}
            <div className="flex space-x-1 mb-2 ml-2">
              {[1, 2, 3].map((dot) => (
                <div
                  key={dot}
                  className="w-1 h-1 rounded-full bg-blue-400"
                ></div>
              ))}
            </div>

            {/* Arrows */}
            <div className="flex space-x-1">
              <button className="w-6 h-6 sm:w-5 sm:h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="w-6 h-6 sm:w-5 sm:h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* AI Teaching Assistants Section */}
        <div className="mt-6">
          <h2 className="text-lg font-bold mb-4">
            🤖 AI Teaching Assistants — Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {assistants.map((assistant, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow text-sm space-y-2"
              >
                <div className="text-2xl">{assistant.icon}</div>
                <h3 className="font-semibold text-base">{assistant.title}</h3>
                <p className="text-gray-600 text-xs">{assistant.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Resume Where You Left Off */}
        <div className="mt-8">
          <h2 className="text-lg font-bold mb-4">
            📌 Resume Where You Left Off
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {resumeCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow space-y-2"
              >
                <div className="text-2xl">{card.icon}</div>
                <h3 className="font-semibold text-sm">{card.title}</h3>
                <p className="text-gray-600 text-xs">{card.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Analytics Snapshot */}
        <div className="relative mt-8">
          <h2 className="text-lg font-bold mb-4">🧠 Analytics Snapshot</h2>

          {/* Analytics Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-1">
            {/* Student Engagement */}
            <div className="bg-[#F9FBFD] p-4 rounded-xl shadow-sm">
              <h3 className="text-sm font-semibold text-[#0F3C60] mb-4 flex items-center gap-1">
                <svg
                  className="w-4 h-4 text-[#0F3C60]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
                Student Engagement
              </h3>

              <div className="flex items-center justify-between">
                {/* Left: Text Section */}
                <div className="text-xs space-y-3">
                  <p className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-[#2DD4BF] rounded-full"></span>
                    <span className="font-semibold text-[#0F3C60]">34,249</span>
                    <span className="text-gray-500">New students</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-[#3B82F6] rounded-full"></span>
                    <span className="font-semibold text-[#0F3C60]">420</span>
                    <span className="text-gray-500">Repeated</span>
                  </p>
                </div>

                {/* Right: Donut Chart */}
                <div className="w-24 h-24">
                  <svg
                    viewBox="0 0 36 36"
                    className="w-full h-full transform -rotate-90"
                  >
                    <circle cx="18" cy="18" r="16" fill="#F4F7FA" />
                    {/* Teal - 20% */}
                    <path
                      fill="transparent"
                      stroke="#2DD4BF"
                      strokeWidth="10"
                      strokeDasharray="20, 100"
                      strokeLinecap="round"
                      d="M18 2 a 16 16 0 0 1 0 32 a 16 16 0 0 1 0 -32"
                    />
                    {/* Blue - 80% */}
                    <path
                      fill="transparent"
                      stroke="#3B82F6"
                      strokeWidth="10"
                      strokeDasharray="80, 100"
                      strokeDashoffset="-20"
                      strokeLinecap="round"
                      d="M18 2 a 16 16 0 0 1 0 32 a 16 16 0 0 1 0 -32"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Student Progress */}
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h3 className="text-sm font-semibold mb-4">
                📈 Student Progress
              </h3>
              <img
                src={graph}
                alt="Student Progress Graph"
                className="w-full h-28 object-contain"
              />
              <div className="flex justify-center text-xs mt-2 text-gray-500 space-x-4">
                <span>🟢 Below average</span>
                <span>🔵 Above average</span>
              </div>
            </div>

            {/* Total Students */}
            <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-semibold mb-2">
                  📊 Total Students
                </h3>
                <p className="text-2xl font-bold">40,689</p>
                <p className="text-xs text-green-500 mt-1">
                  ▲ 8.5% Up from yesterday
                </p>
              </div>
              <button className="mt-4 bg-[#4F6CE1] text-white text-xs py-1.5 px-3 rounded-full hover:bg-[#3a58cc] transition">
                Check performance
              </button>
            </div>
          </div>

          {/* Mini slider controls - bottom left */}
          <div className="flex flex-col items-start mt-2 ml-1">
            {/* Dots */}
            <div className="flex space-x-1 mb-2 ml-2">
              {[1, 2, 3].map((dot) => (
                <div
                  key={dot}
                  className="w-1 h-1 rounded-full bg-blue-400"
                ></div>
              ))}
            </div>

            {/* Arrows */}
            <div className="flex space-x-1">
              <button className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-2.5 w-2.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-2.5 w-2.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* All Tools Section */}
        <div className="px-4">
          <h2 className="text-lg font-semibold mb-4">🧰 All Tools</h2>

          {/* Search Bar with Icon */}
          <div className="mb-4 relative max-w-full sm:max-w-md">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                ></path>
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search for tools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "All",
              "📘 Planning Tools",
              "Instruction Design Tools",
              "Assessment Tools",
              "🔡 Text & Mnemonic-Based Tools",
              "🖼️ Visual & Infographic Tools",
              "🎬 Interactive & Multimedia Tools",
            ].map((filter, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFilter(filter)}
                className={`text-sm px-4 py-2 rounded-full shadow-sm ${
                  activeFilter === filter
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-200 text-black font-bold"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Tool Cards Grid */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
              {filteredTools.map((tool, idx) => (
                <div
                  key={idx}
                  className="bg-white p-2 rounded-lg shadow-sm flex flex-col justify-between relative"
                >
                  {/* Wishlist Heart Button */}
                  <button
                    onClick={() => toggleWishlist(tool.title)}
                    className="absolute top-2 right-2 text-blue-500"
                  >
                    {wishlist.includes(tool.title) ? (
                      <AiFillHeart className="text-blue-500 text-base" />
                    ) : (
                      <AiOutlineHeart className="text-blue-500 text-base" />
                    )}
                  </button>

                  {/* Content: Icon → Badge → Title */}
                  <div className="mb-2">
                    {/* Smaller Icon */}
                    <div className="text-2xl text-gray-700 mb-1">
                      {tool.icon}
                    </div>

                    {/* Smaller Badge */}
                    <span
                      className={`text-black text-xs px-2 py-0.5 rounded-full inline-block mb-1 ${tool.color}`}
                    >
                      {tool.category}
                    </span>

                    {/* Smaller Title */}
                    <h3 className="font-semibold text-sm">{tool.title}</h3>
                  </div>

                  {/* Start Button */}
                  <div className="mt-2 text-right">
                    <button className="text-blue-600 text-xs hover:underline flex items-center justify-end w-full">
                      Start
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroDashboard;
