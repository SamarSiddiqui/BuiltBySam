import projectImg1 from '../assets/Projects/netflixBg.png'
import projectImg2 from '../assets/Projects/spotifyBg.png'
import projectImg3 from '../assets/Projects/appleBg.png'
import projectImg4 from '../assets/Projects/snakeBg.png'
import react from '../assets/tech-icons/react.png'
import redux from '../assets/tech-icons/redux.png'
import tailwind from '../assets/tech-icons/tailwind.png'
import firebase from '../assets/tech-icons/firebase.png'
import javascript from '../assets/tech-icons/js.png'
import css from '../assets/tech-icons/css.png'
import html from '../assets/tech-icons/html.png'
import api from '../assets/tech-icons/api.png'
import json from '../assets/tech-icons/json.webp'
import claudeCertImg from '../assets/certifications/claude_certification.jpg'
import helsinkiCertImg from '../assets/certifications/certificate-elements-of-ai.png'

export const projectData = [
  {
    id: "project1",
    title: "Netflix-GPT",
    category: "AI Movie Discovery & Streaming App",
    year: "2024",
    role: "Full-Stack Architecture & AI Integration",
    projectImg: projectImg1,
    description: 'Step into Netflix-GPT, your AI-powered movie companion! Enjoy personalized film suggestions with GPT, real-time "Airing Today" updates, and trending topics—all fetched seamlessly from the TMDB API. Effortlessly uncover your next favorite movie with intelligent recommendations and live data integration. 🎥✨',
    overview: "Netflix-GPT combines the sleek browsing interface of popular streaming platforms with OpenAI's GPT recommendation engine. Built on React 19 and Redux Toolkit, it manages multi-lingual search, user authentication via Firebase, and real-time movie telemetry through the TMDB REST API.",
    highlights: [
      "AI-driven movie recommendation prompt interface",
      "Real-time TMDB API integration for trending movies & trailers",
      "Redux Store state management for seamless video playback",
      "Firebase Authentication & Secure Deployment"
    ],
    techStack: [react, tailwind, redux, firebase, api],
    techNames: ["React 19", "Tailwind CSS", "Redux Toolkit", "Firebase", "TMDB API"],
    links: {
      liveLink: "https://netflix-gpt3010.web.app/",
      sourceLink: "https://github.com/SamarSiddiqui/NetflixGPT"
    }
  },
  {
    id: "project2",
    title: "Spotify Clone",
    category: "Dynamic Web Audio Player",
    year: "2023",
    role: "Frontend & Custom Audio Player Engine",
    projectImg: projectImg2,
    description: "Immerse yourself in a Spotify-inspired clone that brings music to life with sleek design and intuitive functionality. Powered by JSON, it dynamically fetches and manages song data to enhance user experience. Features include seamless navigation, real-time song tracking, dynamic volume control, and a captivating like button animation. 🎶✨",
    overview: "A custom-engineered web audio player built with vanilla JavaScript, HTML5 Audio API, and CSS3 animations. Features dynamic playlist loading from structured JSON endpoints, real-time progress scrubbing, custom volume controls, and responsive dark aesthetics.",
    highlights: [
      "Custom HTML5 Audio Engine & custom scrubbing controls",
      "Dynamic JSON track fetching and live queue management",
      "Interactive SVG audio visualizer & micro-animations",
      "Responsive mobile and desktop player layouts"
    ],
    techStack: [html, css, javascript, json],
    techNames: ["JavaScript (ES6+)", "HTML5 Audio", "CSS3", "JSON API"],
    links: {
      liveLink: "https://samarsiddiqui.github.io/Spotify/",
      sourceLink: "https://github.com/SamarSiddiqui/Spotify"
    }
  },
  {
    id: "project3",
    title: "Apple Clone",
    category: "Interactive Product Experience",
    year: "2023",
    role: "UI/UX Micro-Interactions & Layout",
    projectImg: projectImg3,
    description: "Dive into my first project, an Apple-inspired clone that captures the brand's sleek and seamless essence. Featuring a dynamic hamburger dropdown menu and an infinite carousel showcasing Apple movies, this project merges elegant design with intuitive navigation. A polished blend of creativity and functionality awaits! 🍎✨",
    overview: "A pixel-perfect recreation of Apple's flagship product showcase. Designed with fluid CSS flexbox/grid architecture, smooth navigation headers, infinite video carousels, and responsive typography tuned across all screen sizes.",
    highlights: [
      "Apple aesthetic design system & typography scale",
      "Smooth infinite movie carousel slider",
      "Responsive glassmorphism navigation bar & drawer",
      "Custom CSS keyframe transition physics"
    ],
    techStack: [html, css, javascript],
    techNames: ["HTML5", "CSS3 Grid/Flexbox", "JavaScript (ES6+)"],
    links: {
      liveLink: "https://samarsiddiqui.github.io/Apple/",
      sourceLink: "https://github.com/SamarSiddiqui/Apple"
    }
  },
  {
    id: "project4",
    title: "Venom Trail",
    category: "Retro Arcade Game Engine",
    year: "2023",
    role: "Game Physics & DOM Manipulation",
    projectImg: projectImg4,
    description: "Step into the world of classic gaming with my dynamic Snake game! Built with advanced DOM manipulation and JavaScript, it features a growing snake, collision detection, and engaging sound effects. Enjoy an immersive experience with seamless gameplay mechanics and intuitive controls that keep the fun alive. 🐍🎮✨",
    overview: "Venom Trail is a high-performance browser arcade game written in raw JavaScript. It implements a custom game loop using requestAnimationFrame, grid collision detection, progressive speed scaling, score tracking, and sound synthesizers.",
    highlights: [
      "Smooth requestAnimationFrame game loop & grid system",
      "Collision detection & dynamic speed escalation",
      "High score local storage persistence",
      "Interactive audio sound FX and retro game UI"
    ],
    techStack: [html, css, javascript],
    techNames: ["JavaScript Game Loop", "HTML5 Canvas/DOM", "CSS Animations"],
    links: {
      liveLink: "https://samarsiddiqui.github.io/Venom-Trail/",
      sourceLink: "https://github.com/SamarSiddiqui/Venom-Trail"
    }
  },
]

