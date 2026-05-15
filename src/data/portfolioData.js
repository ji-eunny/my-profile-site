export const profile = {
  nameKo: '김지은',
  nameEn: 'Kim Ji-eun',
  role: 'Frontend Developer',
  bio: [
    '사용자 경험을 중심으로 생각하는 프론트엔드 개발자입니다.',
    'React와 모던 CSS를 활용해 성능과 접근성을 모두 갖춘 웹 인터페이스를 만듭니다.',
    '아름다운 코드와 아름다운 UI, 둘 다 포기하지 않습니다.',
  ],
  phone: '010-1111-1111',
  email: 'ccomo7071@gmail.com',
  github: 'https://github.com/kimjieun',
};

export const skills = [
  { category: 'Languages', items: ['HTML5', 'CSS3', 'JavaScript (ES6+)'] },
  { category: 'Frameworks', items: ['React', 'Next.js', 'Vue.js'] },
  { category: 'Styling', items: ['Tailwind CSS', 'Styled-Components', 'SCSS/Sass'] },
  { category: 'Tools', items: ['Git', 'Vite', 'Webpack', 'Figma', 'npm / pnpm'] },
  { category: 'Testing', items: ['Jest', 'React Testing Library'] },
  { category: 'Etc', items: ['REST API', 'GraphQL', 'Storybook', 'Vercel'] },
];

export const projects = [
  {
    id: 1,
    title: 'Foasis UI',
    description:
      '컴포넌트 기반 UI 라이브러리. Storybook을 활용한 문서화와 자체 디자인 토큰 시스템을 갖추고 있습니다.',
    tags: ['React', 'Storybook', 'Design System'],
    link: '#',
    color: 'from-blue-600 to-indigo-600',
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    description:
      'OpenWeather API를 연동한 실시간 날씨 대시보드. 위치 기반 검색과 주간 예보 차트를 제공합니다.',
    tags: ['React', 'Chart.js', 'REST API'],
    link: '#',
    color: 'from-cyan-600 to-blue-600',
  },
  {
    id: 3,
    title: 'Portfolio Site',
    description:
      'Vite + React + Tailwind CSS로 구성한 개인 포트폴리오 사이트. 반응형 레이아웃과 부드러운 애니메이션이 특징입니다.',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    link: '#',
    color: 'from-indigo-600 to-purple-600',
  },
];
