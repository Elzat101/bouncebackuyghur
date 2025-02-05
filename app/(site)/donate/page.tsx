export default function Donate() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Donate Header */}
      <section className="text-center bg-gray-100 py-12 px-6 rounded-lg">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-900 text-transparent bg-clip-text mb-6">
          Support Our Cause
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Your generosity can create lasting change in the lives of Uyghur
          children. Help us provide essential resources, promote physical and
          emotional well-being, and raise awareness about the challenges they
          face.
        </p>
      </section>

      {/* Ways to Donate */}
      <section className="mt-16">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Ways to Donate
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-blue-100 py-8 px-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-800">Donate Online</h3>
            <p className="mt-4 text-gray-700">
              Make a secure donation through our online portal to support our
              initiatives.
            </p>
            <a
              href="/donate/online"
              className="mt-4 inline-block bg-blue-600 px-6 py-3 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Donate Now
            </a>
          </div>
          <div className="text-center bg-blue-100 py-8 px-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-800">Donate Items</h3>
            <p className="mt-4 text-gray-700">
              Contribute clothing or sports equipment to directly impact the
              lives of Uyghur children.
            </p>
            <a
              href="/donate/items"
              className="mt-4 inline-block bg-blue-600 px-6 py-3 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Learn More
            </a>
          </div>
          <div className="text-center bg-blue-100 py-8 px-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-800">
              Other Organizations
            </h3>
            <p className="mt-4 text-gray-700">
              You can also donate do other organizations who have similar goals
              to ours.
            </p>
            <a
              href="/donate/corporate"
              className="mt-4 inline-block bg-blue-600 px-6 py-3 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="mt-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Your Impact</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Every contribution, big or small, makes a difference. Your support
          allows us to provide essentials, foster growth, and spread awareness
          about the Uyghur community’s challenges.
        </p>
      </section>
    </div>
  );
}
