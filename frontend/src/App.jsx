function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-2xl p-10 text-center">
        <h1 className="text-5xl font-bold text-blue-600">
          🎓 ScholarAI
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          AI-powered Scholarship & Government Scheme Finder
        </p>

        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl">
          Find My Scholarship
        </button>
      </div>
    </div>
  );
}

export default App;