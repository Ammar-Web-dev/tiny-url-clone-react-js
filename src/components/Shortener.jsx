function Shortener() {
  return (
    <section className="-mt-10 px-6">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white p-8 shadow-xl">

        <h2 className="mb-6 text-center text-3xl font-bold text-slate-900">
          Shorten Your Long URL
        </h2>

        <div className="flex flex-col gap-4 lg:flex-row">

          <input
            type="text"
            placeholder="Paste your long URL here..."
            className="flex-1 rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-600"
          />

          <button
            className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-blue-700"
          >
            Shorten URL
          </button>

        </div>

        <p className="mt-4 text-center text-sm text-slate-500">
          Fast, secure, and reliable URL shortening.
        </p>

      </div>
    </section>
  );
}

export default Shortener;