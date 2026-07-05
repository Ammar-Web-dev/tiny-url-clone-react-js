const faqs = [
  {
    q: "What is TinyURL Clone?",
    a: "It's a link management platform that lets you shorten, track, and organize your URLs from a single modern dashboard.",
  },
  {
    q: "Is it free to use?",
    a: "Yes, our free plan lets you shorten unlimited links with basic analytics included.",
  },
  {
    q: "Can I track how many people clicked my link?",
    a: "Absolutely. Every shortened link comes with real-time analytics — clicks, locations, and devices.",
  },
  {
    q: "Do you offer custom branded links?",
    a: "Yes, Pro and Business plans let you create custom domains and branded short links.",
  },
  {
    q: "Is my data safe?",
    a: "Yes, we never sell your data and all links are monitored for spam and abuse.",
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Yes, you can upgrade, downgrade, or cancel your plan at any time from your dashboard.",
  },
];

function FAQ() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-slate-900">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-slate-600">
          Got questions? We've got answers. If you don't find what you're
          looking for, feel free to contact us.
        </p>
      </div>

      <div className="mt-12 space-y-6">
        {faqs.map((item) => (
          <div
            key={item.q}
            className="rounded-xl border border-slate-200 p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              {item.q}
            </h3>
            <p className="mt-2 leading-7 text-slate-600">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;