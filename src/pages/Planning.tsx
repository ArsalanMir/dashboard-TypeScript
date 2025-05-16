import { useState } from "react";
import Header from "../Components/MainDashboard/Header";
import LeftSidebar from "../Components/MainDashboard/LeftSidebar";
import PlaningMain from "../Components/planning/PlaningMain";
import Calender from "../Components/MainDashboard/Calender";



const Planning = () => {
    const [sidebarExpanded, setSidebarExpanded] = useState(false);
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col">
      {/* Fixed Header */}
      <Header />

      {/* Main Layout */}
      <div className="flex flex-1 pt-16 overflow-hidden">
        {/* Left Sidebar with dynamic width */}
        <div
          onMouseEnter={() => setSidebarExpanded(true)}
          onMouseLeave={() => setSidebarExpanded(false)}
          className={`transition-all duration-300 ${sidebarExpanded ? 'w-64' : 'w-16'}`}
        >
          <LeftSidebar />
        </div>

        {/* Main Content shifts based on sidebar */}
        <main className="flex-1 overflow-y-auto bg-[#F9FBFF] p-4 transition-all duration-300">
          <PlaningMain />
        </main>

        {/* Fixed Calendar Panel */}
        <div className="w-80 bg-white shadow-md border-l h-[calc(100vh-4rem)] overflow-y-auto">
          <Calender />
        </div>
      </div>
    </div>
  )
}

export default Planning;