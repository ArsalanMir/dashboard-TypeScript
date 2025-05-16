import { FiChevronDown, FiMic } from "react-icons/fi"
import { resumeCards } from "../../data/data"
import InstructionTools from "./InstructionTools";
import AssessmentTools from "./AssessmentTools";



const StudioMain = () => {
  return (
     <div
      className="h-full p-4 space-y-6 overflow-y-auto scroll-smooth max-w-7xl mx-auto"
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
         
         <div className="px-4 md:px-8 max-w-7xl mx-auto">
                 {/* Hero Section */}
                 <div className="rounded-xl bg-gradient-to-r from-[#3CA4F7] to-[#4F6CE1] text-white py-8 sm:p-8 relative flex flex-col items-center">
                   <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center">
                     Let’s design impactful lessons together — <br />I’m here to support your teaching goals.
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
         
                 {/* Resume Where You Left Off */}
                 <div className="mt-8">
                   <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                     <span role="img" aria-label="pin">
                       📌
                     </span>
                     Resume Where You Left Off
                   </h2>
         
                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                     {resumeCards.map((card, idx) => (
                       <div
                         key={idx}
                         className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow relative"
                       >
                         <div className="space-y-2">
                           <div className="text-2xl">{card.icon}</div>
                           <h3 className="font-semibold text-sm">{card.title}</h3>
                           <p className="text-gray-600 text-xs">{card.subtitle}</p>
                         </div>
                       </div>
                     ))}
                   </div>
                 </div>
                 </div>
                     
                     <InstructionTools />

                     <AssessmentTools />
                

        </div>
  )
}

export default StudioMain;