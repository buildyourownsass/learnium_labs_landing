import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learnium Labs - Empowering Learners, Enabling Industries",
  description: "At Learnium Labs, we are redefining skill development by delivering industry-aligned, experiential learning programs that prepare individuals and organizations to thrive in the modern world.",
  keywords: "skill development, learning programs, professional training, education, industry-aligned curriculum",
  authors: [{ name: "Learnium Labs" }],
  openGraph: {
    title: "Learnium Labs - Empowering Learners, Enabling Industries",
    description: "Industry-aligned, experiential learning programs that bridge the gap between learning and employability.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}