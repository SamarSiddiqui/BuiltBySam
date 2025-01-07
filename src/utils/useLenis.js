import Lenis from "lenis"
import { useEffect } from "react"

const useLenis = ()=>{
    useEffect(()=>{
        const lenis = new Lenis({
            duration:3,
            easing:(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth:true,
            direction:'vertical',
            
        })

        const handleScroll = (time)=>{
            lenis.raf(time);
            requestAnimationFrame(handleScroll)
        }

        requestAnimationFrame(handleScroll)

        return ()=>{
            lenis.destroy()
        }
    })
}

export default useLenis;