import { ArrowUpRight, Globe2, Target } from "lucide-react";

const About = ({ text }) => (
  <section id="about" className="scroll-mt-24 bg-black py-20">
    <div className="w-full px-4 sm:px-6 lg:px-12">
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#9CAF88]">
          {text.eyebrow}
        </p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          {text.heading} <span className="text-[#9CAF88]">E-Commerce</span>
        </h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="rounded-3xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-6 sm:p-8 lg:col-span-3">
          <h3 className="mb-4 text-xl font-bold text-white">{text.profile}</h3>
          <p className="leading-relaxed text-gray-300">
            {text.first}
          </p>
          <p className="mt-4 leading-relaxed text-gray-300">
            {text.second}
          </p>
        </div>
        <div className="flex flex-col gap-6 lg:col-span-2">
          <div className="flex-1 rounded-3xl border border-[#9CAF88]/30 bg-[#9CAF88]/10 p-6 sm:p-8">
            <Target className="mb-4 h-6 w-6 text-[#9CAF88]" aria-hidden="true" />
            <h3 className="mb-3 text-xl font-bold text-white">
              {text.career}
            </h3>
            <p className="text-sm leading-relaxed text-gray-300">
              {text.goal}
            </p>
            <a href="#contact" className="mt-5 inline-flex items-center gap-2 font-semibold text-[#9CAF88] hover:text-white">
              {text.contact} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <Globe2 className="h-6 w-6 text-[#9CAF88]" aria-hidden="true" />
              <h3 className="text-xl font-bold text-white">{text.languages}</h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-300">
              {text.languageDetails}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
