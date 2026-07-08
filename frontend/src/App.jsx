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
  const [filteredScholarships, setFilteredScholarships] =
    useState(scholarships);

  const handleSearch = (studentData) => {
    const eligibleScholarships = getEligibleScholarships(
      studentData,
      scholarships
    );

    setFilteredScholarships(eligibleScholarships);
  };

  return (
    <>
      <Navbar />

      <Hero />

      <Stats />

      <Features />

      <HowItWorks />

      <ScholarshipForm onSearch={handleSearch} />

      <div className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-5xl font-bold text-center text-blue-700 mb-12">
          Recommended Scholarships
        </h2>

        {filteredScholarships.length === 0 ? (
          <p className="text-center text-red-500 text-xl font-bold">
            ❌ No scholarships found for your profile.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {filteredScholarships.map((scholarship) => (
              <ScholarshipCard
                key={scholarship.id}
                title={scholarship.title}
                amount={scholarship.amount}
                eligibility={scholarship.eligibility}
                deadline={scholarship.deadline}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;