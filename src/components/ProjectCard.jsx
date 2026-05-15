export default function ProjectCard({ project }) {
  return (
    <article className={`bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-600 hover:scale-105 transition-all duration-300 flex flex-col group`}>
      <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-white font-bold text-xl mb-2">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300"
        >
          보러가기 →
        </a>
      </div>
    </article>
  )
}
