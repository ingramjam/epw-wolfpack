"use client";

import ProgramCard from "@/components/ProgramCard";
import { FaFutbol, FaChild, FaMusic } from "react-icons/fa";

export default function Programs() {
  const registrationLink =
    "https://login.stacksports.com/login?client_id=612b0399b1854a002e427f78&redirect_uri=https://core-api.bluesombrero.com/login/redirect/portal/22184&app_name=Escondido+Pop+Warner&portalid=22184&instancekey=tshq";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Our Programs</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Choose the program that's right for your young athlete
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 mb-20">
            {/* Flag Football */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  🏈 Flag Football
                </h2>
                <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                  Perfect for young athletes just starting out, flag football offers a
                  fast-paced, non-contact way to build skills, teamwork, and a genuine
                  love for the game. Our flag program emphasizes fundamentals, safety,
                  and fun.
                </p>
                <h3 className="font-bold text-gray-900 mb-3">What to Expect:</h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>✓ Non-contact introduction to football</li>
                  <li>✓ Age-appropriate coaching and instruction</li>
                  <li>✓ Focus on skill development and teamwork</li>
                  <li>✓ Fun, encouraging environment for all levels</li>
                  <li>✓ Regular practices and friendly competitions</li>
                </ul>
                <p className="text-blue-900 font-bold text-lg mb-4">Ages: 5-14</p>
                <a
                  href={registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  Register for Flag Football
                </a>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-8 h-80 flex flex-col justify-center">
                <div className="text-6xl text-blue-900 mb-4">🏳️</div>
                <p className="text-gray-700 font-semibold">
                  Start your football journey with flag football—no contact, all fun!
                </p>
              </div>
            </div>

            {/* Tackle Football */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 bg-gradient-to-br from-green-100 to-green-50 rounded-lg p-8 h-80 flex flex-col justify-center">
                <div className="text-6xl text-green-900 mb-4">🏆</div>
                <p className="text-gray-700 font-semibold">
                  Build champions with advanced skill training and competitive play.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  🏈 Tackle Football
                </h2>
                <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                  Our tackle program combines competitive play with a strong focus on
                  safety, discipline, and teamwork. With over 50 years of tradition, EPW
                  has helped shape young athletes both on and off the field through
                  structured coaching and a commitment to academic success.
                </p>
                <h3 className="font-bold text-gray-900 mb-3">What to Expect:</h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>✓ Advanced skill development and coaching</li>
                  <li>✓ Emphasis on safety with proper equipment and training</li>
                  <li>✓ Competitive play with league games</li>
                  <li>✓ Leadership and character development</li>
                  <li>✓ Academic support and life skills training</li>
                </ul>
                <p className="text-blue-900 font-bold text-lg mb-4">Ages: 8-14</p>
                <a
                  href={registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  Register for Tackle Football
                </a>
              </div>
            </div>

            {/* Cheerleading */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  📣 Cheerleading
                </h2>
                <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                  Join the excitement and energy of EPW Cheerleading! Athletes ages 5 to 14
                  learn the foundations of cheer, dance, and teamwork in a fun, supportive
                  environment. Our program focuses on confidence, leadership, and school
                  spirit—both on the sidelines and on the competition floor.
                </p>
                <h3 className="font-bold text-gray-900 mb-3">What to Expect:</h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>✓ Cheerleading fundamentals and techniques</li>
                  <li>✓ Dance and choreography training</li>
                  <li>✓ Team stunts and pyramids</li>
                  <li>✓ Competition opportunities</li>
                  <li>✓ School spirit and community involvement</li>
                </ul>
                <p className="text-blue-900 font-bold text-lg mb-4">Ages: 5-14</p>
                <a
                  href={registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  Register for Cheerleading
                </a>
              </div>
              <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-lg p-8 h-80 flex flex-col justify-center">
                <div className="text-6xl text-pink-900 mb-4">✨</div>
                <p className="text-gray-700 font-semibold">
                  Show your Wolfpack pride through cheer, dance, and spirit!
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-900 text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join the Wolfpack?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Registration for the 2026 season is now open with early bird pricing ending today!
            </p>
            <a
              href={registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              REGISTER NOW
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
