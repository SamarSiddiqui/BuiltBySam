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
            liveLink:"https://samarsiddiqui.github.io/Neon-Snake/",
            sourceLink:"https://github.com/SamarSiddiqui/Neon-Snake" 
        }
    },
] 

export const hardSkills = ['Html5','Css3','JavaScript','React','Gsap','Tailwind Css','Redux','Context API','Postman','Jest','GitHub','Firebase','Canva','Photoshop','& more']

export const softSkills = ['Passion for Problems','Empathy','Adaptability','Team Working','Collabration','Commuinication','Curiosity','Detailed Oreinted','Time Management','Leadership']


export const handleDownload = ()=>{
    const link = document.createElement('a')
    link.href = `${process.env.PUBLIC_URL}/resume.pdf`
    link.download =  `Samar's Resume.pdf`
    link.click()
}
