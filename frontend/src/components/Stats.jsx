import {
  GraduationCap,
  Landmark,
  Users,
  BadgeCheck,
} from "lucide-react";

function Stats() {
  return (
    <section className="bg-gradient-to-br from-blue-100 via-white to-purple-100 pb-20">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300">
            <GraduationCap size={50} className="mx-auto text-blue-600" />
            <h3 className="text-3xl font-bold text-blue-700 mt-4">2500+</h3>
            <p className="text-gray-600 mt-2">Scholarships</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300">
            <Landmark size={50} className="mx-auto text-green-600" />
            <h3 className="text-3xl font-bold text-green-700 mt-4">1200+</h3>
            <p className="text-gray-600 mt-2">Government Schemes</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300">
            <Users size={50} className="mx-auto text-purple-600" />
            <h3 className="text-3xl font-bold text-purple-700 mt-4">10000+</h3>
            <p className="text-gray-600 mt-2">Students Helped</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300">
            <BadgeCheck size={50} className="mx-auto text-yellow-500" />
            <h3 className="text-3xl font-bold text-yellow-600 mt-4">100%</h3>
            <p className="text-gray-600 mt-2">Verified Opportunities</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Stats;