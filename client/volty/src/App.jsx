import React from 'react';
import LeftSection from './components/left-section/LeftSection';
import RightSection from './components/right-section/RightSection';

function App() {
  return (
    <div className="min-h-screen bg-black p-4 ">
      <div className="max-w-screen-2xl mx-auto border border-gray-800 rounded-xl bg-[#18181B] min-h-[calc(100vh-2rem)] overflow-hidden shadow-lg">
        <div className="flex flex-col md:flex-row h-full">
          {/* Left Section - Profile */}
          <div className="w-full md:w-72 lg:w-96 h-full bg-[#29292D] border-r border-gray-800">
            <LeftSection />
          </div>

          {/* Right Section - Content */}
          <div className="w-full flex-1 h-full bg-[#29292D]">
            <RightSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;