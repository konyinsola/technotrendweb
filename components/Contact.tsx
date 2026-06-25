export default function Contact() {
  return (
    <section className=" px-6 py-12">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <div className="inline-block border border-gray-400 text-gray-500 rounded-full px-4 py-1 text-xs uppercase tracking-widest mb-6">
            Contact
          </div>

          <h2 className="text-4xl font-extrabold text-gray-900 leading-snug mb-6">
            Let's talk about <br />
            what you need <br />
            to build.
          </h2>

          <p className="text-gray-500 text-sm leading-7 mb-10">
            Whether you're exploring a new product, integrating telecom
            services, or need a technology partner — fill in the form and we'll
            get back to you within one business day.
          </p>

          {/* Info Cards */}
          <div className="space-y-3">
            <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-2xl px-5 py-4">
              <span className="text-gray-400 mt-0.5">📍</span>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                  Address
                </p>
                <p className="text-sm text-gray-700">
                  88, Norman Williams Street, Ikoyi, Lagos, Nigeria
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-2xl px-5 py-4">
              <span className="text-gray-400 mt-0.5">✉️</span>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                  Email
                </p>
                <p className="text-sm text-gray-700">info@technotrendng.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-2xl px-5 py-4">
              <span className="text-gray-400 mt-0.5">📞</span>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                  Phone
                </p>
                <p className="text-sm text-gray-700">+234 01-6323541</p>
              </div>
            </div>
          </div>

          {/* Response time */}
          <div className="flex items-center gap-2 mt-6">
            <span className="w-2 h-2 rounded-full bg-[#aaee00]"></span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">
              We respond within 1 business day
            </p>
          </div>
        </div>

        {/* Right - Form */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-xs text-gray-600 mb-1 block">
                Full name*
              </label>
              <input
                type="text"
                placeholder="Ada Okonkwo"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-gray-400"
              />
            </div>
            <div>
              <label className="text-xs text-gray-600 mb-1 block">
                Email address*
              </label>
              <input
                type="email"
                placeholder="ada@company.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-gray-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-xs text-gray-600 mb-1 block">
                Phone number
              </label>
              <input
                type="tel"
                placeholder="+234 801 000 0000"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-gray-400"
              />
            </div>
            <div>
              <label className="text-xs text-gray-600 mb-1 block">
                Company / Organisation
              </label>
              <input
                type="text"
                placeholder="Your company name"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-gray-400"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="text-xs text-gray-600 mb-1 block">
              What are you interested in?*
            </label>
            <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-400 outline-none focus:border-gray-400">
              <option value="">Select an option</option>
              <option>Telecom Services</option>
              <option>Digital Products</option>
              <option>AI & Automation</option>
              <option>Technology Integration</option>
              <option>Health IT</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="text-xs text-gray-600 mb-1 block">
              Tell us about your project*
            </label>
            <textarea
              rows={5}
              placeholder="Describe what you're trying to build, the problem you're solving, or any questions you have..."
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-gray-400 resize-none"
            />
          </div>

          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-400">
              Fields marked * are required.
            </p>
            <button className="bg-gray-900 text-white text-sm px-6 py-3 rounded-full hover:bg-gray-700 transition">
              Send inquiry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
