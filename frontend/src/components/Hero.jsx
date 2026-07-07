import heroImage from "../assets/images/hero.png";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-100 via-white to-purple-100 py-20">
      <div className="max-w-7xl mx-auto px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* Left Side */}
        <div className="lg:w-1/2 text-center lg:text-left">

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Find the Right
            <br />
            <span className="text-blue-600">
              Scholarship
            </span>{" "}
            for Your Future
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Discover scholarships and government schemes tailored to your
            profile using AI. Save time, check eligibility instantly,
            and unlock opportunities for your future.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition">
              Find My Scholarship
            </button>

            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition">
              Explore Schemes
            </button>

          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={heroImage}
            alt="ScholarAI Hero"
            className="w-full max-w-xl drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;