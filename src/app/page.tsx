import AnnouncementBanner from "@/components/AnnouncementBanner";
import HeroSection from "@/components/HeroSection";
import ProgramCard from "@/components/ProgramCard";
import { FaFutbol, FaChild, FaMusic } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  const registrationLink =
    "https://login.stacksports.com/login?client_id=612b0399b1854a002e427f78&redirect_uri=https://core-api.bluesombrero.com/login/redirect/portal/22184&app_name=Escondido+Pop+Warner&portalid=22184&instancekey=tshq";

  return (
    <>
      <AnnouncementBanner />
      <HeroSection />

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From flag football to tackle football to competitive cheer, EPW offers
              something for every young athlete.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProgramCard
              title="Flag Football"
              description="Perfect for young athletes starting out, flag football offers a fast-paced, non-contact way to build skills, teamwork, and a love for the game."
              icon={<FaFutbol />}
              ageGroup="5-14"
              cta="Register for Flag"
              link={registrationLink}
            />
            <ProgramCard
              title="Tackle Football"
              description="Our tackle program combines competitive play with a strong focus on safety, discipline, and teamwork with over 50 years of tradition."
              icon={<FaChild />}
              ageGroup="8-14"
              cta="Register for Tackle"
              link={registrationLink}
            />
            <ProgramCard
              title="Cheerleading"
              description="Join the excitement and energy of EPW Cheer. Learn cheer, dance, and teamwork in a fun, supportive environment with pride and excellence."
              icon={<FaMusic />}
              ageGroup="5-14"
              cta="Register for Cheer"
              link={registrationLink}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Welcome to Escondido Pop Warner
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                A Legacy of Excellence since 1968, Escondido Pop Warner (EPW) is a
                proud part of the community dedicated to offering a fun, safe, and
                structured environment for kids to learn, grow, and compete.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Whether you're starting with flag or ready for tackle, EPW is where young
                athletes build confidence, discipline, and lasting friendships. Our focus on
                safety, academic achievement, and character development creates an experience
                that extends far beyond the field.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/about"
                  className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  Learn More
                </Link>
                <a
                  href={registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition-colors"
                >
                  Join Wolfpack
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-8 text-white h-96 flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">50+</h3>
                  <p>Years of Excellence</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">1000s</h3>
                  <p>Young Athletes Developed</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">3</h3>
                  <p>Premier Programs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Community Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Join the Wolfpack</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              EPW is committed to building champions both on and off the field. Our programs
              focus on safety, academics, character development, and teamwork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">1968</div>
              <p className="text-blue-100">Founded</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">3</div>
              <p className="text-blue-100">Premier Programs</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">West Coast</div>
              <p className="text-blue-100">Conference</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">5-14</div>
              <p className="text-blue-100">Age Range</p>
            </div>
          </div>

          <div className="text-center">
            <a
              href={registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              REGISTER NOW - 2026 SEASON
            </a>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <Link href="/calendar" className="hover:text-blue-900 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-2">📅 Calendar</h3>
              <p className="text-gray-600">View schedules and events</p>
            </Link>
            <Link href="/news" className="hover:text-blue-900 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-2">📰 News</h3>
              <p className="text-gray-600">Latest updates and stories</p>
            </Link>
            <a href="https://rebelsportsgroup.com/escondido_pop_warner/shop/home" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-2">🛍️ Store</h3>
              <p className="text-gray-600">EPW gear and apparel</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
