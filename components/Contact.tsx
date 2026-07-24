"use client";

import { useState } from "react";
import { contactPageContent, siteConfig } from "@/lib/site";

const contactMethods = [
  {
    label: "Address",
    value: siteConfig.contact.address,
    icon: "📍",
  },
  {
    label: "Email",
    value: siteConfig.contact.email,
    icon: "✉️",
  },
  {
    label: "Phone",
    value: siteConfig.contact.phone,
    icon: "📞",
  },
] as const;

export default function Contact() {
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = {
      fullName: (form.elements.namedItem("fullName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      interest: (form.elements.namedItem("interest") as HTMLSelectElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      website: "",
      startedAt: Date.now(),
      consent: true,
    };

    setStatus("loading");

    try {
      const res = await fetch("https://6bpf9xg5-4000.uks1.devtunnels.ms/api/v1/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      form.reset();
      setAgreed(false);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="px-6 py-12">
      {status === "success" && (
        <div className="fixed right-6 top-6 z-50 rounded-2xl bg-[#aaee00] px-6 py-4 text-sm font-medium text-black shadow-lg">
          Message sent! We'll get back to you shortly.
        </div>
      )}

      {status === "error" && (
        <div className="fixed right-6 top-6 z-50 rounded-2xl bg-red-500 px-6 py-4 text-sm font-medium text-white shadow-lg">
          Something went wrong. Please try again.
        </div>
      )}

      <div className="mx-auto grid max-w-6xl items-start gap-16 md:grid-cols-2">
        <div>
          <span className="inline-flex rounded-full border border-black/15 px-4 py-1 text-xs uppercase tracking-[0.24em] text-black/60">
            {contactPageContent.eyebrow}
          </span>

          <h1 className="mt-6 max-w-lg text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            {contactPageContent.title}
          </h1>

          <p className="mb-10 mt-6 max-w-xl text-base leading-8 text-black/58">
            {contactPageContent.description}
          </p>

          <div className="space-y-3">
            {contactMethods.map((method) => (
              <div
                key={method.label}
                className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white px-5 py-4"
              >
                <span className="mt-0.5 text-gray-400">{method.icon}</span>
                <div>
                  <p className="mb-1 text-xs uppercase tracking-widest text-gray-400">
                    {method.label}
                  </p>
                  <p className="text-sm text-gray-700">{method.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#aaee00]" />
            <p className="text-xs uppercase tracking-widest text-gray-500">
              {contactPageContent.responseTime}
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-gray-200 bg-white p-8"
        >
          <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs text-gray-600">
                Full name*
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Ada Okonkwo"
                required
                autoComplete="name"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-gray-400"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-gray-600">
                Email address*
              </label>
              <input
                type="email"
                name="email"
                placeholder="ada@company.com"
                required
                autoComplete="email"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-gray-400"
              />
            </div>
          </div>

          <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs text-gray-600">
                Phone number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+234 801 000 0000"
                autoComplete="tel"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-gray-400"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-gray-600">
                Company / Organisation
              </label>
              <input
                type="text"
                name="company"
                placeholder="Your company name"
                autoComplete="organization"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-gray-400"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="mb-1 block text-xs text-gray-600">
              What are you interested in?*
            </label>
            <select
              name="interest"
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-600 outline-none transition focus:border-gray-400"
            >
              <option value="">Select an option</option>
              {contactPageContent.interests.map((interest) => (
                <option key={interest}>{interest}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="mb-1 block text-xs text-gray-600">
              Subject*
            </label>
            <input
              type="text"
              name="subject"
              placeholder="e.g. New product conversation"
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-gray-400"
            />
          </div>

          <div className="mb-6">
            <label className="mb-1 block text-xs text-gray-600">
              Tell us about your project*
            </label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Describe what you're trying to build, the problem you're solving, or any questions you have..."
              className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-gray-400"
            />
          </div>

          <div className="mb-6 flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 h-4 w-4 cursor-pointer accent-gray-900"
            />
            <label htmlFor="consent" className="text-xs leading-5 text-gray-500">
              I agree to TechnoTrend Platforms processing my data to respond to this inquiry. No data is stored beyond what is needed to reply.
            </label>
          </div>

          <div className="flex items-center justify-between">
            <p className="max-w-xs text-xs text-gray-400">
              Fields marked * are required.
            </p>
            <button
              type="submit"
              disabled={!agreed || status === "loading"}
              className="rounded-full bg-gray-900 px-6 py-3 text-sm text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Send inquiry"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}