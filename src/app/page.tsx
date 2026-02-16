import HeroCarousel from "@/components/HeroCarousel";
import ProgramCard from "@/components/ProgramCard";
import { FaFutbol, FaChild, FaMusic } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  const registrationLink =
    "https://login.stacksports.com/login?client_id=612b0399b1854a002e427f78&redirect_uri=https://core-api.bluesombrero.com/login/redirect/portal/22184&app_name=Escondido+Pop+Warner&portalid=22184&instancekey=tshq";

  return (
    <>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Programs Section - NFL Style Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-blue-900 font-bold text-sm tracking-widest mb-2">OUR PROGRAMS</p>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              Champion Programs for Young Athletes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              From flag football to tackle football to competitive cheer, EPW offers something for every young athlete ages 5-14.
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

      {/* Featured Section - About EPW */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-black mb-6">
                Escondido Pop Warner
              </h2>
              <p className="text-lg text-blue-100 mb-4 leading-relaxed">
                Since 1968, Escondido Pop Warner has been the premier youth football organization in San Diego County. We're committed to building champions—both on and off the field.
              </p>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Our programs emphasize safety, academic achievement, character development, and teamwork. Whether your child is starting with flag football or ready for tackle football, EPW provides a structured, supportive environment where they can thrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="inline-block bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-black hover:bg-yellow-400 transition-colors text-center"
                >
                  LEARN OUR STORY
                </Link>
                <a
                  href={registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-2 border-yellow-500 text-yellow-500 px-8 py-3 rounded-lg font-black hover:bg-yellow-500 hover:text-blue-900 transition-colors text-center"
                >
                  JOIN NOW
                </a>
              </div>
            </div>

            {/* Stats Box */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-800/50 backdrop-blur p-6 rounded-xl border border-blue-700">
                <div className="text-4xl font-black mb-2">50+</div>
                <p className="text-blue-200">Years of Excellence</p>
              </div>
              <div className="bg-blue-800/50 backdrop-blur p-6 rounded-xl border border-blue-700">
                <div className="text-4xl font-black mb-2">1000s</div>
                <p className="text-blue-200">Young Athletes</p>
              </div>
              <div className="bg-blue-800/50 backdrop-blur p-6 rounded-xl border border-blue-700">
                <div className="text-4xl font-black mb-2">3</div>
                <p className="text-blue-200">Premier Programs</p>
              </div>
              <div className="bg-blue-800/50 backdrop-blur p-6 rounded-xl border border-blue-700">
                <div className="text-4xl font-black mb-2">West Coast</div>
                <p className="text-blue-200">Conference</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions - Professional Sports Layout */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Calendar Card */}
            <Link href="/calendar" className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
              <div className="bg-blue-900 h-24 flex items-center justify-center text-5xl group-hover:bg-blue-800 transition-colors">
                📅
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Schedule</h3>
                <p className="text-gray-600">View season schedule and key dates</p>
              </div>
            </Link>

            {/* News Card */}
            <Link href="/news" className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
              <div className="bg-blue-900 h-24 flex items-center justify-center text-5xl group-hover:bg-blue-800 transition-colors">
                📰
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">News & Updates</h3>
                <p className="text-gray-600">Latest announcements and stories</p>
              </div>
            </Link>

            {/* Store Card */}
            <a href="https://rebelsportsgroup.com/escondido_pop_warner/shop/home" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
              <div className="bg-blue-900 h-24 flex items-center justify-center text-5xl group-hover:bg-blue-800 transition-colors">
                🛍️
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">EPW Store</h3>
                <p className="text-gray-600">Official gear and apparel</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-900 font-bold text-sm tracking-widest mb-2">GET INVOLVED</p>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              Make a Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              EPW thrives because of our dedicated volunteers and community members. Whether you can coach, help with events, or support in other ways, we need you!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/volunteer" className="group bg-gradient-to-br from-blue-900 to-blue-950 text-white p-8 rounded-lg hover:shadow-lg transition-all">
              <h3 className="text-2xl font-black mb-2 group-hover:text-yellow-400 transition-colors">Volunteer</h3>
              <p className="text-blue-100 mb-4">Help us build the next generation of champions</p>
              <span className="inline-block text-yellow-400 font-bold">Learn More →</span>
            </Link>

            <Link href="/board" className="group bg-gradient-to-br from-indigo-900 to-blue-950 text-white p-8 rounded-lg hover:shadow-lg transition-all">
              <h3 className="text-2xl font-black mb-2 group-hover:text-yellow-400 transition-colors">Leadership</h3>
              <p className="text-blue-100 mb-4">Meet our board members and volunteer leaders</p>
              <span className="inline-block text-yellow-400 font-bold">Meet the Team →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-yellow-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-blue-900 mb-4">
            Ready to Join the Wolfpack?
          </h2>
          <p className="text-lg text-blue-900 mb-8 font-semibold">
            Registration is open! Early bird pricing ends February 15th, 2026.
          </p>
          <a
            href={registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-900 text-white px-10 py-4 rounded-lg font-black text-lg hover:bg-blue-800 transition-colors"
          >
            REGISTER NOW
          </a>
        </div>
      </section>
    </>
  );
}
