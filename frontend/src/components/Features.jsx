import {
  Bot,
  GraduationCap,
  Landmark,
  Zap,
} from "lucide-react";

function Features() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-blue-700">
          Why Choose ScholarAI?
        </h2>

        <p className="text-center text-gray-600 mt-4 text-lg">
          Everything you need to discover scholarships and government schemes.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          <div className="bg-blue-50 rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition duration-300">
            <Bot size={52} className="mx-auto text-blue-600" />

            <h3 className="text-2xl font-bold mt-5">
              AI Powered
            </h3>

            <p className="text-gray-600 mt-4">
              Smart recommendations based on your profile and eligibility.
            </p>
          </div>

          <div className="bg-green-50 rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition duration-300">
            <GraduationCap size={52} className="mx-auto text-green-600" />

            <h3 className="text-2xl font-bold mt-5">
              Scholarships
            </h3>

            <p className="text-gray-600 mt-4">
              Search thousands of verified scholarships in one place.
            </p>
          </div>

          <div className="bg-purple-50 rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition duration-300">
            <Landmark size={52} className="mx-auto text-purple-600" />

            <h3 className="text-2xl font-bold mt-5">
              Government Schemes
            </h3>

            <p className="text-gray-600 mt-4">
              Explore Central and State Government schemes easily.
            </p>
          </div>

          <div className="bg-yellow-50 rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition duration-300">
            <Zap size={52} className="mx-auto text-yellow-500" />

            <h3 className="text-2xl font-bold mt-5">
              Fast Eligibility
            </h3>

            <p className="text-gray-600 mt-4">
              Check your eligibility within seconds using AI.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Features;