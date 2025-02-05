import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gray-100 py-20 w-full">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-900 text-transparent bg-clip-text leading-tight">
            BounceBack Uyghur
          </h1>
          <p className="mt-6 text-lg text-gray-600 font-bold">
            Advocating for Uyghur children and creating a brighter future.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Our Mission</h2>
        <p className="mt-4 text-lg text-gray-700">
          We support Uyghur children by providing essential resources like
          clothing and sports equipment, helping them build a brighter future.
          We strive to create a sense of community and raise awareness about the
          struggles Uyghur children face. Through advocacy, education, and
          outreach programs, we hope to inspire positive change and lasting
          impact.
        </p>
      </section>

      {/* Statistics Section */}
      <section className="bg-blue-100 py-16 w-full">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold">The Uyghur Crisis in Numbers</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-extrabold text-blue-800">
                1 Million+
              </h3>
              <p className="mt-2 text-gray-700">
                Uyghurs detained in &quot;re-education camps&quot; since 2017.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold text-blue-800">500,000</h3>
              <p className="mt-2 text-gray-700">
                Uyghur children forcibly separated from their families.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold text-blue-800">20%</h3>
              <p className="mt-2 text-gray-700">
                Of global cotton comes from forced Uyghur labor in Xinjiang.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-10 px-6 max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold">Current Events & News</h2>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project._id}
              className="border-2 border-gray-300 rounded-lg p-4 hover:shadow-xl transition"
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  width={750}
                  height={300}
                  className="object-cover rounded-lg"
                />
              )}
              <h3 className="mt-3 font-bold text-gray-900">{project.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-10 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold">How You Can Help</h2>
        <p className="mt-4 text-lg text-gray-700">
          Support us by donating clothing, sports equipment, or financial
          contributions to make a lasting impact on Uyghur children&apos;s
          lives.
        </p>
        <Link
          href="/donate"
          className="mt-6 inline-block bg-blue-600 px-6 py-3 text-white font-semibold rounded-lg hover:bg-blue-700"
        >
          Donate Now
        </Link>
      </section>
    </div>
  );
}
