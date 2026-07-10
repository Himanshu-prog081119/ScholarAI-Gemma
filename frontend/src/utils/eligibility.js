function getEligibleScholarships(student, scholarships) {
  const recommendations = [];

  scholarships.forEach((scholarship) => {
    let score = 0;
    const reasons = [];

    // Education
    if (
      scholarship.education === "All" ||
      scholarship.education === student.education
    ) {
      score += 35;
      reasons.push("Matches your education");
    } else {
      return;
    }

    // State
    if (
      scholarship.state === "All India" ||
      scholarship.state.toLowerCase() === student.state.toLowerCase()
    ) {
      score += 20;
      reasons.push("Available in your state");
    }

    // Category
    if (
      scholarship.category === "All" ||
      scholarship.category === student.category
    ) {
      score += 20;
      reasons.push("Category eligible");
    }

    // Gender
    if (
      scholarship.gender === "All" ||
      scholarship.gender === student.gender
    ) {
      score += 5;
      reasons.push("Gender eligible");
    }

    // Current Year
    if (
      scholarship.currentYear === "All" ||
      scholarship.currentYear === student.currentYear
    ) {
      score += 5;
      reasons.push("Eligible for your academic year");
    }

    // Income
    if (
      Number(student.annualFamilyIncome) <= scholarship.maxIncome
    ) {
      score += 15;
      reasons.push("Income criteria satisfied");
    } else {
      return;
    }

    recommendations.push({
      ...scholarship,
      score,
      reasons,
    });
  });

  recommendations.sort((a, b) => b.score - a.score);

  return recommendations;
}

export default getEligibleScholarships;