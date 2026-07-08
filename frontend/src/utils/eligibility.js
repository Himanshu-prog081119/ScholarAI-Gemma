function getEligibleScholarships(student, scholarships) {
  return scholarships.filter((scholarship) => {
    console.log("Checking:", scholarship.title);

    console.log("Education:", scholarship.education, student.education);
    console.log("State:", scholarship.state, student.state);
    console.log("Category:", scholarship.category, student.category);
    console.log("Income:", scholarship.maxIncome, student.annualFamilyIncome);

    if (
      scholarship.education &&
      scholarship.education !== student.education
    ) {
      console.log("Rejected: Education");
      return false;
    }

    if (
      scholarship.state &&
      scholarship.state !== "All India" &&
      scholarship.state !== student.state
    ) {
      console.log("Rejected: State");
      return false;
    }

    if (
      scholarship.category &&
      scholarship.category !== "All" &&
      scholarship.category !== student.category
    ) {
      console.log("Rejected: Category");
      return false;
    }

    if (
      scholarship.maxIncome &&
      Number(student.annualFamilyIncome) > scholarship.maxIncome
    ) {
      console.log("Rejected: Income");
      return false;
    }

    console.log("Accepted");
    return true;
  });
}

export default getEligibleScholarships;