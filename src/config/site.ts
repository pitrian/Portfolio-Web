/**
 * Chỉnh toàn bộ nội dung cá nhân tại đây.
 * CV: copy file PDF vào thư mục `public/` và khớp với `resume.pdfPath` (mặc định `/cv.pdf`).
 */
import { accountAbstractionArticle } from "@/content/account-abstraction-article";

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
  /**
   * Chỉ vài repo bạn muốn khoe — sửa title/description cho đúng impact;
   * href = URL repo (https://github.com/user/repo).
   * tags: optional, hiển thị chip nhỏ dưới mô tả.
   */
  projects: [
    {
      title: "Sentinel X — AI Security for X Layer",
      description: "Built an AI-powered threat detection and automated protection system to safeguard assets. Developed full-stack logic using JavaScript and Node.js.",
      href: "https://github.com/pitrian/Build-X-Hackathon-Arena",
      tags: ["JavaScript", "AI", "X Layer", "Security"],
    },
    {
      title: "Decentralized Savings Protocol",
      description: "Architected a DeFi time-deposit system using NFTs for position tracking. Developed core Smart Contracts in Solidity and the Frontend with TypeScript.",
      href: "https://github.com/pitrian/AC_NFT_Based_Fixed-Term_Savings_System",
      tags: ["Solidity", "TypeScript", "Hardhat", "DeFi"],
    },
    {
      title: "Solana Guardian AI Agent",
      description: "Engineered a natural language agent for token safety analysis and swaps. Integrated Bitget Wallet API and developed core logic using Python.",
      href: "https://github.com/pitrian/solana-guardian-ai-agent",
      tags: ["Python", "Solana", "AI Agent", "Blockchain"],
    },
  ],
  posts: [
    {
      title: "Mastering Account Abstraction: Beyond the Seed Phrase",
      description:
        "Exploring ERC-4337 and how Account Abstraction redefines security and UX in Web3 — technical flow, advanced modules, and AI-assisted delivery.",
      date: "May 15, 2026",
      slug: "mastering-account-abstraction",
      tags: [
        "Blockchain",
        "Account Abstraction",
        "ERC-4337",
        "Smart Contract",
        "Web3 UX",
        "Security",
      ],
      ...accountAbstractionArticle,
    },
    {
      title: "Smart Contract Security Best Practices: Beyond Audits",
      description: "Comprehensive guide to secure Smart Contract development, from architecture to testing, covering key security patterns and best practices.",
      date: "2026-05-05",
      slug: "smart-contract-security-best-practices",
      tags: ["Blockchain", "Smart Contract", "Security", "Audits"],
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
    lead: "Junior Blockchain Developer focused on building secure, efficient, and audited on-chain ecosystems.",
    paragraphs: [
      "Hi, I'm Minh Chung — a developer passionate about blockchain security and decentralized finance. I specialize in writing robust Smart Contracts and building intuitive dApp interfaces that bridge the gap between complex protocols and users.",
    "Beyond coding, I'm deeply involved in the security community, frequently participating in CTFs and auditing codebases to stay ahead of emerging vulnerabilities. I value clean architecture, rigorous testing, and the 'don't trust, verify' ethos of Web3.",
    ],
    focus: ["Solidity & EVM", "Security mindset", "dApp frontends (React)", "Audits & reviews","DeFi Architecture", 
    "Full-stack dApp (React/Next.js)", "AI Integration", "Blockchain Infrastructure"],
    contactEmail: "", // optional: "Chungngonbkqna@gmail.com"
  },
} as const;
