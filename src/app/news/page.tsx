export default function News() {
  const newsItems = [
    {
      id: 1,
      title: "REGISTRATION FOR THE 2026 SEASON IS OPEN!",
      date: "February 15, 2026",
      category: "Announcement",
      excerpt: "Early bird pricing ends TODAY! Football season kicks off July 15. Don't miss out—register now for the best rates.",
      image: "📢"
    },
    {
      id: 2,
      title: "Weekly Free Clinics Open to the Public",
      date: "February 10, 2026",
      category: "Events",
      excerpt: "Learn the fundamentals of football with our coaching staff. Open to all ages and experience levels. Beginner friendly!",
      image: "🏈"
    },
    {
      id: 3,
      title: "Meet the EPW Coaching Staff",
      date: "February 1, 2026",
      category: "Team",
      excerpt: "Get to know the dedicated coaches who will guide your child through an amazing season of growth, teamwork, and fun.",
      image: "👨‍🏫"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">EPW News</h1>
          <p className="text-xl text-blue-100">
            Latest updates and stories from the Wolfpack
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-r from-blue-900 to-blue-800 h-48 flex items-center justify-center text-6xl">
                  {item.image}
                </div>
                <div className="p-6">
                  <p className="text-blue-900 font-semibold text-sm mb-2">
                    {item.category}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">{item.date}</p>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <a
                    href="#"
                    className="text-blue-900 font-semibold hover:text-blue-800 transition-colors"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for the latest EPW news, schedule updates, and announcements.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
            <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
