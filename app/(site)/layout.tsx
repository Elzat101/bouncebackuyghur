"use client"; // ✅ Mark as Client Component

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Import mobile menu icons

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className="bg-gray-100">
        {/* Header with Mobile Menu */}
        <header className="bg-gray-900 text-white py-4 shadow-lg w-full">
          <nav className="container mx-auto flex justify-between items-center px-6">
            <h1 className="text-2xl font-bold">Bounceback Uyghur</h1>
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-gray-400 mt-2">
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
                className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 font-bold"
              >
                Donate
              </Link>
            </div>
          </nav>
          {menuOpen && (
            <div className="md:hidden bg-gray-800 text-white flex flex-col items-center py-4 space-y-4">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
              <Link href="/projects" onClick={() => setMenuOpen(false)}>
                Projects
              </Link>
              <Link
                href="/donate"
                className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 font-bold"
                onClick={() => setMenuOpen(false)}
              >
                Donate
              </Link>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 sm:px-6 py-10">{children}</main>

        {/* ✅ Ensure footer appears only here */}
        <footer className="bg-gray-800 text-white text-center py-6 mt-12 w-full">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="mt-4 text-lg">We would love to hear from you!</p>
          <p className="text-lg">
            Feel free to reach out for any questions, suggestions, or support.
          </p>
          <div className="mt-4">
            <p className="text-lg font-semibold">
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
              <a
                href="tel:7034770401"
                className="text-blue-400 hover:underline"
              >
                703-477-0401
              </a>
            </p>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Bounceback Uyghur. All rights
            reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
