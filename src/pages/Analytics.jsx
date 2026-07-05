function Analytics() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-4xl font-extrabold text-slate-900">Analytics</h1>
      <p className="mt-4 text-slate-600">
        Track every click on your shortened links in real time.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        <div className="rounded-xl bg-slate-900 p-6 text-white">
          <p className="text-sm text-slate-400">Total Clicks</p>
          <p className="mt-2 text-3xl font-bold">12,480</p>
        </div>
        <div className="rounded-xl bg-slate-900 p-6 text-white">
          <p className="text-sm text-slate-400">Active Links</p>
          <p className="mt-2 text-3xl font-bold">342</p>
        </div>
        <div className="rounded-xl bg-slate-900 p-6 text-white">
          <p className="text-sm text-slate-400">Top Country</p>
          <p className="mt-2 text-3xl font-bold">Pakistan</p>
        </div>
      </div>
    </section>
  );
}

export default Analytics;