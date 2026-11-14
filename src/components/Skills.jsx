import { BarChart3, Code2, Layers3, ShoppingCart } from "lucide-react";

const skills = [
  {
    category: "E-Commerce & Systeme",
    icon: ShoppingCart,
    items: ["Shopware 6", "SelectLine ERP", "NOSTO", "Akeneo", "ManiacSeller", "Digitale Vertriebsprozesse"],
  },
  {
    category: "Frontend & Entwicklung",
    icon: Code2,
    items: ["HTML5", "CSS / Tailwind", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Bootstrap"],
  },
  {
    category: "Performance & Marketing",
    icon: BarChart3,
    items: ["SEO / SEA", "CRO", "UX / UI", "Customer Journey", "A/B-Testing", "Web Analytics", "KPI-Reporting"],
  },
  {
    category: "Projektmanagement & Daten",
    icon: Layers3,
    items: ["Agile / Scrum", "Technische Konzeption", "Agentursteuerung", "Prozessoptimierung", "MySQL", "Git", "Figma", "Jira", "Confluence"],
  },
];

const Skills = () => (
  <section id="skills" className="scroll-mt-24 bg-slate-900 py-20">
    <div className="w-full px-4 sm:px-6 lg:px-12">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#9CAF88]">
        Meine Stärken
      </p>
      <h2 className="mb-10 text-3xl font-bold text-white sm:text-4xl">
        Kern<span className="text-[#9CAF88]">kompetenzen</span>
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map(({ category, icon: Icon, items }) => (
          <article key={category} className="rounded-3xl border border-slate-700 bg-slate-800/60 p-6 transition-colors hover:border-[#9CAF88]/60 sm:p-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-2xl bg-[#9CAF88]/15 p-3 text-[#9CAF88]">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-white">{category}</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {items.map((item) => (
                <li key={item} className="rounded-full border border-slate-600 bg-slate-900/70 px-3 py-1.5 text-sm text-gray-200">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
