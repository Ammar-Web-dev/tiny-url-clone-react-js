import Navbar from "../components/Navbar";

function Dashboard() {
  const stats = [
    {
      title: "Total Links",
      value: "124",
    },
    {
      title: "Total Clicks",
      value: "8,932",
    },
    {
      title: "Active Links",
      value: "118",
    },
    {
      title: "QR Codes",
      value: "36",
    },
  ];

  const recentLinks = [
    {
      original: "https://google.com",
      short: "tiny.ly/abc123",
      clicks: 245,
    },
    {
      original: "https://github.com",
      short: "tiny.ly/dev45",
      clicks: 168,
    },
    {
      original: "https://youtube.com",
      short: "tiny.ly/yt987",
      clicks: 520,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Welcome */}
        <div className="mb-10 rounded-2xl bg-blue-600 p-8 text-white">
          <h1 className="text-4xl font-bold">
            Welcome Back 👋
          </h1>

          <p className="mt-2 text-blue-100">
            Manage your links and track their performance.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-6 shadow-md"
            >
              <p className="text-slate-500">
                {item.title}
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                {item.value}
              </h2>
            </div>
          ))}

        </div>

        {/* Recent Links */}
        <div className="mt-10 rounded-2xl bg-white p-6 shadow-md">

          <h2 className="mb-6 text-2xl font-bold">
            Recent Links
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>
                <tr className="border-b">
                  <th className="py-3 text-left">Original URL</th>
                  <th className="py-3 text-left">Short URL</th>
                  <th className="py-3 text-left">Clicks</th>
                </tr>
              </thead>

              <tbody>

                {recentLinks.map((link) => (
                  <tr
                    key={link.short}
                    className="border-b last:border-none"
                  >
                    <td className="py-4 text-slate-600">
                      {link.original}
                    </td>

                    <td className="py-4 font-medium text-blue-600">
                      {link.short}
                    </td>

                    <td className="py-4">
                      {link.clicks}
                    </td>
                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;