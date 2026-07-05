const faqs = [
  {
    q: "How do I shorten a URL?",
    a: "Paste your long link into the dashboard input and click 'Shorten' — it's instant.",
  },
  {
    q: "Can I track clicks on my links?",
    a: "Yes, every link comes with real-time analytics including clicks, location, and device.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes, our free plan includes unlimited link shortening with basic analytics.",
  },
];

function HelpCenter() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-4xl font-extrabold text-slate-900">Help Center</h1>
      <div className="mt-10 space-y-6">
        {faqs.map((item) => (
          <div key={item.q} className="border-b border-slate-200 pb-5">
            <h3 className="font-semibold text-slate-900">{item.q}</h3>
            <p className="mt-2 text-slate-600">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HelpCenter;