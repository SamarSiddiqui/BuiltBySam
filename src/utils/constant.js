import projectImg1 from '../assets/Projects/netflixBg.png'
import react from '../assets/tech-icons/react.png'
import redux from '../assets/tech-icons/redux.png'
import tailwind from '../assets/tech-icons/tailwind.png'
import firebase from '../assets/tech-icons/firebase.png'
// import javascript from '../assets/tech-icons/js.webp'
// import css from '../assets/tech-icons/css.png'
// import html from '../assets/tech-icons/html.png'
import api from '../assets/tech-icons/api.png'

export const projectData = [
    {
        id:"project1",
        title: "Netflix-GPT",
        projectImg:projectImg1,
        description:`Explore Netflix-GPT: your AI-driven movie guide! Get personalized film suggestions powered by GPT and stay updated with real-time movie releases under "Airing Today," all fetched from the TMDB API. Discover your next favorite movie effortlessly with intelligent recommendations and live updates.`,
        techStack:[react,tailwind,redux,firebase,api]
    },
    {
        id:"project2",
        title: "Project 2",
        description:"Hello this is Project 2."
    },
    {
        id:"project3",
        title: "Project 3",
        description:"Hello this is Project 3."
    },
    {
        id:"project4",
        title: "Project 4",
        description:"Hello this is Project 4."
    },
] 