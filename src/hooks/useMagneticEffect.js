import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export const  useMagneticEffect =  (targetBox,target)=> {
    useGSAP(()=>{
        const targetBoxElem = document.querySelector(targetBox)   
        const targetElem = document.querySelector(target)

        targetBoxElem.addEventListener('mousemove',(e)=>{
          const targetRect = targetElem.getBoundingClientRect()  
          const offsetX = (e.clientX-(targetRect.left+targetRect.width/2))*0.5
          const offsetY = (e.clientY-(targetRect.top+targetRect.height/2))*0.5
    
          gsap.to(targetElem,{
            x:offsetX,
            y:offsetY,
            duration:0.3,
            ease:"power3.out"
          })
            
        })
    
        targetBoxElem.addEventListener("mouseleave",()=>{
         gsap.to(targetElem,{
          x:0,
          y:0,
          duration:0.5
         })
        })
    },[targetBox,target])
   
    
  }


export const useMultipleMagneticEffect = (targetBox,target)=>{
    useGSAP(()=>{
    const targetBoxElem = document.querySelectorAll(targetBox)
    targetBoxElem.forEach((box)=>{
    const targetElem = box.querySelector(target)
     
     const handleMouseMove = (e)=> {
       const targetRect = targetElem.getBoundingClientRect()

       const offsetX = (e.clientX-(targetRect.left+targetRect.width/2))*0.5
       const offsetY = (e.clientY-(targetRect.top+targetRect.height/2))*0.5

       gsap.to(targetElem,{
        x:offsetX,
        y:offsetY,
        duration:0.3,
        ease:"power3.out"
       })
     }

      const handleMouseLeave = ()=>{
        gsap.to(targetElem,{
            x:0,
            y:0,
            duration:0.5
        })
      }

      box.addEventListener('mousemove',handleMouseMove)
      box.addEventListener('mouseleave',handleMouseLeave)
    
    })
        
    })

}