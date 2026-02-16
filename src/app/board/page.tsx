export default function Board() {
  const boardMembers = [
    { name: "Board of Directors", title: "Leadership Team", email: "Coming Soon" },
    { name: "Volunteer Team", title: "Community Support", email: "volunteers@epwwolfpack.com" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Leadership</h1>
          <p className="text-xl text-blue-100">
            Meet the people who make EPW great
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Join Our Community
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Escondido Pop Warner relies on dedicated volunteers and board members to
              bring our mission to life. Whether you're interested in coaching, helping
              with events, or serving on the board, we'd love to have you involved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {boardMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 border-l-4 border-blue-900"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-900 font-semibold mb-4">{member.title}</p>
                <p className="text-gray-600">{member.email}</p>
              </div>
            ))}
          </div>

          {/* Volunteer Info */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Volunteer Opportunities
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-blue-900 font-bold text-lg">✓</span>
                <span><strong>Coaching</strong> - Share your knowledge and passion for football</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-900 font-bold text-lg">✓</span>
                <span><strong>Event Support</strong> - Help organize clinics and games</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-900 font-bold text-lg">✓</span>
                <span><strong>Administrative</strong> - Assist with registration and coordination</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-900 font-bold text-lg">✓</span>
                <span><strong>Fundraising</strong> - Help support our programs</span>
              </li>
            </ul>
            <button className="mt-8 bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
              Learn About Volunteering
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
