import Link from "next/link";

export default function CTA() {
  return (
    <section className=" px-6 py-24 text-center">
      <div className="max-w-5xl mx-auto">
        {/* Tag */}
        <div className="inline-block bg-gray-900 text-white text-xs uppercase tracking-widest px-4 py-1 rounded-full mb-8">
          Ready to build?
        </div>

        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          Let's create the system your business needs next.
        </h2>

        {/* Subtext */}
        <p className="text-gray-500 text-sm mb-10">
          Talk to us about your technology goals — we'll find the right approach
          together.
        </p>

        {/* ✅ Navigates to /contact page */}
        <Link
          href="/contact"
          className="inline-block bg-gray-900 text-white text-sm px-8 py-4 rounded-full hover:bg-gray-700 transition"
        >
          Speak with us
        </Link>
      </div>
    </section>
  );
}
