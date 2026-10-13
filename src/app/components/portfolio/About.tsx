import React from "react";

/* ---------- Content ---------- */
const PROFILE = {
  label: "About me",
  heading: "I build fast, reliable web applications from the interface to the database.",
  journey:
    "I'm Saifur Rahman, a full-stack developer. I started with HTML, CSS and JavaScript, then grew into React, Next.js and Node.js to build complete products.",
  work:
    "I enjoy clean interfaces, well-structured backends, secure APIs and performance tuning.",
  outside:
    "Outside of work, I follow new technology, travel and take photos.",
  stack: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "PostgreSQL"],
 
};

const WORK = [
  {
    glyph: "</>",
    title: "Frontend",
    text: "Responsive, accessible interfaces that feel quick on any device.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    glyph: "{ }",
    title: "Backend",
    text: "Server-side logic and RESTful APIs that are simple to maintain.",
    tags: ["Node.js", "Express"],
  },
  {
    glyph: "DB",
    title: "Database",
    text: "Efficient data models and queries that scale with the product.",
    tags: ["MongoDB", "PostgreSQL", "Prisma"],
  },
  {
    glyph: "API",
    title: "Auth and validation",
    text: "Secure sign-in, tested endpoints and validated request data.",
    tags: ["JWT", "Firebase", "Zod"],
  },
];

/* ---------- Shared classes ---------- */
const heading = "font-['Bricolage_Grotesque',system-ui,sans-serif]";
const body = "font-['Inter',system-ui,sans-serif]";

const chip =
  "rounded-md border border-zinc-800 bg-zinc-900/60 px-2.5 py-1 text-[13px] text-zinc-300";

/* ---------- Component ---------- */
export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className={`${body} relative overflow-hidden bg-zinc-950 px-6 py-20 text-base text-zinc-400 sm:px-10 md:py-28 lg:px-16`}
    >
      {/* Fonts. You can move this <link> into index.html instead. */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700&family=Inter:wght@400;500;600&display=swap');`}</style>

      {/* Soft glow behind the heading */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-emerald-500/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        {/* Left: short introduction */}
        <div>
          <p className="mb-4 flex items-center gap-3 text-4xl font-medium text-emerald-400">
            <span className="h-px w-8 bg-emerald-400/60" aria-hidden="true" />
            {PROFILE.label}
          </p>

          <h2
            id="about-title"
            className={`${heading} text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl`}
          >
            {PROFILE.heading}
          </h2>

          <div className="mt-6 max-w-[52ch] space-y-4 leading-7">
            <p>{PROFILE.journey}</p>
            <p>{PROFILE.work}</p>
            <p>{PROFILE.outside}</p>
          </div>

          <dl className="mt-10 space-y-6 border-t border-zinc-800 pt-8">
            <div>
              <dt className="mb-3 text-sm font-medium text-zinc-200">Tech I use</dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {PROFILE.stack.map((s) => (
                    <li key={s} className={chip}>
                      {s}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>

            
          </dl>
        </div>

        {/* Right: what I do, 2 x 2 cards */}
        <aside aria-labelledby="work-title">
          <h3
            id="work-title"
            className={`${heading} text-2xl font-bold tracking-tight text-white`}
          >
            What I do
          </h3>
          <p className="mb-6 mt-1.5 text-sm  text-zinc-500">
            The parts of a web product I work on from start to finish.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {WORK.map((item) => (
              <article
                key={item.title}
                className="group flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors duration-200 hover:border-emerald-500/40 hover:bg-zinc-900 motion-reduce:transition-none"
              >
                <span
                  aria-hidden="true"
                  className="mb-5 grid h-10 w-10 place-items-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 font-mono text-xs font-semibold text-emerald-400"
                >
                  {item.glyph}
                </span>

                <h4 className={`${heading} text-lg font-semibold text-white`}>
                  {item.title}
                </h4>
                <p className="mt-2 flex-1 text-sm leading-6 text-zinc-400">
                  {item.text}
                </p>

                <ul className="mt-5 flex flex-wrap gap-1.5 border-t border-zinc-800 pt-4">
                  {item.tags.map((t) => (
                    <li key={t} className="text-xs text-zinc-500">
                      {t}
                      <span className="ml-1.5 text-zinc-700 last:hidden" aria-hidden="true">
                        /
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}