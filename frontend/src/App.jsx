import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import ScholarshipForm from "./components/ScholarshipForm";
import ScholarshipCard from "./components/ScholarshipCard";

import scholarships from "./data/scholarships";
import getEligibleScholarships from "./utils/eligibility";

function App() {
  const [filteredScholarships, setFilteredScholarships] = useState(scholarships);

  const [searchTerm, setSearchTerm] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [educationFilter, setEducationFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");

  // 🔹 Updated handleSearch to call backend
  const handleSearch = async (studentData) => {
    console.clear();
    console.log("Student Data:", studentData);

    const recommendations = getEligibleScholarships(studentData, scholarships);
    console.log("Recommendations:", recommendations);

    // Call backend for AI explanation for each scholarship
    const updatedRecommendations = await Promise.all(
      recommendations.map(async (scholarship) => {
        try {
          const response = await fetch("http://localhost:5000/api/recommend", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ student: studentData, scholarship }),
          });

          const data = await response.json();
          return { ...scholarship, aiExplanation: data.explanation };
        } catch (error) {
          console.error("Error fetching AI explanation:", error);
          return { ...scholarship, aiExplanation: "AI explanation unavailable." };
        }
      })
    );

    alert(`Found ${updatedRecommendations.length} scholarship(s)`);
    setFilteredScholarships(updatedRecommendations);
  };

  const filteredSearchScholarships = filteredScholarships.filter((scholarship) => {
    const matchesSearch =
      scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholarship.provider.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesState = stateFilter === "" || scholarship.state === stateFilter;
    const matchesEducation =
      educationFilter === "" || scholarship.education === educationFilter;
    const matchesCategory =
      categoryFilter === "" || scholarship.category === categoryFilter;
    const matchesGender =
      genderFilter === "" ||
      scholarship.gender === genderFilter ||
      scholarship.gender === "All";

    return (
      matchesSearch &&
      matchesState &&
      matchesEducation &&
      matchesCategory &&
      matchesGender
    );
  });

  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />

      <ScholarshipForm onSearch={handleSearch} />

      <div className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-5xl font-bold text-center text-blue-700 mb-4">
          🎯 AI Recommended Scholarships
        </h2>

        <p className="text-center text-gray-600 mb-12 text-lg">
          Scholarships ranked according to your profile.
        </p>

        {/* Search & Filter Heading */}
        <h3 className="text-2xl font-bold text-blue-700 text-center mb-6">
          🔍 Search & Filter Scholarships
        </h3>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-8">
          <input
            type="text"
            placeholder="Search by scholarship name or provider..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <select
              value={stateFilter}
              onChange={(e) => setStateFilter(e.target.value)}
              className="border border-gray-300 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All States</option>
              <option value="West Bengal">West Bengal</option>
              <option value="All India">All India</option>
            </select>

            <select
              value={educationFilter}
              onChange={(e) => setEducationFilter(e.target.value)}
              className="border border-gray-300 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Education</option>
              <option value="B.Tech">B.Tech</option>
              <option value="M.Tech">M.Tech</option>
              <option value="MBA">MBA</option>
              <option value="All">All</option>
            </select>

            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="border border-gray-300 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Categories</option>
              <option value="General">General</option>
              <option value="OBC">OBC</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
              <option value="All">All</option>
            </select>

            <select
              value={genderFilter}
              onChange={(e) => setGenderFilter(e.target.value)}
              className="border border-gray-300 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Genders</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="All">All</option>
            </select>
          </div>
        </div>

        {/* Clear Filters Button */}
        <div className="text-center mb-8">
          <button
            onClick={() => {
              setSearchTerm("");
              setStateFilter("");
              setEducationFilter("");
              setCategoryFilter("");
              setGenderFilter("");
            }}
            className="bg-red-500 text-white px-6 py-2 rounded-xl hover:bg-red-600 transition"
          >
            Clear Filters
          </button>
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
            Showing {filteredSearchScholarships.length} scholarship(s)
          </p>
        </div>

        {/* No-results condition */}
        {filteredSearchScholarships.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-red-500">
              ❌ No Matching Scholarships Found
            </h3>
            <p className="mt-4 text-gray-600 text-lg">
              Try changing your search term or filter criteria.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSearchScholarships.map((scholarship) => (
              <ScholarshipCard
                key={scholarship.id}
                title={scholarship.title}
                provider={scholarship.provider}
                amount={scholarship.amount}
                eligibility={scholarship.eligibility}
                deadline={scholarship.deadline}
                score={scholarship.score}
                reasons={scholarship.reasons}
                officialLink={scholarship.officialLink}
                aiExplanation={scholarship.aiExplanation} // 🔹 Added
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
