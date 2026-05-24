import { title } from "process";

export const personalInfo = {
  name: "Venugopal Bedar",
  title: "Sophomore at IIT Kharagpur",
  tagline: "Exploring technologies.",
  bio: "I'm a second year undergraduate at IIT Kharagpur, passionate about building softwares, startups and exploring new technologies. I have a strong foundation in data structures and algorithms, and I'm proficient in languages like Python, JavaScript, and C++. With experience in full-stack development, I've built projects using React, Node.js, and various databases. I'm always eager to learn and take on new challenges.",
  bio2: "Currently pursuing a B.S in Mathematics and Computing.",
  location: "Hubli, Karnataka, India",
  email: "bedarvenugopal@gmail.com",
  github: "https://github.com/venugopalbedar231/",
  linkedin: "https://www.linkedin.com/in/venugopal-bedar-180608282/",
  twitter: "https://twitter.com",
  resume: "/resume.pdf",
};

export const stats = [
  { value: "4+", label: "Projects Built", icon: "Rocket" },
  { value: "1+", label: "Years Experience", icon: "Calendar" },
  { value: "15+", label: "Technologies", icon: "Code2" },
  { value: "100%", label: "Client Satisfaction", icon: "Star" },
];

export const experiences = [
  {
    role: "Associate",
    company: "Kharagpur Blockchain Society",
    companyLogo: "B",
    companyColor: "green",
    duration: "Jan 2026 – Present",
    location: "Kharagpur, India",
    description:
      "Exploring blockchain concepts, participating in technical initiatives, and engaging in projects and discussions within the campus blockchain community.",
    tags: ["Blockchain", "Web 3.0", "Backend Development", "Bitcoin", "Ethereum"],
    type: "College Society",
  },
  {
    role: "Junior Executive Trainee",
    company: "KodeinKGP : Technology Web 3.0 Society",
    companyLogo: "K",
    companyColor: "light blue",
    duration: "Oct 2025 – Present",
    location: "Kharagpur, India",
    description:
      "Learning and contributing to full-stack development and blockchain projects while collaborating with a student-driven tech community.",
    tags: ["Machine Learning", "Web Development", "Blockchain", "Web 3.0", "AI"],
    type: "College Society",
  },
  {
    role: "Associate Manager",
    company: "Student's Alumni Cell",
    companyLogo: "A",
    companyColor: "grey",
    duration: "Nov 2025 – Present",
    location: "Kharagpur, India",
    description:
      "Supporting alumni engagement initiatives and helping strengthen connections between students and the IIT Kharagpur alumni network.",
    tags: ["Communication", "Networking", "Event Management", "Videography"],
    type: "College Cell",
  },
  {
    role: "GES Intern",
    company: "Entrepreneurship Cell",
    companyLogo: "E",
    companyColor: "white",
    duration: "Nov 2025 – Present",
    location: "Kharagpur, India",
    description:
      "Working on outreach and entrepreneurship initiatives while collaborating with teams to support startup and innovation activities.",
    tags: ["Communication", "Networking", "Event Management", "Videography"],
    type: "College Cell",
  },
];

export const projects = [
  {
    title: "Blog Management System",
    description:
      "Engineered a blog management system using PHP and MySQL with dynamic content rendering from database-driven templates. Implemented infiniten scrolling functionality for seamless content loading, inspired by modern platforms. Designed role-based authentication system enabling authorized users to comment, like, and dislike posts with real-time database updates. ",

    longDescription:
      "Built with Next.js 14 App Router, Prisma ORM, and OpenAI streaming. Features real-time collaboration, custom AI personas, and team billing.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    tags: ["Next.js", "OpenAI", "Prisma", "WebSockets", "Stripe"],
    github: "https://github.com",
    live: "http://venugopal.rf.gd/blog/",
    featured: true,
    color: "#a855f7",
  },
  {
    title: "TokenTrend",
    description:
      "Built an AI-powered cryptocurrency trend prediction platform as part of a hackathon project, developing the complete frontend using **React, Vite, Tailwind CSS, and Recharts**. Integrated **live market data through CoinGecko APIs** to visualize real-time price trends and volume changes. Implemented an interactive dashboard featuring **AI-based UP/DOWN predictions**, confidence indicators, search functionality, dark/light themes, and responsive design. Added **client-side ML inference** with decision-tree visualization to provide explainable predictions and improve transparency. Designed a trading-style UI that transforms complex machine learning outputs into an intuitive and real-time user experience across devices.",
    longDescription:
      "Full-stack application with reputation system, code syntax highlighting, voting, and commenting. Built with Next.js, MongoDB, and Clerk auth.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80",
    tags: ["Next.js", "MongoDB", "Clerk", "TailwindCSS"],
    github: "https://github.com",
    live: "https://kik-intras-team6.vercel.app/",
    featured: true,
    color: "#3b82f6",
  },
  {
    title: "Comment Management System",
    description:
      "Designed and implemented a real-time commenting system for a blog platform with authenticated user-based interactions. Built a database structure associating comments with unique user IDs to ensure personalized and secure data handling. Developed a scalable like/dislike architecture using a separate interaction table to support four user actions: like, dislike, unlike, and undislike. Implemented real-time updates using AJAX and jQuery, eliminating page refreshes and significantly improving user experience. Focused on efficient data management, asynchronous communication, and responsive frontend behavior while handling dynamic user interactions and state changes across the platform.",
    longDescription:
      "Designed and built a complete analytics platform with D3.js charts, real-time WebSocket updates, and a drag-and-drop report builder.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL", "Redis"],
    github: "https://github.com",
    live: "http://venugopal.rf.gd/blog/",
    featured: false,
    color: "#06b6d4",
  },
  {
    title: "Realtime Chat Application",
    description:
      "Developed a real-time room-based chat application with authenticated user access and dynamic communication features. Implemented room creation and shareable links, enabling users to join dedicated chat spaces and interact seamlessly. Built a near real-time messaging system using periodic asynchronous updates, where the chat container independently refreshes every second to fetch and display new messages without reloading the page. Focused on responsive user experience, session-based authentication, and efficient client-server communication for smooth interaction. Gained hands-on experience in asynchronous web technologies, dynamic content rendering, and designing scalable multi-user communication workflows.",
    longDescription:
      "Open-source CLI tool with 800+ GitHub stars. Generates boilerplate with Next.js, Prisma, Stripe, Resend, and ShadCN UI already wired up.",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80",
    tags: ["Node.js", "TypeScript", "CLI", "Open Source"],
    github: "https://github.com",
    live: "http://venugopal.rf.gd/chat/",
    featured: false,
    color: "#ec4899",
  },
];

