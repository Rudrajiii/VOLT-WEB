import React from 'react';
import "./RightSectionCustomStyle.css";
import { HiMiniServerStack } from "react-icons/hi2";
import { FaFileAlt } from "react-icons/fa";
import { MdPermMedia } from "react-icons/md";
import { SiApplemusic } from "react-icons/si";
import { MdManageAccounts } from "react-icons/md";
import { FaCodeBranch } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const RightSection = () => {
  return (
    <div className="bg-[#18181B] text-gray-300 p-6 h-full relative overflow-hidden">
      {/* Background with grid only */}
      <div className="absolute inset-0 z-0">
        {/* Grid background with fade out at edges */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(129, 125, 125, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(129, 125, 125, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
          }}
        />
      </div>

      {/* Content (z-index ensures it appears above the background) */}
      <div className="relative z-10">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient"
            >
              Welcome
            </span>{" "}
            Back 🕊️ Buddy
          </h1>
          <p className="text-sm text-gray-300">
            Discover Exciting Features and Enhancements for Volt Bot. Your Automation Journey Begins Here! 🚀
          </p>

          <style>
            {`
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .animate-gradient {
        background-size: 200% 200%;
        animation: gradient 5s ease infinite;
      }
    `}
          </style>


          {/* Bot Status */}
          <div className="mt-4 flex justify-center gap-4 text-sm text-gray-400">
            {/* Uptime Block */}
            <div className="bg-[#29292D] cursor-pointer font-medium px-4 py-2 rounded-lg text-white shadow-sm flex items-center">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="server"
                className="w-4 h-4 text-green-500 mr-2" // SVG size adjusted here
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M64 32C28.7 32 0 60.7 0 96l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 32zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 288zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
                />
              </svg>
              {/* <span className="text-green-400 font-medium mr-1">Uptime </span> 3 days 5 hours */}
              <span className="text-green-400 font-medium mr-1"></span> Join Support Server
            </div>

            {/* Ping Block */}
            <div className="bg-[#29292D] px-6 py-3 cursor-pointer rounded-lg shadow-md flex items-center w-48">
              <span className="text-white font-medium ml-1 mr-1 gap-2 flex items-center text-sm">
              <FaStar className='text-green-500 text-xl'/>
                Vote on top.gg
              </span>
              {/* <span className="text-white ml-1 text-sm">45ms</span> */}
            </div>
          </div>
        </div>


        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto cursor-pointer font-mono">
          {/* Grid Item 1 */}
          <div className="bg-[#29292D] border border-gray-700 rounded-lg p-4 transition-colors card">
            <h3 className="text-lg font-semibold text-blue-400 flex flex-row items-center justify-start mb-2 gap-2">Bot Information & Basics <HiMiniServerStack />
            </h3>
            <p className="text-sm text-gray-400">Basic commands to get bot information, check versions, and list available commands.</p>
            <div className='flex flex-row gap-2 mt-1.5 '>
              <span className="bg-[#253142] text-[#3a7bdd] flex items-center justify-center text-xs font-semibold px-3 py-1 rounded-lg">
                server-details
              </span>
              <span className="bg-[#253142] text-[#3a7bdd] flex items-center justify-center text-xs font-semibold px-3 py-1 rounded-lg">
                user-growth
              </span>
              <span className="bg-[#253142] text-[#3a7bdd] flex items-center justify-center text-xs font-semibold px-3 py-1 rounded-lg">
                server-acticity
              </span>
            </div>
          </div>

          {/* Grid Item 2 */}
          <div className="bg-[#29292D] border border-gray-700 rounded-lg p-4 transition-colors card">
            <h3 className="text-lg font-semibold text-blue-400 mb-2 flex flex-row items-center justify-start gap-2">File & Message Management <FaFileAlt /></h3>
            <p className="text-sm text-gray-400">Commands to manage files, clear messages, move content, and analyze or summarize data.</p>
            <div className='flex flex-row gap-2 mt-1.5 '>
              <span className="bg-[#253142] text-[#3a7bdd] flex items-center justify-center text-xs font-semibold px-3 py-1 rounded-lg">
                ls -s "ext"
              </span>
              <span className="bg-[#253142] text-[#3a7bdd] flex items-center justify-center text-xs font-semibold px-3 py-1 rounded-lg">
                mov "channel"
              </span>
              <span className="bg-[#253142] text-[#3a7bdd] flex items-center justify-center text-xs font-semibold px-3 py-1 rounded-lg">
                c "int"
              </span>
            </div>
          </div>

          {/* Grid Item 3 */}
          <div className="bg-[#29292D] border border-gray-700 rounded-lg p-4 transition-colors card">
            <h3 className="text-lg font-semibold text-blue-400 mb-2 flex flex-row items-center justify-start gap-2">Media & Image Generation <MdPermMedia />
            </h3>
            <p className="text-sm text-gray-400">Tools to generate images, analyze media, send images, and retrieve content from APIs.</p>
            <div className='flex flex-row gap-2 mt-1.5 '>
              <span className="bg-[#253142] text-[#3a7bdd] flex items-center justify-center text-xs font-semibold px-3 py-1 rounded-lg">
                /imagine "prompt"
              </span>
              <span className="bg-[#253142] text-[#3a7bdd] flex items-center justify-center text-xs font-semibold px-3 py-1 rounded-lg">
                create "prompt"
              </span>
              <span className="bg-[#253142] text-[#3a7bdd] flex items-center justify-center text-xs font-semibold px-3 py-1 rounded-lg">
                i2t
              </span>
            </div>
          </div>

          {/* Grid Item 4 */}
          <div className="bg-[#29292D] border border-gray-700 rounded-lg p-4 transition-colors card">
            <h3 className="text-lg font-semibold text-blue-400 mb-2 flex flex-row items-center justify-start gap-2">Music & Voice Channel Features <SiApplemusic />
            </h3>
            <p className="text-sm text-gray-400">Commands to join, leave, play, manage music, and perform text-to-speech in voice channels.</p>
            <div className='flex flex-row gap-2 mt-1.5 '>
              <span className="bg-[#253142] text-[#3a7bdd] flex items-center justify-center text-xs font-semibold px-3 py-1 rounded-lg">
                play
              </span>
              <span className="bg-[#253142] text-[#3a7bdd] flex items-center justify-center text-xs font-semibold px-3 py-1 rounded-lg">
                server-song-track
              </span>
            </div>
          </div>

          {/* Grid Item 5 */}
          <div className="bg-[#29292D] border border-gray-700 rounded-lg p-4 transition-colors card">
            <h3 className="text-lg font-semibold text-blue-400 mb-2 flex flex-row items-center justify-start gap-2">User, Role & Access Management <MdManageAccounts />
            </h3>
            <p className="text-sm text-gray-400">Manage users, roles, command access, and limit command usage efficiently.</p>
            <div className='flex flex-row gap-2 mt-1.5 '>
              <span className="bg-[#253142] text-[#3a7bdd] flex items-center justify-center text-xs font-semibold px-3 py-1 rounded-lg">
                lu -types
              </span>
              <span className="bg-[#253142] text-[#3a7bdd] flex items-center justify-center text-xs font-semibold px-3 py-1 rounded-lg">
                wlcm-to-hell
              </span>
              <span className="bg-[#253142] text-[#3a7bdd] flex items-center justify-center text-xs font-semibold px-3 py-1 rounded-lg">
                mute "user" "time"
              </span>
            </div>
          </div>

          {/* Grid Item 6 */}
          <div className="bg-[#29292D] border border-gray-700 rounded-lg p-4 transition-colors card">
            <h3 className="text-lg font-semibold text-blue-400 mb-2 flex flex-row items-center justify-start gap-2">Developer Tools & Slash Commands <FaCodeBranch />
            </h3>
            <p className="text-sm text-gray-400">Custom commands for developers, API integrations, and slash command utilities.</p>
            <div className='flex flex-row gap-2 mt-1.5 '>
              <span className="bg-[#253142] text-[#3a7bdd] flex items-center justify-center text-xs font-semibold px-3 py-1 rounded-lg">
                /yt-details
              </span>
              <span className="bg-[#253142] text-[#3a7bdd] flex items-center justify-center text-xs font-semibold px-3 py-1 rounded-lg">
                git "username"
              </span>
              <span className="bg-[#253142] text-[#3a7bdd] flex items-center justify-center text-xs font-semibold px-3 py-1 rounded-lg">
                run "lang" "code"
              </span>
            </div>
          </div>
        </div>

        <footer className="flex font-medium font-mono flex-row gap-2 p-1 items-center justify-center mt-8">
          Made with ❤️ by Rudra & Powered By
          <FaPython className='text-green-500 text-xl' />
          Discord.py
        </footer>
      </div>
    </div>
  );
};

export default RightSection;