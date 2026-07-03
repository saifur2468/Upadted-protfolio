import React from "react";
import img from "../../../assets/20240504005619_IMG_9625.JPG";

const About = () => {
  return (
    <div className="bg-black text-white">
      <section  id="about"  className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              About <span className="text-emerald-400">Me</span>
            </h2>

            <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
              Get to know who I am, my journey into programming, and what
              inspires me to keep learning and building.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left Side */}
            <div className="flex justify-center">
              <img
                src={img}
                alt="About Me"
                className="rounded-3xl shadow-2xl w-[320px] md:w-[380px] lg:w-[420px] h-[480px] object-cover border-2 border-emerald-400"
              />
            </div>

            {/* Right Side */}
            <div className="space-y-6">
              {/* <h3 className="text-4xl font-bold">
                Hi, I'm{" "}
                <span className="text-emerald-400">
                  Saifur Rahman
                </span>
              </h3> */}

              <p className="text-zinc-300 leading-8">
                My programming journey began with a simple curiosity about how
                websites work. That curiosity quickly turned into a passion,
                and since then I've been continuously learning modern web
                technologies. Starting with HTML, CSS, and JavaScript, I
                gradually moved into React, Node.js, Express.js, and MongoDB
                to build complete full-stack applications.
              </p>

              <p className="text-zinc-300 leading-8">
                I enjoy solving real-world problems through clean, scalable,
                and user-friendly web applications. Writing maintainable code,
                learning new technologies, and collaborating with others are
                the parts of development I enjoy the most.
              </p>

              <p className="text-zinc-300 leading-8">
                Beyond programming, I enjoy exploring new technologies,
                reading tech articles, watching educational content, and
                spending quality time with friends and family.
              </p>

              {/* Info Cards */}
              <div className="grid grid-cols-2 gap-5 pt-4">
                <div className="p-5 rounded-2xl border border-zinc-700 bg-zinc-900 hover:border-emerald-400 transition">
                  <h4 className="font-bold text-lg text-white">
                    Passion
                  </h4>
                  <p className="text-sm text-zinc-400 mt-2">
                    Full Stack Web Development
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-zinc-700 bg-zinc-900 hover:border-emerald-400 transition">
                  <h4 className="font-bold text-lg text-white">
                    Focus
                  </h4>
                  <p className="text-sm text-zinc-400 mt-2">
                    React, Node.js, Next.js, TypeScript, Prisma
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-zinc-700 bg-zinc-900 hover:border-emerald-400 transition">
                  <h4 className="font-bold text-lg text-white">
                    Learning
                  </h4>
                  <p className="text-sm text-zinc-400 mt-2">
                    Always exploring modern technologies
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-zinc-700 bg-zinc-900 hover:border-emerald-400 transition">
                  <h4 className="font-bold text-lg text-white">
                    Goal
                  </h4>
                  <p className="text-sm text-zinc-400 mt-2">
                    Build impactful and scalable products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;