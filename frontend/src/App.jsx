import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import ScholarshipForm from "./components/ScholarshipForm";
import ScholarshipCard from "./components/ScholarshipCard";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <Stats />

      <Features />

      <HowItWorks />

      <ScholarshipForm />

      <div className="max-w-6xl mx-auto py-20 px-6">

        <h2 className="text-5xl font-bold text-center text-blue-700 mb-12">
          Recommended Scholarships
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <ScholarshipCard
            title="INSPIRE Scholarship"
            amount="₹80,000/year"
            eligibility="B.Tech & B.Sc Students"
            deadline="31 August 2026"
          />

          <ScholarshipCard
            title="AICTE Pragati Scholarship"
            amount="₹50,000/year"
            eligibility="Female Engineering Students"
            deadline="15 September 2026"
          />

          <ScholarshipCard
            title="National Scholarship Portal"
            amount="Up to ₹75,000/year"
            eligibility="Eligible Indian Students"
            deadline="30 October 2026"
          />

        </div>

      </div>
    </>
  );
}

export default App;