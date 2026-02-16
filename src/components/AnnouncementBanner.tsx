"use client";

import { HiExclamation } from "react-icons/hi";

export default function AnnouncementBanner() {
  return (
    <div className="bg-red-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
        <HiExclamation className="w-6 h-6 flex-shrink-0" />
        <div className="flex-grow">
          <h3 className="font-bold text-lg">🏈 REGISTRATION FOR 2026 SEASON IS OPEN!</h3>
          <p className="text-red-100 text-sm">Football season kicks off July 15! Early bird pricing ends TODAY 2/15/26</p>
        </div>
        <a
          href="https://login.stacksports.com/login?client_id=612b0399b1854a002e427f78&redirect_uri=https://core-api.bluesombrero.com/login/redirect/portal/22184&app_name=Escondido+Pop+Warner&portalid=22184&instancekey=tshq"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-red-600 px-4 py-2 rounded font-bold hover:bg-red-50 transition-colors flex-shrink-0 whitespace-nowrap text-sm"
        >
          REGISTER
        </a>
      </div>
    </div>
  );
}
