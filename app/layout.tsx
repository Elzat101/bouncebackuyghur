import type { Metadata } from "next";
import "./globals.css"; // ✅ Correct import path

export const metadata: Metadata = {
  title: "Bounceback Uyghur",
  description: "Providing essential resources to support Uyghur children.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>; // ✅ Remove unnecessary wrapping
}
