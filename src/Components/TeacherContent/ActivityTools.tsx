import { useState } from "react";
import { activityToolsData } from "../../data/contentData";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const ActivityTools = () => {
  const [wishlist, setWishlist] = useState<string[]>([]);

  const toggleWishlist = (title: string) => {
    setWishlist((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <section className="px-4 md:px-8 py-6 bg-[#f8fafc] border-t border-gray-200">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <span role="img" aria-label="writing hand">
          ✍️
        </span>{" "}
        Activity Cards & Learning Aids
      </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {activityToolsData.map((tool, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-lg shadow-sm flex flex-col justify-between relative border border-gray-100"
          >
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

            <div className="mb-2 flex flex-col gap-1">
              <div className="text-2xl text-gray-700">{tool.icon}</div>
              <h3 className="font-semibold text-sm">{tool.title}</h3>
              <p className="font-light text-sm text-gray-600">
                {tool.description}
              </p>
            </div>

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
    </section>
  );
};

export default ActivityTools;
