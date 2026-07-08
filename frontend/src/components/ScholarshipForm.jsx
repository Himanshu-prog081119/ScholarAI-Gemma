import { useState } from "react";

function ScholarshipForm({ onSearch }) {
  const [formData, setFormData] = useState({
    fullName: "",
    education: "",
    state: "",
    category: "",
    annualFamilyIncome: "",
    gender: "",
    currentYear: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  alert("Button clicked!");

  console.log(formData);

  onSearch(formData);
};

  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10">
        <h2 className="text-5xl font-bold text-center text-blue-600">
          🎓 Find Your Scholarship
        </h2>

        <p className="text-center text-gray-600 mt-4 text-lg">
          Fill in your details and let ScholarAI recommend the best
          scholarships and government schemes for you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-6 mt-12"
        >
          {/* Full Name */}
          <div>
            <label className="block font-semibold mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              placeholder="Enter your name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Education */}
          <div>
            <label className="block font-semibold mb-2">
              Education
            </label>

            <select
              name="education"
              value={formData.education}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Education</option>
              <option>B.Tech</option>
              <option>B.Sc</option>
              <option>B.Com</option>
              <option>B.A</option>
              <option>Diploma</option>
              <option>M.Tech</option>
              <option>MBA</option>
            </select>
          </div>

          {/* State */}
          <div>
            <label className="block font-semibold mb-2">
              State
            </label>

            <input
              type="text"
              name="state"
              placeholder="West Bengal"
              value={formData.state}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-semibold mb-2">
              Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Category</option>
              <option>General</option>
              <option>OBC</option>
              <option>SC</option>
              <option>ST</option>
              <option>EWS</option>
            </select>
          </div>

          {/* Annual Family Income */}
          <div>
            <label className="block font-semibold mb-2">
              Annual Family Income
            </label>

            <input
              type="number"
              name="annualFamilyIncome"
              placeholder="₹ 200000"
              value={formData.annualFamilyIncome}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block font-semibold mb-2">
              Gender
            </label>

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Current Year */}
          <div>
            <label className="block font-semibold mb-2">
              Current Year
            </label>

            <select
              name="currentYear"
              value={formData.currentYear}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Year</option>
              <option>1st Year</option>
              <option>2nd Year</option>
              <option>3rd Year</option>
              <option>4th Year</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center mt-6">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl text-lg font-semibold transition"
            >
              🔍 Find Scholarships
            </button>
          </div>
        </form>

        {/* Live Preview */}
        <div className="mt-10 bg-blue-50 rounded-2xl p-6">
          <h3 className="text-2xl font-bold text-blue-700">
            Live Preview
          </h3>

          <p className="mt-3 text-lg">
            <strong>Name:</strong> {formData.fullName || "Not entered"}
          </p>

          <p>
            <strong>Education:</strong>{" "}
            {formData.education || "Not selected"}
          </p>

          <p>
            <strong>State:</strong> {formData.state || "Not entered"}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ScholarshipForm;