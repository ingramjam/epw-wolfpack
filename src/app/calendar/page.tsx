export default function Calendar() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">EPW Calendar</h1>
          <p className="text-xl text-blue-100">
            Important dates, schedules, and events
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2026 Season Schedule
            </h2>
            <p className="text-gray-600 mb-8">
              📅 Football Season: July 15 - September 2026<br/>
              Check back soon for detailed schedule information
            </p>
            <div className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold">
              View Full Schedule Coming Soon
            </div>
          </div>

          {/* Key Dates */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-blue-900 pl-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Registration</h3>
              <p className="text-blue-900 font-semibold mb-2">Open Now!</p>
              <p className="text-gray-600">Early bird pricing ends 2/15/26</p>
            </div>
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Season Starts</h3>
              <p className="text-green-600 font-semibold mb-2">July 15, 2026</p>
              <p className="text-gray-600">Football kicks off with all programs</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Clinics</h3>
              <p className="text-orange-500 font-semibold mb-2">Weekly Free Clinics</p>
              <p className="text-gray-600">Open to the public - beginner friendly</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
