import { skills } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-950 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-sm text-blue-400 font-semibold tracking-wide uppercase mb-2">
            기술 스택
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-blue-600/50 transition-colors duration-300"
            >
              <h3 className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-4">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="inline-block bg-blue-900/30 text-blue-300 text-sm px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
