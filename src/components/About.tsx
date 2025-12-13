import React from "react";

function About() {
  return (
    <>
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-blue-50 to-teal-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About Afribbean Air
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {`We're more than an airline – we're the bridge connecting three
              vibrant continents with shared heritage and bright futures`}
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded on the vision of eliminating the barriers that
                  separate families, friends, and business partners across the
                  Atlantic, Afribbean Air was born from a simple observation:
                  why should traveling between culturally connected regions
                  require multiple stops and excessive time?
                </p>
                <p>
                  The Caribbean, West Africa, and South America share deep
                  historical connections, vibrant cultures, and growing economic
                  ties. Yet traditional airline routes forced travelers to
                  endure lengthy journeys through distant hub cities, making
                  these connections expensive and exhausting.
                </p>
                <p>
                  {`We changed that. By establishing the first direct routes
                  connecting these three regions, we've created a transportation
                  revolution that serves millions of people across the African
                  diaspora and opens new opportunities for trade, tourism, and
                  cultural exchange.`}
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-teal-600">15+</p>
                      <p className="text-sm text-gray-600">Destinations</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-blue-600">50%</p>
                      <p className="text-sm text-gray-600">Time Saved</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-orange-600">
                        100K+
                      </p>
                      <p className="text-sm text-gray-600">Happy Passengers</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-green-600">40%</p>
                      <p className="text-sm text-gray-600">Cost Reduction</p>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-center text-gray-600 font-medium">
                      Connecting three continents, one flight at a time
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-2xl transform rotate-3 -z-10"></div>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Core Values
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full mx-auto flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-globe w-8 h-8 text-white"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Connecting Cultures
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  We bridge the gap between African, Caribbean, and South
                  American communities, fostering cultural exchange and
                  strengthening diaspora connections.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full mx-auto flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-heart w-8 h-8 text-white"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Family First
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  We understand the importance of family connections across
                  continents. Our mission is to make visiting loved ones easier
                  and more affordable.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full mx-auto flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-zap w-8 h-8 text-white"
                  >
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Innovation Driven
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {`By pioneering direct routes where others saw impossible
                  connections, we're revolutionizing travel between three
                  dynamic regions.`}
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full mx-auto flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shield w-8 h-8 text-white"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Trust &amp; Safety
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Your safety is our priority. We operate with the highest
                  international aviation standards and modern fleet technology.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20 bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
            <div className="text-center space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                To strengthen the bonds between African, Caribbean, and South
                American communities by providing convenient, affordable, and
                comfortable direct air travel that eliminates traditional
                barriers and opens new possibilities for cultural exchange,
                family reunification, and economic growth.
              </p>
              <div className="pt-6">
                <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-3 rounded-full hover:from-teal-600 hover:to-blue-700 transition-all duration-300 font-semibold">
                  Join Our Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
