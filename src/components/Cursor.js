import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
const Cursor = ()=>{
    
    useGSAP(()=>{
        const cursor = document.getElementById('cursor')

        document.addEventListener('mousemove',(e)=>{
            gsap.to(cursor,{
                x:e.clientX,
                y:e.clientY,
                duration:0.5,
                opacity:1,
                ease:"power2.out"
            })
        })
        
        document.addEventListener('mouseleave',()=>{
            gsap.to(cursor,{
                opacity:0
            
            })
        })
    

    },[])

    return (
        <div id="cursor" className="w-5 h-5 rounded-full bg-[rgba(233,233,206,0.8)] fixed z-[9999] top-0 left-0 transform: translate(-50%, -50%); pointer-events-none mix-blend-difference opacity-0"></div> 
    )
}


export default Cursor