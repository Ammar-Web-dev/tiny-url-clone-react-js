const plans = [
  { name: "Free", price: "$0", features: ["Unlimited short links", "Basic analytics"] },
  { name: "Pro", price: "$9/mo", features: ["Custom domains", "Advanced analytics", "Priority support"] },
  { name: "Business", price: "$29/mo", features: ["Team accounts", "API access", "Dedicated support"] },
];

function Pricing() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-4xl font-extrabold text-slate-900">Pricing</h1>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="rounded-xl border border-slate-200 p-8 text-center shadow-sm"
          >
            <h2 className="text-xl font-semibold text-slate-900">{plan.name}</h2>
            <p className="mt-4 text-3xl font-bold text-blue-500">{plan.price}</p>
            <ul className="mt-6 space-y-2 text-slate-600">
              {plan.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;