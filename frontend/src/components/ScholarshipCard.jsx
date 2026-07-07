function ScholarshipCard({
  title,
  amount,
  eligibility,
  deadline,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300 border border-gray-100">

      <h3 className="text-2xl font-bold text-blue-700">
        {title}
      </h3>

      <p className="mt-4 text-gray-700">
        <strong>💰 Amount:</strong> {amount}
      </p>

      <p className="mt-2 text-gray-700">
        <strong>🎓 Eligibility:</strong> {eligibility}
      </p>

      <p className="mt-2 text-gray-700">
        <strong>📅 Deadline:</strong> {deadline}
      </p>

      <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
        Apply Now
      </button>

    </div>
  );
}

export default ScholarshipCard;