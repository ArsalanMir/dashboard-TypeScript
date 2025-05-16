import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiHome, FiActivity, FiBookmark, FiMail } from "react-icons/fi";
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTelegram,
  FaYoutube
} from "react-icons/fa";
import { AiFillProfile } from "react-icons/ai";
import yolearn from "../../assets/yolearnlogo.png";

const LeftSidebar: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white shadow-md z-40 transition-all duration-300 ease-in-out ${
        isHovered ? "w-64" : "w-16"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex flex-col justify-between h-full overflow-y-auto py-4"
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

        {/* Top Scrollable Section */}
        <div>
          <div className="mb-6 border-b border-gray-100 pb-4">
            <SidebarItem
              icon={<FiHome size={20} />}
              text="Home"
              expanded={isHovered}
              to="/"
            />
          </div>

          <Section
            title="Smart Teaching Suite"
            items={[
              { icon: "🧠", text: "Plan", to: "/planning" },
              { icon: "✏️", text: "Design", to: "/studio" },
              { icon: "🎨", text: "Create", to: "/content" },
              { icon: "📊", text: "Manage", to: "/command" },
              { icon: "🌱", text: "Grow", to: "/growth" },
              { icon: "💰", text: "Earn", to: "#" },
            ]}
            expanded={isHovered}
          />

          <Section
            title="My Space"
            items={[
              { icon: <AiFillProfile size={20} />, text: "My profile", to: "#" },
              { icon: <FiActivity size={20} />, text: "My Activity Log", to: "#" },
              { icon: <FiBookmark size={20} />, text: "My Diary", to: "#" },
            ]}
            expanded={isHovered}
          />

          <Section
            title="My Earnings"
            items={[
              { icon: "💵", text: "Avatar Earnings", to: "#" },
              { icon: "💰", text: "Referral Earnings", to: "#" },
            ]}
            expanded={isHovered}
          />

          {/* Support & Extras */}
          <div className="mb-6">
            {isHovered && (
              <p className="px-3 pb-1 text-xs font-semibold text-blue-600">
                Support & Extras
              </p>
            )}
            <SidebarItem
              icon={"🆘"}
              text="Help & Support"
              expanded={isHovered}
              to="#"
            />

            {/* Space before next items */}
            <div className="mt-3 text-[10px] text-gray-500 px-3 space-y-1">
              {isHovered && (
                <>
                  <p className="flex items-center space-x-2 mt-5">
                    <img src={yolearn} alt="YoLearn.ai Logo" className="h-10 w-auto" />
                  </p>
                  <p className="flex items-center space-x-2 mt-2">
                    <FiMail size={12} />
                    <span>educator@yolearn.ai</span>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Social Media Icons (unchanged as they're external links) */}
        {isHovered && (
          <div className="px-3 flex items-center space-x-4 text-xs mb-2">
            <a
              href="#"
              className="text-[#1DA1F2] hover:text-[#1a8cd8] transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href="#"
              className="text-[#0077B5] hover:text-[#006097] transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="#"
              className="text-[#E4405F] hover:text-[#d32a4a] transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="#"
              className="text-[#E4405F] hover:text-[#d32a4a] transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={16} />
            </a>
            <a
              href="#"
              className="text-[#1877F2] hover:text-[#1666d9] transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={16} />
            </a>
            <a
              href="#"
              className="text-[#26A5E4] hover:text-[#1e8fc4] transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram size={16} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  expanded: boolean;
  to?: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, expanded, to }) => {
  const content = (
    <>
      <span className="text-gray-600">{icon}</span>
      {expanded && <span className="ml-3 text-sm whitespace-nowrap">{text}</span>}
    </>
  );

  return to ? (
    <Link
      to={to}
      className={`flex items-center w-full p-3 transition-all duration-200 ${
        expanded ? "justify-start" : "justify-center"
      } hover:bg-blue-50 text-gray-700`}
    >
      {content}
    </Link>
  ) : (
    <button
      className={`flex items-center w-full p-3 transition-all duration-200 ${
        expanded ? "justify-start" : "justify-center"
      } hover:bg-blue-50 text-gray-700`}
    >
      {content}
    </button>
  );
};

interface SectionProps {
  title: string;
  items: { icon: React.ReactNode; text: string; to: string }[];
  expanded: boolean;
}

const Section: React.FC<SectionProps> = ({ title, items, expanded }) => (
  <div className="mb-6">
    {expanded && (
      <p className="px-3 pb-1 text-xs font-semibold text-blue-600">{title}</p>
    )}
    {items.map((item, i) => (
      <SidebarItem
        key={i}
        icon={item.icon}
        text={item.text}
        expanded={expanded}
        to={item.to}
      />
    ))}
  </div>
);

export default LeftSidebar;