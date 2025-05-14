import React, { useState } from 'react';
import {
  FiHome, FiBook, FiCalendar, FiLayers, FiPlusCircle,
  FiUsers, FiTrendingUp, FiDollarSign, FiActivity,
  FiBookmark, FiShare2, FiMail, FiHelpCircle
} from 'react-icons/fi';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const LeftSidebar: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white shadow-md z-40 transition-all duration-300 ease-in-out ${
        isHovered ? 'w-64' : 'w-16'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex flex-col justify-between h-full overflow-y-auto py-4"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
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
            <SidebarItem icon={<FiHome size={20} />} text="Home" expanded={isHovered} />
          </div>

          <Section
            title="Smart Teaching Suite"
            items={[
              { icon: <FiCalendar size={20} />, text: 'Plan' },
              { icon: <FiLayers size={20} />, text: 'Design' },
              { icon: <FiPlusCircle size={20} />, text: 'Create' },
              { icon: <FiUsers size={20} />, text: 'Manage' },
              { icon: <FiTrendingUp size={20} />, text: 'Grow' },
              { icon: <FiDollarSign size={20} />, text: 'Earn' },
            ]}
            expanded={isHovered}
          />

          <Section
            title="My Space"
            items={[
              { icon: <FiActivity size={20} />, text: 'My Activity Log' },
              { icon: <FiBookmark size={20} />, text: 'My Diary' },
            ]}
            expanded={isHovered}
          />

          <Section
            title="My Earnings"
            items={[
              { icon: <FiDollarSign size={20} />, text: 'Avatar Earnings' },
              { icon: <FiShare2 size={20} />, text: 'Referral Earnings' },
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
            <SidebarItem icon={<FiHelpCircle size={20} />} text="Help & Support" expanded={isHovered} />

            {/* Space before next items */}
            <div className="mt-3 text-[10px] text-gray-500 px-3 space-y-1">
              {isHovered && (
                <>
                  <p className="flex items-center space-x-2">
                    <span className='font-bold text-2xl text-black'>YoLearn.ai</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <FiMail size={12} />
                    <span>educator@yolearn.ai</span>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        {isHovered && (
          <div className="px-3 flex items-center space-x-4 text-gray-400 text-xs mb-2">
            <a href="#" className="hover:text-blue-500 transition">
              <FaTwitter size={16} />
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              <FaLinkedin size={16} />
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              <FaInstagram size={16} />
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
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, expanded }) => {
  return (
    <button
      className={`flex items-center w-full p-3 transition-all duration-200 ${
        expanded ? 'justify-start' : 'justify-center'
      } hover:bg-blue-50 text-gray-700`}
    >
      <span className="text-gray-600">{icon}</span>
      {expanded && <span className="ml-3 text-sm whitespace-nowrap">{text}</span>}
    </button>
  );
};

interface SectionProps {
  title: string;
  items: { icon: React.ReactNode; text: string }[];
  expanded: boolean;
}

const Section: React.FC<SectionProps> = ({ title, items, expanded }) => (
  <div className="mb-6">
    {expanded && <p className="px-3 pb-1 text-xs font-semibold text-blue-600">{title}</p>}
    {items.map((item, i) => (
      <SidebarItem key={i} icon={item.icon} text={item.text} expanded={expanded} />
    ))}
  </div>
);

export default LeftSidebar;
