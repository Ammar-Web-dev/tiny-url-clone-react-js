const features = [
  {
    title: "Instant Link Shortening",
    desc: "Paste any long URL and get a clean, shareable short link in seconds.",
  },
  {
    title: "Real-Time Analytics",
    desc: "Track clicks, locations, devices, and referrers as they happen.",
  },
  {
    title: "Custom Branded Links",
    desc: "Create memorable, branded short links for your business or personal use.",
  },
  {
    title: "Secure & Reliable",
    desc: "Every link is monitored for spam and abuse, keeping your audience safe.",
  },
  {
    title: "One Dashboard, Full Control",
    desc: "Manage, edit, and organize all your links from a single modern dashboard.",
  },
  {
    title: "Team Collaboration",
    desc: "Invite teammates and manage links together with shared workspaces.",
  },
];

function Features() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-slate-900">Features</h1>
        <p className="mt-4 text-slate-600">
          Everything you need to manage, track, and grow your links —
          all in one place.
        </p>
      </div>

      <div className="mt-12 grid gap-8 text-left sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-xl border border-slate-200 p-6 shadow-sm transition hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              {f.title}
            </h3>
            <p className="mt-2 text-slate-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;