export const hardSkills = ['Next.js', 'React', 'TypeScript', 'Redux', 'GSAP', 'Node.js',
  'Golang', 'System Design', 'MongoDB', 'Postman', 'Firebase', 'Git & Github', 'Figma', 'Docker', 'CI/CD & Deployment', '& more']

export const softSkills = ['Team Collaboration', 'Ownership & Accountability', 'Problem Solving', 'Attention to Detail', 'Adaptability', 'Leadership in Small Teams', 'Commuinication', 'Curiosity & Continuous Learning', 'Time Management', 'Code Reviews']


export const certificationData = [
  {
    id: "cert-1",
    title: "Claude Certified",
    issuer: "Anthropic / Skilljar",
    date: "2026",
    credentialUrl: "https://verify.skilljar.com/c/ahuj7rrragse",
    tags: ["Claude", "Prompt Engineering", "LLMs", "AI Integration"],
    certImg: claudeCertImg
  },
  {
    id: "cert-2",
    title: "Elements of AI",
    issuer: "University of Helsinki & Reaktor",
    date: "2026",
    credentialUrl: "https://certificates.mooc.fi/validate/esgaa9lkzrm",
    tags: ["Artificial Intelligence", "Machine Learning", "Neural Networks", "Data Science"],
    certImg: helsinkiCertImg
  }
];

export const handleDownload = () => {
  const link = document.createElement('a')
  link.href = `${process.env.PUBLIC_URL}/resume.pdf`
  link.download = `Samar's Resume.pdf`
  link.click()
}

