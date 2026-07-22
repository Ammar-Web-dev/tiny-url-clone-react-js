import { useState } from "react";
import axios from "axios";

function Shortener() {
  const [longUrl, setLongUrl] = useState("");
  const [shortURL, setShortURL] = useState("");
  const [loading, setLoading] = useState(false);

  const BASE_URL = "https://tiny-url-backend-production-86c1.up.railway.app";

  const handleShorten = async () => {
    if (!longUrl.trim()) {
      alert("Please enter a URL");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(`${BASE_URL}/save`, {
        longUrl,
      });

      if (res.data.ok) {
        setShortURL(res.data.shortURL);
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="-mt-10 px-6">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white p-8 shadow-xl">

        <h2 className="mb-6 text-center text-3xl font-bold text-slate-900">
          Shorten Your Long URL
        </h2>

        <div className="flex flex-col gap-4 lg:flex-row">
          <input
            type="text"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            placeholder="Paste your long URL here..."
            className="flex-1 rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
          />

          <button
            onClick={handleShorten}
            disabled={loading}
            className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700"
          >
            {loading ? "Shortening..." : "Shorten URL"}
          </button>
        </div>

        {shortURL && (
          <div className="mt-6 rounded-lg bg-slate-100 p-4">
            <p className="font-semibold">Short URL</p>

            <a
              href={shortURL}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 break-all hover:underline"
            >
              {shortURL}
            </a>
          </div>
        )}

        <p className="mt-4 text-center text-sm text-slate-500">
          Fast, secure, and reliable URL shortening.
        </p>

      </div>
    </section>
  );
}

export default Shortener;