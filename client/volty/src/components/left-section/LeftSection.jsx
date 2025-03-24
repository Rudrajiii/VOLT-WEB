import React from 'react';
import cattyImage from '../../assets/catty.webp';
import itachiImage from '../../assets/itachi.jpg';
import { LuLogIn } from "react-icons/lu";

const LeftSection = () => {
  return (
    <div className="bg-[#18181B] text-gray-300 flex flex-col h-full w-full p-6">
      {/* Banner with profile image */}
      <div className="relative w-full mb-8">
        {/* Background Banner */}
        <div className="w-full h-36 bg-gradient-to-r from-purple-900 to-indigo-900 rounded-lg relative px-4 py-2 shadow-lg overflow-hidden">
          {/* Banner Image */}
          <img
            src={itachiImage}
            alt="Itachi banner++"
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Profile Image - Positioned to left of banner */}
        <div className="absolute bottom-0 left-8 transform translate-y-1/2">
          <div className="relative">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-black border-4 border-gray-900 shadow-md overflow-hidden flex items-center justify-center">
              {/* Profile Image */}
              <img
                src={cattyImage}
                alt="Profile"
                className="max-w-full max-h-full w-auto h-auto object-contain rounded-full"
              />
              <div className="absolute lg:left-34 sm:left-0 left-30 w-[100%] lg:w-[130%] mt-5">
                <div className="bg-[#2F3136] w-full text-white text-sm font-semibold py-2 px-3 rounded-lg shadow-md">
                  Watching Bleach...💀
                </div>
              </div>
            </div>

            {/* Online Indicator */}
            <div className="absolute bottom-4 right-1 w-5 h-5 bg-green-500 rounded-full border-3 border-gray-900"></div>
            {/* Playing Free Fire Max Status */}

          </div>
        </div>


      </div>

      {/* Profile Info */}
      <div className="mt-12 px-2">
        <h2 className="text-2xl font-bold text-blue-400 mb-1">VOLT <span className='bg-[#5865F2] p-1 text-white ml-1 rounded-sm text-sm mb-1'>✓ APP</span></h2>
        <p className="text-sm text-gray-400 mb-4 flex gap-1">@VOLT#4027 <span><img 
          width={20} 
          height={20} 
          src="https://cdn.discordapp.com/badge-icons/6f9e37f9029ff57aef81db857890005e.png" 
          alt="" 
          className="align-middle" 
        /></span></p>
        

        <div class="mt-4 mb-2 flex flex-row justify-start gap-4 max-w-full">
          <button class="bg-gradient-to-r cursor-pointer flex items-center flex-row gap-1 bg-[#5865F2] text-white font-bold py-2 px-4 rounded hover:from-purple-700 hover:to-indigo-700 transition-all min-w-[120px]">
            <span><LuLogIn /></span> Invite me
          </button>
          <button class="bg-[#29292D] font-bold text-gray-300 cursor-pointer rounded-sm py-2 px-4  hover:bg-gray-700 transition-colors min-w-[120px]">
            Explore More
          </button>
        </div>

        <style>
          {`
          @media (max-width: 640px) {
            button {
              padding: 0.5rem 1rem; /* Reduced padding (py-2 px-4 -> py-0.5rem px-1rem) */
              font-size: 0.875rem; /* Smaller font size (14px) */
              min-width: 90px; /* Reduced minimum width */
            }
            .gap-4 {
              gap: 0.5rem; /* Reduced gap between buttons */
            }
          }
          `}
        </style>

        {/* Description */}
        <h2 className='text-md text-white font-md'>About Me</h2>
        <div className="w-full rounded-md p-3 text-left bg-[#29292D] text-sm my-4 shadow-md">
          I am a multi-purpose bot created to ease user's lives. Use
          <span className=" text-sky-300 mx-2">
            /help
          </span>
          to explore more about me.
        </div>

        {/* Connection Icons */}
        <h2 className='text-md text-white font-md'>Roles</h2>
        <div className="my-2">
          <div className="flex gap-3 justify-start cursor-pointer">
            <div className="w-20 h-10 bg-[#29292D] rounded-sm   flex flex-row items-center justify-center hover:bg-gray-700 transition-colors">
              <span className="text-gray-300 font-md text-sm">🟣 Ruler</span>
            </div>
            <div className="w-32 h-10 bg-[#29292D] rounded-sm   flex flex-row items-center justify-center hover:bg-gray-700 transition-colors">
              <span className="text-gray-300 font-md text-sm">🔵 Moderator</span>
            </div>
            <div className="w-14 h-10 bg-[#29292D] rounded-sm   flex items-center justify-center hover:bg-gray-700 transition-colors">
              <span className="text-gray-400 text-xl font-bold">+</span>
            </div>
          </div>
        </div>

        {/* Connections */}
        <h2 className='text-md text-white font-md'>Connections</h2>
        <div className="flex flex-col sm:flex-row gap-2 my-2">
          {/* GitHub Button */}
          <button className="flex cursor-pointer items-center justify-between bg-[#29292D] text-gray-300 py-2 px-4 rounded-sm  text-sm hover:bg-gray-800 transition-colors w-64">
            <div className="flex items-center gap-2">
              {/* GitHub Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2C6.477 2 2 6.484 2 12c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.65-1.026 2.65-1.026.546 1.378.203 2.398.1 2.651.64.711 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.516-4.477-10-10-10z"
                />
              </svg>
              <span className="text-gray-300">Github</span>
              {/* Verified Icon */}

            </div>
            {/* External Link Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 3h6m0 0v6m0-6L10 14m4 4H5a2 2 0 01-2-2V5a2 2 0 012-2h5"
              />
            </svg>
          </button>

          {/* Discord Button */}
          <button className="flex items-center cursor-pointer justify-between bg-[#29292D] text-gray-300 py-2 px-4 rounded-sm  text-sm hover:bg-gray-800 transition-colors w-64">
            <div className="flex items-center gap-2">
              {/* Discord Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-indigo-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.317 4.368A17.251 17.251 0 0016.843 3c-.362.615-.717 1.248-1.036 1.882a15.535 15.535 0 00-4.614 0A17.24 17.24 0 0010.157 3c-1.51.19-2.975.72-4.474 1.368a18.78 18.78 0 00-3.006 8.401c0 3.927 2.617 7.106 6.258 8.303 1.228.339 2.26.4 3.065.4 1.26 0 2.512-.112 3.682-.4 3.641-1.197 6.258-4.376 6.258-8.303 0-2.958-1.117-5.78-3.064-8.401zM9.26 14.221c-1.151 0-2.085-.998-2.085-2.23 0-1.231.93-2.23 2.085-2.23 1.156 0 2.087.998 2.087 2.23 0 1.232-.93 2.23-2.087 2.23zm5.478 0c-1.151 0-2.085-.998-2.085-2.23 0-1.231.93-2.23 2.085-2.23 1.156 0 2.087.998 2.087 2.23 0 1.232-.93 2.23-2.087 2.23z" />
              </svg>
              <span className="text-gray-300">Discord</span>
              {/* Verified Icon */}

            </div>
            {/* External Link Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 3h6m0 0v6m0-6L10 14m4 4H5a2 2 0 01-2-2V5a2 2 0 012-2h5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;