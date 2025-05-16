import { useState } from "react";
import { assessmentToolsData} from "../../data/studioData";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const AssessmentTools = () => {
  const [wishlist, setWishlist] = useState<string[]>([]);

  const toggleWishlist = (title: string) => {
    setWishlist((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <section className="px-4 md:px-8 py-6 bg-[#f8fafc]">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <span role="img" aria-label="assessment tools">🧾</span>
        Assesment tools
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {assessmentToolsData.map((tool, idx) => (
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
              <div className="text-3xl">{tool.icon}</div>
              <h3 className="font-semibold text-sm">{tool.title}</h3>
              <p className="font-light text-sm text-gray-600">
                {tool.description}
              </p>
            </div>

            <div className="mt-2 text-right">
              <a
                href={tool.link}
                 className="mt-2 inline-block border border-blue-500 text-blue-600 text-sm px-4 py-1 rounded-md hover:bg-blue-50 transition"
              >
                Start
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AssessmentTools;
