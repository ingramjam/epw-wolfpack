"use client";

export default function HeroSection() {
  return (
    <section className="relative h-screen bg-gradient-to-r from-blue-900 to-blue-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat" style={{backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.05) 10px, rgba(255,255,255,.05) 20px)"}}></div>
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            NOW ENTERING
            <br />
            <span className="text-blue-300">WOLFPACK COUNTRY</span>
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
            Join Escondido Pop Warner - where young athletes build champions on and off the field since 1968. Register for the 2026 season today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://login.stacksports.com/login?client_id=612b0399b1854a002e427f78&redirect_uri=https://core-api.bluesombrero.com/login/redirect/portal/22184&app_name=Escondido+Pop+Warner&portalid=22184&instancekey=tshq"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors inline-block text-center"
            >
              REGISTER NOW
            </a>
            <a
              href="/programs"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors text-center"
            >
              EXPLORE PROGRAMS
            </a>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-blue-700 rounded-full opacity-20 blur-3xl hidden lg:block"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-blue-700 rounded-full opacity-20 blur-3xl hidden lg:block"></div>
    </section>
  );
}
