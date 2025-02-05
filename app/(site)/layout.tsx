import type { Metadata } from "next";
import "../globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bounceback Uyghur",
  description: "Supporting Uyghur children with essential resources.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bounceback Uyghur</title>
      </head>
      <body>
        <header className="bg-gray-900 text-white py-4 shadow-lg w-full">
          <nav className="container mx-auto flex justify-between items-center px-6">
            <h1 className="text-2xl font-bold">Bounceback Uyghur</h1>
            <div className="flex space-x-6">
              <Link href="/" className="hover:text-gray-400 mt-2 ">
                Home
              </Link>
              <Link href="/about" className="hover:text-gray-400 mt-2">
                About
              </Link>
              <Link href="/projects" className="hover:text-gray-400 mt-2">
                Projects
              </Link>
              <Link
                href="/donate"
                className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Donate
              </Link>
            </div>
          </nav>
        </header>
        <main className="container mx-auto px-4 sm:px-6 py-10">{children}</main>
        <footer className="bg-gray-800 text-white text-center py-6 mt-12 w-full">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="mt-4 text-lg">We would love to hear from you!</p>
          <p className="text-lg">
            Feel free to reach out for any questions, suggestions, or support.
          </p>
          <p className="mt-4 text-lg font-semibold">
            Email:{" "}
            <a
              href="mailto:bouncebackuyghur@gmail.com"
              className="text-blue-400 hover:underline"
            >
              bouncebackuyghur@gmail.com
            </a>
          </p>
          <p className="mt-2 text-lg font-semibold">
            Phone:{" "}
            <a href="tel:7034770401" className="text-blue-400 hover:underline">
              703-477-0401
            </a>
          </p>
          <p className="mt-2 text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Bounceback Uyghur. All rights
            reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
