import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-7xl font-extrabold">
        <span className="bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent text-center">
          Bounceback Uyghur
        </span>
      </h1>

      <h1 className="text-5xl font-bold mt-12 mb-5 text-center">About Us:</h1>

      <p className="mt-3 text-xl text-gray-600 text-center">
        Welcome to BounceBack Uyghur, a nonprofit organization committed to
        supporting Uyghur children in need. Our mission is to provide essential
        resources such as clothing and sports equipment, helping to improve
        their quality of life and foster hope for the future. We also hope to
        educate those on the problems faced by Uyghurs around the world.{" "}
      </p>

      <h1 className=" text-5xl font-bold mt-12 mb-5 text-center">
        Why it matters:
      </h1>

      <p className="mt-3 text-xl text-gray-600 text-center">
        Many Uyghur children face significant hardships, including limited
        access to basic necessities and opportunities for growth. At BounceBack
        Uyghur, we believe that every child deserves a chance to thrive. By
        providing these vital resources, we help them build confidence,
        resilience, and a brighter future.
      </p>

      <h1 className="text-5xl font-bold mt-12 mb-5 text-center">
        {" "}
        What We Do{" "}
      </h1>

      <p className="mt-3 text-xl text-gray-600 text-center">
        <strong>Essential Resources: </strong> Distributing clothing to ensure
        Uyghur children have the essentials they need for daily life. <br />
        <strong>Sports for Growth: </strong> Supplying sports equipment to
        promote physical activity, teamwork, and emotional well-being. <br />
        <strong>Advocacy & Awareness: </strong> Educating the global community
        about the Uyghur situation and inspiring collective action.{" "}
      </p>

      <h1 className="text-5xl font-bold mt-12 mb-5 text-center">
        {" "}
        How You Can Help{" "}
      </h1>

      <p className="mt-3 text-xl text-gray-600 text-center">
        Your support is vital. Donations of clothing, sports equipment, or
        financial contributions directly impact the lives of Uyghur children. By
        partnering with us, you can help create opportunities and provide hope
        where it’s needed most.
      </p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">
        Current Events/News:
      </h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className="mt-2 font-bold text-black ">{project.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
