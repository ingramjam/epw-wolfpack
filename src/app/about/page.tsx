export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">About EPW</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            A Legacy of Excellence Since 1968
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Escondido Pop Warner has been a cornerstone of the Escondido community
                for over 55 years. Founded in 1968, EPW started with a simple mission: to
                provide young athletes with opportunities to learn football, develop
                character, and build lasting friendships.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                What began as a small youth football program has grown into a premier
                organization serving hundreds of families annually. Today, EPW offers three
                world-class programs: Flag Football, Tackle Football, and Cheerleading.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to safety, academic success, and character development
                remains unwavering. We believe that sports teach valuable life lessons—
                discipline, teamwork, resilience, and leadership—that prepare young
                athletes for success both on and off the field.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="mb-6 leading-relaxed text-blue-100">
                To provide young athletes in the Escondido community with a fun, safe, and
                structured environment to learn football, develop character, and build
                lasting friendships.
              </p>
              <h3 className="text-2xl font-bold mb-6">Our Values</h3>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span><strong>Safety First</strong> - Protecting our athletes is paramount</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span><strong>Excellence</strong> - We strive for the highest standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span><strong>Teamwork</strong> - Together we achieve more</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span><strong>Character</strong> - Building better people</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            By the Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">55+</div>
              <p className="text-gray-600 text-lg">Years of Excellence</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">1000s</div>
              <p className="text-gray-600 text-lg">Athletes Served</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">3</div>
              <p className="text-gray-600 text-lg">World-Class Programs</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">100%</div>
              <p className="text-gray-600 text-lg">Community Focused</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
