/**
 * Chỉnh toàn bộ nội dung cá nhân tại đây.
 * CV: copy file PDF vào thư mục `public/` và khớp với `resume.pdfPath` (mặc định `/cv.pdf`).
 */
export const siteConfig = {
  meta: {
    title: "Portfolio | Ngô Minh Chung",
    description:
      "Smart Contract Developer & Auditor — portfolio, projects, and resume.",
  },
  brand: {
    name: "Ngô Minh Chung",
    logoTag: "< Cren />",
  },
  hero: {
    prompt: "$ Hello, I'm",
    roleHighlight: "Smart Contract Developer",
    roleRest: "& Auditor",
    bio: "I'm a Smart Contract Developer with a passion for building decentralized applications.",
    primaryCta: { label: "View Projects", href: "/#projects" },
    secondaryCta: { label: "Read Blog", href: "/#blog" },
    tertiaryCta: { label: "Resume / CV", href: "/resume" },
  },
  codeCard: {
    name: "Ngô Minh Chung",
    role: "Smart Contract Developer",
    skills: ["Solidity", "Hardhat", "TypeScript", "React", "Node.js"],
    passion: "Building decentralized applications and auditing smart contracts",
  },
  /** Home = /#top — hoạt động từ mọi trang */
  nav: [
    { label: "Home", href: "/#top" },
    { label: "Blog", href: "/#blog" },
    { label: "Projects", href: "/#projects" },
    { label: "Resume", href: "/resume" },
    { label: "About", href: "/#about" },
  ] as const,
  social: {
    github: "https://github.com/pitrian",
    linkedin: "https://www.linkedin.com/in/minh-chung-5bab1338b/",
    x: "https://x.com/ng131261",
  },
  featured: {
    icon: "👨‍💻",
    title: "Featured work",
    description:
      "Highlight your strongest project here — audits, protocols, tooling, or open source you want visitors to see first.",
    cta: { label: "View details →", href: "/#projects" },
  },
  posts: [
    {
      date: "May 1, 2024",
      title: "Sample post: a topic you care about",
      href: "#",
    },
    {
      date: "Apr 15, 2024",
      title: "Second sample — replace with a real article",
      href: "#",
    },
  ],
  resume: {
    /** File trong `public/`, ví dụ `public/cv.pdf` → `/cv.pdf` */
    pdfPath: "/cv.pdf",
    title: "Resume",
    headline: "Download or view my CV as PDF.",
    hint: "You can download PDF at public/cv.pdf.",
  },
  about: {
    id: "about",
    title: "About",
    lead: "Smart contract engineering with a focus on secure, maintainable on-chain systems.",
    paragraphs: [
      "I build and review Solidity code, work with modern tooling (Hardhat, Foundry-friendly workflows, TypeScript), and care about clear architecture and test coverage.",
      "Outside of client work, I enjoy learning new EIPs, contributing to ideas in DeFi and infra, and shipping small tools that make development smoother.",
    ],
    focus: ["Solidity & EVM", "Security mindset", "dApp frontends (React)", "Audits & reviews"],
    contactEmail: "", // optional: "Chungngonbkqna@gmail.com"
  },
} as const;
