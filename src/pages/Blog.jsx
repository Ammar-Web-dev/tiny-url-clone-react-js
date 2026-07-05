const posts = [
  {
    title: "5 Ways to Optimize Your Shortened Links",
    date: "June 2026",
    excerpt:
      "Learn how to structure and track your links for better click-through rates.",
  },
  {
    title: "Introducing Real-Time Analytics",
    date: "May 2026",
    excerpt:
      "Our new analytics dashboard gives you instant insight into link performance.",
  },
  {
    title: "Why Link Security Matters",
    date: "April 2026",
    excerpt:
      "A look at how we keep your shortened URLs safe from abuse and spam.",
  },
];

function Blog() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-4xl font-extrabold text-slate-900">Blog</h1>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.title}
            className="rounded-xl border border-slate-200 p-6 shadow-sm"
          >
            <p className="text-sm text-blue-500">{post.date}</p>
            <h2 className="mt-2 text-xl font-semibold text-slate-900">
              {post.title}
            </h2>
            <p className="mt-3 text-slate-600">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Blog;