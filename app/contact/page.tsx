import Contact from "@/components/Contact";
import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-[#f6f3eb] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}

        <div className="mb-12 flex items-center justify-between">
          <img src="/logo.svg" alt="Techno Trend" className="h-10 w-auto" />

          <a
            href="/"
            className="rounded-full border border-gray-300 px-6 py-3 text-sm text-gray-700 transition hover:bg-white"
          >
            ← Back to site
          </a>
        </div>

        <Contact />
      </div>
    </section>
  );
}
