import {
  Link2,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

function Features() {
  const features = [
    {
      icon: <Link2 size={30} />,
      title: "Smart URL Shortening",
      description:
        "Create short, clean and memorable links in just one click.",
    },
    {
      icon: <BarChart3 size={30} />,
      title: "Real-Time Analytics",
      description:
        "Track clicks, traffic sources and user engagement with ease.",
    },
    {
      icon: <ShieldCheck size={30} />,
      title: "Secure & Reliable",
      description:
        "Your links are protected with enterprise-grade security.",
    },
  ];

  return (
    <section
      id="features"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Why Choose Us?
          </h2>

          <p className="mt-4 text-slate-600">
            Everything you need to manage and grow your links.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 inline-flex rounded-xl bg-blue-100 p-4 text-blue-700">
                {feature.icon}
              </div>

              <h3 className="mb-3 text-xl font-bold">
                {feature.title}
              </h3>

              <p className="leading-7 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Features;