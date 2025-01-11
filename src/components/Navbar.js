import { useGSAP } from '@gsap/react'
import SVG from '../assets/svg/star.svg'
import gsap from 'gsap';

const Navbar = ()=>{

    useGSAP(()=>{
     gsap.to('.logo-img',{rotation:360,repeat:-1,duration:4,ease:"linear"})
    })
    return (
        <div className="h-20 w-screen  flex  items-center fixed z-[999]">
            <div className="w-[94%] m-auto border- h-16 flex items-center justify-between">
               <div className="font-planeLight text-[clamp(15px,2.5vw,16px)] ">
                <h1 className="">SAMAR</h1>
                <div className=' flex items-center -mt-2.5 '>
                <img src={SVG} className='logo-img h-4 w-auto' alt="svg"/>
                 <h1 className=''>SIDDIQUI</h1>
                </div>
               </div> 

               <div>
               <div className=' text-black  text-xl'>
         
        {/* LinkedIn */}
        <a href='https://www.linkedin.com/in/samar-siddiqui-763481236/' target='blank' rel='noopener noreferrer'>        
        <i className="fa-brands fa-linkedin-in  rounded-full p-2.5  mx-2 text-custom-vanila cursor-pointer"></i>
        </a>
        {/* GitHub */}
        <a href='https://github.com/SamarSiddiqui' target='blank' rel='noopener noreferrer'>
        <i className="fa-brands fa-github  rounded-full p-2.5  mx-2 text-custom-vanila cursor-pointer"></i>
        </a>
        {/* Twitter */}
		<a href='https://x.com/samsid__?t=td35lKcr2eFGflbmhChFHw&s=09' target='blank'>
        <i className="fa-brands fa-x-twitter rounded-full p-2.5  ml-2 text-custom-vanila  cursor-pointer"></i>
        </a>
          </div>
                </div>              
            </div>
        </div>
    )
}

export default Navbar