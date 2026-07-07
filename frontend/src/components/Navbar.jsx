function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-blue-600 cursor-pointer">
          🎓 ScholarAI
        </h1>

        {/* Navigation */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-semibold">

          <li className="cursor-pointer hover:text-blue-600 transition duration-300">
            Home
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition duration-300">
            Scholarships
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition duration-300">
            Government Schemes
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition duration-300">
            About
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition duration-300">
            Contact
          </li>

        </ul>

        {/* Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300">
          Sign In
        </button>

      </div>
    </nav>
  );
}

export default Navbar;