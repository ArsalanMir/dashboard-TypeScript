import React from "react";
import { FiMoon, FiBell } from "react-icons/fi";
import yolearnLogo from "../../assets/Yolearn.png";

const Header: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md h-16 fixed top-0 left-0 right-0 z-50">
      {/* Logo and Tagline */}
      <div className="flex flex-col">
        <img src={yolearnLogo} alt="YoLearn.ai Logo" className="h-10 w-auto" />
      </div>

      {/* Right Section: Refer, EN, Icons */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-3">
          <button className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Refer
          </button>
          <button className="text-sm font-medium text-gray-700 hover:text-gray-900">
            EN
          </button>
        </div>

        <button className="text-gray-600 hover:text-gray-900">
          <FiMoon className="w-5 h-5" />
        </button>

        <button className="text-gray-600 hover:text-gray-900 relative">
          <FiBell className="w-5 h-5" />
        </button>

        <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-300">
          <img
            src="https://i.pravatar.cc/32?img=13"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
