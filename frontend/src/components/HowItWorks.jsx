function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center text-blue-600">
          How ScholarAI Works
        </h2>

        <p className="text-center text-gray-600 mt-4 text-lg">
          Get personalized scholarship recommendations in just a few simple steps.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {/* Step 1 */}
          <div className="bg-blue-50 rounded-3xl shadow-lg p-8 text-center hover:scale-105 transition">
            <div className="text-6xl mb-5">📝</div>

            <h3 className="text-2xl font-bold">
              Create Your Profile
            </h3>

            <p className="text-gray-600 mt-4">
              Enter your education, category, income, state, and interests to help AI understand your profile.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-purple-50 rounded-3xl shadow-lg p-8 text-center hover:scale-105 transition">
            <div className="text-6xl mb-5">🤖</div>

            <h3 className="text-2xl font-bold">
              AI Finds Matches
            </h3>

            <p className="text-gray-600 mt-4">
              ScholarAI analyzes thousands of scholarships and government schemes to find your best matches.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-green-50 rounded-3xl shadow-lg p-8 text-center hover:scale-105 transition">
            <div className="text-6xl mb-5">🚀</div>

            <h3 className="text-2xl font-bold">
              Apply Easily
            </h3>

            <p className="text-gray-600 mt-4">
              View eligibility, deadlines, required documents, and apply through official scholarship portals.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HowItWorks;