import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import SVG from '../assets/logo.png'
import gsap from 'gsap'

const Loader = ({onComplete,setLoaderAnimation}) => { 
  const loader = useRef()
   
  useGSAP(()=>{
    const tl = gsap.timeline({
      onComplete: ()=>onComplete()
    })
    tl.to(loader.current,{
      yPercent:-100,
      ease:"power4.in",
      duration:1,
      borderRadius:'100%',
      onComplete: ()=> setLoaderAnimation(true)
    })
  },[])
  return (
    <div ref={loader} className='h-screen w-screen bg-custom-app z-[99999]  fixed  top-0 left-0 flex justify-center items-center '>
      
     <img src={SVG} className='h-36 w-auto' alt="svg"/>       
    </div>
  )
}

export default Loader
