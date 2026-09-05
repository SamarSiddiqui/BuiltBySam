import zenithImg from '../assets/Projects/zenith_bg_img.png'
import sproutlyImg from '../assets/Projects/sproutlyBg.avif'
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
import claudeMcpCertImg from '../assets/certifications/claude_mcp_certificate.png'
import helsinkiCertImg from '../assets/certifications/certificate-elements-of-ai.png'
import fccBackendCertImg from '../assets/certifications/backend_freecode_certificate.avif'

export const projectData = [
  {
    id: "zenith",
    title: "Zenith",
    category: "Behavioral Consistency & Habit Intelligence",
    categories: ["AI", "FullStack"],
    year: "2025",
    role: "Full-Stack Architecture & Systems Design",
    projectImg: zenithImg,
    description: "Most habit trackers break your momentum: miss a single day, and your streak resets to zero. Zenith is a behavioral consistency system built for real, unpredictable schedules. Instead of all-or-nothing streaks, Zenith calculates a resilient Habit Health Index, maps your actual usable time gaps around work shifts, and automatically auto-scales 45-minute habits into 5-minute micro-sessions when life gets busy — ensuring your momentum never resets to zero.",
    overview: "Traditional habit trackers fail because they demand 24-hour perfection: miss one day, and weeks of hard work reset to zero, triggering guilt and app abandonment. I built Zenith to replace streak anxiety with true behavioral resilience. Zenith calculates your real available energy windows around busy work shifts, detects schedule fatigue before your habits break, and uses a 'Shrink, Don't Skip' system to dynamically adapt full routines into quick micro-sessions on overwhelming days — keeping your habit identity alive without the guilt.",
    highlights: [
      "Dynamic Habit Health Index (0–100%) replacing fragile binary streak resets",
      "Usable Working Window Engine mapping habits inside real available time gaps",
      "'Shrink, Don't Skip' micro-sessions auto-scaling routines during high-fatigue days",
      "Schedule-Tied Root Cause Diagnosis pinpointing contextual triggers for missed habits",
      "Built with Next.js 14, Supabase backend, RAG, and OpenAI integration"
    ],
    techStack: [react, tailwind, api, json],
    techNames: ["Next.js 14", "Supabase", "GSAP", "RAG", "OpenAI API"],
    links: {
      liveLink: "https://zenithf1ow.vercel.app/",
      sourceLink: "https://github.com/SamarSiddiqui/Zenith"
    }
  },
  {
    id: "sproutly",
    title: "Sproutly",
    category: "Smart Urban Plant Care & AI Companion",
    categories: ["AI", "FullStack"],
    year: "2024",
    role: "Full-Stack Architecture & AI Systems",
    projectImg: sproutlyImg,
    description: "Sproutly is your smart balcony & terrace garden companion built for city dwellers. Just log your plants, and Sproutly handles the rest — generating personalized watering and fertilizing schedules, auto-adjusting care plans when it rains, and powering Sproutly AI, a 24/7 expert assistant that knows your garden inside out.",
    overview: "Gardening in the city should be fun, not stressful. I built Sproutly to make urban plant care effortless for anyone running a balcony or terrace garden. Simply log your plants to get a personalized care plan detailing exactly when to water, fertilize, and take care of your greens. Sproutly syncs with live local weather to auto-delay watering after heavy rainfall so you never overwater. Plus, Sproutly AI is always ready to chat — offering instant, tailored advice based on your specific plant collection.",
    highlights: [
      "Personalized watering & fertilizing schedules tailored to your balcony garden",
      "Smart weather sync that auto-adjusts watering schedules after heavy rainfall",
      "Sproutly AI assistant for instant, personalized plant care advice 24/7",
      "Easy plant logging to track growth, health, and care history effortlessly",
      "Built with Next.js 14, Supabase backend, and OpenAI integration"
    ],
    techStack: [react, tailwind, api, json],
    techNames: ["Next.js 14", "Supabase (PostgreSQL)", "GSAP", "OpenAI API"],
    links: {
      liveLink: "https://sproutly-vert.vercel.app/",
      sourceLink: "https://github.com/SamarSiddiqui/Sproutly"
    }
  },
  {
    id: "netflix-gpt",
    title: "Netflix-GPT",
    category: "AI Movie Discovery & Streaming App",
    categories: ["AI"],
    year: "2024",
    role: "Frontend Architecture & AI Integration",
    projectImg: projectImg1,
    description: 'Step into Netflix-GPT, your AI-powered movie companion! Enjoy personalized film suggestions with GPT, real-time "Airing Today" updates, and trending topics—all fetched seamlessly from the TMDB API. Effortlessly uncover your next favorite movie with intelligent recommendations and live data integration.',
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
    id: "spotify-clone",
    title: "Spotify Clone",
    category: "Dynamic Web Audio Player",
    categories: ["Interactive"],
    year: "2023",
    role: "Frontend & Custom Audio Player Engine",
    projectImg: projectImg2,
    description: "Immerse yourself in a Spotify-inspired clone that brings music to life with sleek design and intuitive functionality. Powered by JSON, it dynamically fetches and manages song data to enhance user experience. Features include seamless navigation, real-time song tracking, dynamic volume control, and a captivating like button animation.",
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
    id: "apple-clone",
    title: "Apple Clone",
    category: "Interactive Product Experience",
    categories: ["Interactive"],
    year: "2023",
    role: "UI/UX Micro-Interactions & Layout",
    projectImg: projectImg3,
    description: "Dive into my first project, an Apple-inspired clone that captures the brand's sleek and seamless essence. Featuring a dynamic hamburger dropdown menu and an infinite carousel showcasing Apple movies, this project merges elegant design with intuitive navigation. A polished blend of creativity and functionality awaits!",
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
    id: "venom-trail",
    title: "Venom Trail",
    category: "Retro Arcade Game Engine",
    categories: ["Games"],
    year: "2023",
    role: "Game Physics & DOM Manipulation",
    projectImg: projectImg4,
    description: "Step into the world of classic gaming with my dynamic Snake game! Built with advanced DOM manipulation and JavaScript, it features a growing snake, collision detection, and engaging sound effects. Enjoy an immersive experience with seamless gameplay mechanics and intuitive controls that keep the fun alive.",
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

export const categorizedSkills = [
  {
    category: "Full-Stack & Cloud",
    icon: "⚡",
    skills: ["Next.js 14", "Node.js", "Golang", "Supabase", "MongoDB", "REST APIs"]
  },
  {
    category: "AI & Systems Architecture",
    icon: "🧠",
    skills: ["RAG Systems", "LLM Integration", "System Design", "Docker", "CI/CD & Deployment", "Git & GitHub"]
  },
  {
    category: "Frontend & Motion",
    icon: "🎨",
    skills: ["React 19", "TypeScript", "Redux Toolkit", "GSAP Animations", "Tailwind CSS", "Figma"]
  }
];

export const hardSkills = ['Next.js', 'Node.js', 'Golang', 'RAG', 'TypeScript', 'Redux', 'GSAP', 'System Design', 'MongoDB', 'Supabase', 'Git & Github', 'Figma', 'Docker', 'CI/CD & Deployment', '& more'];

export const softSkills = ['Team Collaboration', 'Ownership & Accountability', 'Problem Solving', 'Attention to Detail', 'Adaptability', 'Leadership in Teams', 'Communication', 'Continuous Learning', 'Time Management', 'Code Reviews'];


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
  },
  {
    id: "cert-3",
    title: "Back End Development and APIs",
    issuer: "freeCodeCamp",
    date: "2026",
    credentialUrl: "https://freecodecamp.org/certification/samarsiddiqui/back-end-development-and-apis-v9",
    tags: ["Node.js", "Express", "MongoDB", "Mongoose", "REST APIs"],
    certImg: fccBackendCertImg
  },
  {
    id: "cert-4",
    title: "Claude & Model Context Protocol (MCP)",
    issuer: "Anthropic / Skilljar",
    date: "2026",
    credentialUrl: "https://verify.skilljar.com/c/8eyovok5ac7i",
    tags: ["Claude", "MCP", "Model Context Protocol", "AI Tooling"],
    certImg: claudeMcpCertImg
  }
];

export const handleDownload = () => {
  const link = document.createElement('a')
  link.href = `${process.env.PUBLIC_URL}/resume.pdf`
  link.download = `Samar's Resume.pdf`
  link.click()
}

