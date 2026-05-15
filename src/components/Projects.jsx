import { projects } from '../data/portfolioData'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-sm text-blue-400 font-semibold tracking-wide uppercase mb-2">
            포트폴리오
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