export const skills = {
  frontend: [
    { name: "React", icon: "⚛️" },
    { name: "Bootstrap", icon: "▲" },
    // { name: "TypeScript", icon: "TS" },
    { name: "Tailwind CSS", icon: "🎨" },
    // { name: "Framer Motion", icon: "✦" },
    // { name: "GSAP", icon: "🟢" },
    { name: "Figma", icon: "🎭" },
  ],
  backend: [
    { name: "Node.js", icon: "🟩" },
    { name: "Express", icon: "⚡" },
    { name: "MySQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    // { name: "Prisma", icon: "◈" },
    // { name: "Redis", icon: "🔴" },
    { name: "PHP", icon: "◉" },
  ],
  aiml: [
    // { name: "OpenAI API", icon: "🤖" },
    // { name: "LangChain", icon: "🦜" },
    // { name: "Pinecone", icon: "🌲" },
    // { name: "HuggingFace", icon: "🤗" },
    { name: "Python", icon: "🐍" },
    // { name: "TensorFlow", icon: "🔷" },
  ],
  tools: [
    { name: "Git", icon: "🌿" },
    // { name: "Docker", icon: "🐳" },
    // { name: "AWS", icon: "☁️" },
    { name: "Vercel", icon: "▲" },
    { name: "GitHub Actions", icon: "⚙️" },
    // { name: "Jira", icon: "📋" },
  ],
};

export const techMarquee = [
  "React", "Bootstrap", "C/C++", "PHP", "MySQL", "Node.js", "Python", 
  "MongoDB",
  "TailwindCSS", "Vercel", "Git",
];

export const workflowSteps = [
  {
    step: "01",
    title: "Discover & Define",
    description:
      "Deep dive into requirements, user needs, and technical constraints. I map out architecture, define success metrics, and create a clear roadmap before writing a single line of code.",
    icon: "Search",
    color: "#a855f7",
  },
  {
    step: "02",
    title: "Build & Iterate",
    description:
      "Ship fast, iterate faster. I build in focused sprints with continuous feedback loops, using modern tooling and best practices to ensure clean, maintainable, and scalable code.",
    icon: "Code2",
    color: "#3b82f6",
  },
  {
    step: "03",
    title: "Deliver & Optimize",
    description:
      "Launch with confidence. I handle deployment, monitoring, and performance optimization — ensuring your product is fast, reliable, and ready to scale from day one.",
    icon: "Rocket",
    color: "#06b6d4",
  },
];
export const certificates = [
  {
    title: "Google Student Ambassador",
    description:
      "Promoted adoption of Google Gemini by conducting campus outreach initiatives and encouraging students to explore AI-powered tools. ",

    longDescription:
      "Promoted adoption of Google Gemini by conducting campus outreach initiatives and encouraging students to explore AI-powered tools.Managed a community group of 50+ students to share updates, resources, and discussions related to AI technologies and Google developer products.",
    image: "/certificates/GSA certificate.png",
    tags: ["Communication", "Networking", "Event Management", "Videography"],
    github: "https://github.com",
    live: "/certificates/GSA certificate.pdf",
    featured: true,
    color: "#a855f7",
  }
]