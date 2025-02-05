export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Projects Header */}
      <section className="text-center bg-gray-100 py-12 px-6 rounded-lg">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-6">
          Our Projects
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
          At <span className="font-bold">Bounceback Uyghur</span>, we are
          working on impactful projects to support Uyghur children and raise
          awareness about their challenges. While we currently have no active
          projects to showcase, stay tuned for updates on our upcoming
          initiatives.
        </p>
      </section>

      {/* Placeholder Section */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Coming Soon
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
          We are actively planning projects that aim to make a real difference
          in the lives of Uyghur children. Check back soon to learn more about
          our initiatives.
        </p>
        <div className="mt-8">
          <p className="text-gray-500 italic">
            No projects are currently available.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Get Involved
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
          Your involvement matters. Whether through donations or spreading
          awareness, your support can help us launch impactful projects to
          support Uyghur children.
        </p>
      </section>
    </div>
  );
}
