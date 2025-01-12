import { useGSAP } from '@gsap/react'
import SVG from '../assets/svg/star.svg'
import gsap from 'gsap';
import { useMultipleMagneticEffect} from '../utils/useMagneticEffect';

const Navbar = ()=>{

useMultipleMagneticEffect('.header-icon-box','.header-icon')

useGSAP(()=>{
    gsap.to('.logo-img',{rotation:360,repeat:-1,duration:4,ease:"linear"})
         
})
    return (
        <div className=" h-20 w-screen  flex  items-center fixed z-[999]">
            <div className="w-[94%]   m-auto  h-16 flex items-center justify-between">
               <div className="font-planeLight text-[clamp(15px,2.5vw,16px)]">
                <h1 className="">SAMAR</h1>
                <div className=' flex items-center -mt-2.5 '>
                <img src={SVG} className='logo-img h-4 w-auto' alt="svg"/>
                 <h1 className=''>SIDDIQUI</h1>
                </div>
               </div> 

               <div>
        <div className=' text-black  text-xl'>         
        {/* LinkedIn */}
        <a href='https://www.linkedin.com/in/samar-siddiqui-763481236/' target='blank' rel='noopener noreferrer' className=' header-icon-box p-3 '>        
        <i className="fa-brands header-icon fa-linkedin-in  p-2.5  mx-2 text-custom-vanila cursor-pointer"></i>
        </a>
        {/* GitHub */}
        <a href='https://github.com/SamarSiddiqui' target='blank' rel='noopener noreferrer'  className=' header-icon-box p-2'>
        <i className="fa-brands fa-github header-icon p-2.5  mx-2 text-custom-vanila cursor-pointer"></i>
        </a>
        {/* Twitter */}
		<a href='https://x.com/samsid__?t=td35lKcr2eFGflbmhChFHw&s=09' target='blank'  className=' header-icon-box p-2'>
        <i className="fa-brands fa-x-twitter header-icon p-2.5  ml-2 text-custom-vanila  cursor-pointer"></i>
        </a>
          </div>
                </div>              
            </div>
        </div>
    )
}

export default Navbar