import SVG from '../assets/svg/star.svg'

const Navbar = ()=>{
    return (
        <div className="h-20 w-screen  flex  items-center fixed z-[999]">
            <div className="w-[94%] m-auto border- h-16 flex items-center justify-between ">
               <div className="font-planeLight text-[clamp(15px,2.5vw,16px)] ">
                <h1 className="">SAMAR</h1>
                <div className=' flex items-center -mt-2.5 '>
                <img src={SVG} className='h-4 w-auto' alt="svg"/>
                 <h1 className=''>SIDDIQUI</h1>
                </div>
               </div> 

               <div>Menu</div>              
            </div>
        </div>
    )
}

export default Navbar