function Contact() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-extrabold text-slate-900">Contact Us</h1>
      <p className="mt-4 text-slate-600">
        Have a question or need help? Fill out the form below and our team
        will get back to you within 24 hours.
      </p>
      <form className="mt-8 space-y-5">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-400"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-400"
        ></textarea>
        <button
          type="button"
          className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;