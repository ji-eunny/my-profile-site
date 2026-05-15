import { profile } from '../data/portfolioData'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-950 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-12">
          <p className="text-sm text-blue-400 font-semibold tracking-wide uppercase mb-2">
            연락처
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Contact
          </h2>
        </div>

        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          함께 일하고 싶으시다면 편하게 연락해 주세요.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
          {/* Phone */}
          <a
            href={`tel:${profile.phone}`}
            className="flex flex-col items-center gap-3 bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-blue-600 hover:bg-gray-800 transition-all duration-300 group"
          >
            <svg className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 4.493a1 1 0 00.502.756l2.73 1.365a1 1 0 001.006-.193c.572-.635 1.34-1.26 2.16-1.867A9.007 9.007 0 0121 9c0 4.418-4.03 8-9 8s-9-3.582-9-8z" />
            </svg>
            <div>
              <p className="text-white font-semibold mb-1">전화</p>
              <p className="text-gray-400 text-sm">{profile.phone}</p>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${profile.email}`}
            className="flex flex-col items-center gap-3 bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-blue-600 hover:bg-gray-800 transition-all duration-300 group"
          >
            <svg className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div>
              <p className="text-white font-semibold mb-1">이메일</p>
              <p className="text-gray-400 text-sm">{profile.email}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
