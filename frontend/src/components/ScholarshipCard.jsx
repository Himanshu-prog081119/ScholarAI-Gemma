function ScholarshipCard({
  title = "Scholarship",
  provider = "Not Available",
  amount = "Not Available",
  eligibility = "Not Available",
  deadline = "Not Available",
  score = 0,
  reasons = [],
  officialLink = "#",
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition duration-300">

      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-blue-700 mb-4">
          {title}
        </h3>
      </div>

      <div className="mb-4">
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold">
          ⭐ Match Score: {score}%
        </span>
      </div>

      <p className="mb-2">
        <strong>🏢 Provider:</strong> {provider}
      </p>

      <p className="mb-2">
        <strong>💰 Amount:</strong> {amount}
      </p>

      <p className="mb-2">
        <strong>🎓 Eligibility:</strong> {eligibility}
      </p>

      <p className="mb-4">
        <strong>📅 Deadline:</strong> {deadline}
      </p>

      <div className="bg-blue-50 rounded-xl p-4 mb-5">
        <h4 className="font-bold text-blue-700 mb-2">
          🤖 Why Recommended?
        </h4>

        {reasons.length > 0 ? (
          <ul className="list-disc ml-5">
            {reasons.map((reason, index) => (
              <li key={index}>{reason}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">
            AI recommendation will appear here.
          </p>
        )}
      </div>

      <a
        href={officialLink || "#"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold">
          Apply Now
        </button>
      </a>

    </div>
  );
}

export default ScholarshipCard;
