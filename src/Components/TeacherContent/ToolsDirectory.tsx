import { useState } from "react";
import { toolsData } from "../../data/contentData";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const ToolsDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [wishlist, setWishlist] = useState<string[]>([]);

  const toggleWishlist = (title: string) => {
    setWishlist((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <section className="px-4 md:px-8 py-6 max-w-7xl mx-auto">
      <h2 className="text-xl font-semibold mb-4 flex items-start gap-2">
        <span role="img" aria-label="toolbox">
          🧰
        </span>
        Content Lab Tools Directory
      </h2>

      <div className="mb-6 relative max-w-full sm:max-w-md">
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
          className="w-full pl-10 pr-4 bg-white py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      <h3 className="text-lg font-semibold mb-4">
        📚 Text & Mnemonic-Based Tools
      </h3>

      {/* Tool Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {toolsData.map((tool, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow relative"
          >
            {/* Wishlist Heart Button */}
            <button
              onClick={() => toggleWishlist(tool.title)}
              className="absolute top-3 right-3 text-blue-500 hover:text-blue-700"
            >
              {wishlist.includes(tool.title) ? (
                <AiFillHeart className="text-blue-500 text-lg" />
              ) : (
                <AiOutlineHeart className="text-blue-500 text-lg" />
              )}
            </button>

            {/* Content */}
            <div className="space-y-2">
              <div className="text-2xl">{tool.icon}</div>
              <h3 className="font-semibold text-sm">{tool.title}</h3>
              <p className="text-gray-600 text-xs">{tool.description}</p>
            </div>

            {/* Start Button */}
            <button className="text-blue-600 text-xs hover:underline flex items-center justify-end w-full mt-4">
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
        ))}
      </div>
    </section>
  );
};

export default ToolsDirectory;