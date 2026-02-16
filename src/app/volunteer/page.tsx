export default function Volunteer() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Volunteer with EPW</h1>
          <p className="text-xl text-blue-100">
            Make a difference in young athletes' lives
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Volunteer?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Volunteering with Escondido Pop Warner is a rewarding opportunity to
                invest in the next generation of athletes and leaders. Whether you have
                experience in football or are simply passionate about working with youth,
                there's a role for you.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our volunteers are the backbone of EPW. They coach, mentor, organize events,
                and create a welcoming community for families. If you're looking to give back
                to your community and make a real impact, we'd love to have you on our team.
              </p>
            </div>
            <div className="bg-blue-900 text-white rounded-lg p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">Volunteer Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span>Background check</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span>Age 18 or older</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span>Commitment to child safety</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span>Positive attitude and teamwork</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Volunteer Roles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Available Volunteer Roles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-blue-200 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">Coaches</h3>
                <p className="text-gray-600 mb-4">
                  Lead practices and games, teach fundamentals, and mentor young athletes.
                  Experience is helpful but not required.
                </p>
                <button className="text-blue-900 font-semibold hover:text-blue-800 transition-colors">
                  Apply Now →
                </button>
              </div>
              <div className="border border-blue-200 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">Assistant Coaches</h3>
                <p className="text-gray-600 mb-4">
                  Support head coaches, work with small groups, and help with drills and skill development.
                </p>
                <button className="text-blue-900 font-semibold hover:text-blue-800 transition-colors">
                  Apply Now →
                </button>
              </div>
              <div className="border border-blue-200 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">Event Coordinators</h3>
                <p className="text-gray-600 mb-4">
                  Help organize clinics, games, and community events. Perfect for someone with organizational skills.
                </p>
                <button className="text-blue-900 font-semibold hover:text-blue-800 transition-colors">
                  Apply Now →
                </button>
              </div>
              <div className="border border-blue-200 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">Administrative Support</h3>
                <p className="text-gray-600 mb-4">
                  Assist with registration, communications, and general office tasks. Flexible schedule.
                </p>
                <button className="text-blue-900 font-semibold hover:text-blue-800 transition-colors">
                  Apply Now →
                </button>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-900 text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our volunteer team and be part of something special. Help us build champions
              both on and off the field.
            </p>
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors">
              Become a Volunteer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
