import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Welcome Section */}
      <section className="text-center bg-gray-100 py-12 px-6 rounded-lg">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-900 text-transparent bg-clip-text mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to <span className="font-bold">Bounceback Uyghur</span>, a
          nonprofit organization committed to supporting Uyghur children in
          need. Our mission is to provide essential resources such as clothing
          and sports equipment, helping to improve their quality of life and
          foster hope for the future. We also aim to educate others on the
          challenges faced by Uyghurs worldwide.
        </p>
      </section>

      {/* Why It Matters */}
      <section className="mt-16">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Why It Matters
        </h2>
        <div className="text-lg text-gray-700 leading-relaxed text-center">
          <p>
            Many Uyghur children face significant hardships, including limited
            access to basic necessities and opportunities for growth. At{" "}
            <span className="font-bold">Bounceback Uyghur</span>, we believe
            that every child deserves a chance to thrive. By providing these
            vital resources, we help them build confidence, resilience, and a
            brighter future.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="mt-16 bg-blue-100 py-12 px-6 rounded-lg">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          What We Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-800">
              Essential Resources
            </h3>
            <p className="mt-4 text-gray-700">
              Distributing clothing to ensure Uyghur children have the
              essentials they need for daily life.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-800">
              Sports for Growth
            </h3>
            <p className="mt-4 text-gray-700">
              Supplying sports equipment to promote physical activity, teamwork,
              and emotional well-being.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-800">
              Advocacy &amp; Awareness
            </h3>
            <p className="mt-4 text-gray-700">
              Educating the global community about the Uyghur situation and
              inspiring collective action.
            </p>
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="mt-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Get Involved</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Your support is vital. Donations of clothing, sports equipment, or
          financial contributions directly impact the lives of Uyghur children.
          By partnering with us, you can help create opportunities and provide
          hope where it’s needed most.
        </p>
      </section>
    </div>
  );
}
