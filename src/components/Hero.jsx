import { profile } from '../data/portfolioData'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 py-20 bg-gray-950 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-6 w-full animate-fade-in">
        <p className="text-sm md:text-base text-blue-400 font-semibold tracking-wide uppercase mb-4">
          안녕하세요, 저는
        </p>

        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent block mb-2">
          {profile.nameKo}
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          {profile.nameEn}
        </h2>

        <p className="text-2xl md:text-3xl text-indigo-400 font-semibold mb-8">
          {profile.role}
        </p>

        <div className="max-w-2xl mb-8">
          {profile.bio.map((line, index) => (
            <p key={index} className="text-gray-400 text-base md:text-lg leading-relaxed mb-3">
              {line}
            </p>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            연락하기
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 hover:border-blue-600 text-gray-300 hover:text-blue-400 font-semibold rounded-lg transition-colors duration-300"
          >
            프로젝트 보기
          </a>
        </div>

        <div className="flex justify-center animate-bounce">
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
