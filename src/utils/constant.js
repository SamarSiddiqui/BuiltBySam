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

export const projectData = [
    {
        id:"project1",
        title: "Netflix-GPT",
        projectImg:projectImg1,
        description:'Step into Netflix-GPT, your AI-powered movie companion! Enjoy personalized film suggestions with GPT, real-time "Airing Today" updates, and trending topics—all fetched seamlessly from the TMDB API. Effortlessly uncover your next favorite movie with intelligent recommendations and live data integration. 🎥✨',
        techStack:[react,tailwind,redux,firebase,api],
        links:{
            liveLink:"https://netflix-gpt3010.web.app/",
            sourceLink:"https://github.com/SamarSiddiqui/NetflixGPT"
        }
    },
    {
        id:"project2",
        title: "Spotify Clone",
        projectImg:projectImg2,
        description:"Immerse yourself in a Spotify-inspired clone that brings music to life with sleek design and intuitive functionality. Powered by JSON, it dynamically fetches and manages song data to enhance user experience. Features include seamless navigation, real-time song tracking, dynamic volume control, and a captivating like button animation. 🎶✨",
        techStack:[html,css,javascript,json],
        links:{
            liveLink:"https://samarsiddiqui.github.io/Spotify/",
            sourceLink:"https://github.com/SamarSiddiqui/Spotify"
        }
    },
    {
        id:"project3",
        title: "Apple Clone",
        projectImg:projectImg3,
        description:"Dive into my first project, an Apple-inspired clone that captures the brand's sleek and seamless essence. Featuring a dynamic hamburger dropdown menu and an infinite carousel showcasing Apple movies, this project merges elegant design with intuitive navigation. A polished blend of creativity and functionality awaits! 🍎✨",
        techStack:[html,css,javascript],
        links:{
            liveLink:"https://samarsiddiqui.github.io/Apple/",
            sourceLink:"https://github.com/SamarSiddiqui/Apple"
        }
    },
    {
        id:"project4",
        title: "Venom Trail",
        projectImg:projectImg4,
        description:"Step into the world of classic gaming with my dynamic Snake game! Built with advanced DOM manipulation and JavaScript, it features a growing snake, collision detection, and engaging sound effects. Enjoy an immersive experience with seamless gameplay mechanics and intuitive controls that keep the fun alive. 🐍🎮✨",
        techStack:[html,css,javascript],
        links:{
            liveLink:"https://samarsiddiqui.github.io/Venom-Trail/",
            sourceLink:"https://github.com/SamarSiddiqui/Venom-Trail" 
        }
    },
] 

export const hardSkills = ['Next.js','React','TypeScript','Redux','GSAP','Node.js',
  'Golang', 'System Design','MongoDB','Postman','Firebase','Git & Github','Figma','Docker','CI/CD & Deployment','& more']

export const softSkills = ['Team Collaboration','Ownership & Accountability','Problem Solving','Attention to Detail','Adaptability','Leadership in Small Teams','Commuinication','Curiosity & Continuous Learning','Time Management','Code Reviews']


export const certificationData = [
  {
    id: "cert-1",
    title: "Meta Front-End Developer",
    issuer: "Meta / Coursera",
    date: "2024",
    credentialUrl: "#",
    tags: ["React", "JavaScript", "CSS3", "Git"],
    badgeColor: "#0064E0",
    badgeImg: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%230b0f19'/><path d='M30 50 C30 35, 45 35, 50 48 C55 35, 70 35, 70 50 C70 65, 55 65, 50 52 C45 65, 30 65, 30 50 Z' fill='none' stroke='%230064E0' stroke-width='6'/></svg>"
  },
  {
    id: "cert-2",
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2023",
    credentialUrl: "#",
    tags: ["HTML5", "CSS Grid", "Flexbox", "Accessibility"],
    badgeColor: "#0A0A23",
    badgeImg: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%230b0f19'/><path d='M40 30 L25 50 L40 70 M60 30 L75 50 L60 70' stroke='%23F5C518' stroke-width='6' stroke-linecap='round' stroke-linejoin='round' fill='none'/></svg>"
  },
  {
    id: "cert-3",
    title: "Advanced React & Redux",
    issuer: "Frontend Masters",
    date: "2024",
    credentialUrl: "#",
    tags: ["React 19", "Redux Toolkit", "State Management"],
    badgeColor: "#61DAFB",
    badgeImg: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%230b0f19'/><ellipse cx='50' cy='50' rx='30' ry='12' fill='none' stroke='%2361DAFB' stroke-width='4' transform='rotate(30 50 50)'/><ellipse cx='50' cy='50' rx='30' ry='12' fill='none' stroke='%2361DAFB' stroke-width='4' transform='rotate(90 50 50)'/><ellipse cx='50' cy='50' rx='30' ry='12' fill='none' stroke='%2361DAFB' stroke-width='4' transform='rotate(150 50 50)'/><circle cx='50' cy='50' r='5' fill='%2361DAFB'/></svg>"
  },
  {
    id: "cert-4",
    title: "Google UX Design Specialization",
    issuer: "Google",
    date: "2023",
    credentialUrl: "#",
    tags: ["UI/UX", "Figma", "User Research", "Prototyping"],
    badgeColor: "#4285F4",
    badgeImg: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%230b0f19'/><circle cx='50' cy='50' r='25' fill='none' stroke='%23EA4335' stroke-width='6'/><path d='M50 25 A25 25 0 0 1 75 50 L50 50 Z' fill='%234285F4'/><circle cx='50' cy='50' r='10' fill='%230b0f19'/></svg>"
  }
];

export const handleDownload = ()=>{
    const link = document.createElement('a')
    link.href = `${process.env.PUBLIC_URL}/resume.pdf`
    link.download =  `Samar's Resume.pdf`
    link.click()
}

