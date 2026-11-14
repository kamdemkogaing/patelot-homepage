import { ArrowUpRight, Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Print Equipment GmbH",
    location: "Ottersweier",
    period: "2024 – heute",
    tools: ["Shopware 6", "SelectLine ERP", "ManiacSeller", "NOSTO", "SEO / CRO"],
    link: "https://shop.printequipment.de/",
  },
  {
    company: "IONOS SE",
    location: "Karlsruhe",
    period: "2014 – 2024",
    tools: ["React", "Next.js", "JavaScript / TypeScript", "Cypress", "Selenium"],
    link: "https://www.ionos.de/",
  },
  {
    company: "Götz Auktionshaus GmbH",
    location: "Oberkirch",
    period: "2013 – 2014",
    tools: ["Microsoft SQL Server", "CMS-Orchidee", "HTML / CSS", "Photoshop", "STAMPS 2.0"],
    link: "https://www.goetz-auktion.de/",
  },
  {
    company: "Hochschule Karlsruhe",
    period: "2012 – 2013",
    tools: ["IT-Support", "Technische Dokumentation"],
  },
  {
    company: "IONOS",
    period: "2008 – 2012",
    link: "https://www.ionos.de/",
  },
];

const Experience = ({ text }) => (
  <section id="experience" className="scroll-mt-24 bg-slate-900 pb-20">
    <div className="w-full px-4 sm:px-6 lg:px-12">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#9CAF88]">
        {text.eyebrow}
      </p>
      <h2 className="mb-10 text-3xl font-bold text-white sm:text-4xl">
        {text.heading}
      </h2>
      <ol className="relative space-y-6 border-l border-[#9CAF88]/30 pl-6 sm:pl-10">
        {experiences.map((experience, index) => (
          <li key={`${experience.company}-${experience.period}`} className="relative">
            <span className="absolute -left-[31px] top-8 h-3 w-3 rounded-full border-2 border-[#9CAF88] bg-slate-900 sm:-left-[47px]" aria-hidden="true" />
            <article className="rounded-3xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-6 sm:p-8">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#9CAF88]/10 px-3 py-1 text-sm font-semibold text-[#b8cba3]">
                  <Briefcase className="h-4 w-4" aria-hidden="true" />
                  {experience.period.replace("heute", text.present)}
                </span>
                {experience.link && (
                  <a href={experience.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-[#b8cba3] hover:text-white">
                    {text.more} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
              </div>
              <h3 className="text-xl font-bold text-white">{text.positions[index]}</h3>
              <p className="mt-1 text-[#b8cba3]">
                {experience.company}{experience.location && ` · ${experience.location}`}
              </p>
              {text.descriptions[index] && <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-300">{text.descriptions[index]}</p>}
              {experience.tools && (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {experience.tools.map((tool) => (
                    <li key={tool} className="rounded-full border border-slate-600 px-3 py-1 text-xs text-gray-300">{tool === "Technische Dokumentation" ? text.documentation : tool}</li>
                  ))}
                </ul>
              )}
            </article>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
