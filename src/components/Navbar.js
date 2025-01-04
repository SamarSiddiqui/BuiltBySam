import SVG from '../assets/star.svg'

const Navbar = ()=>{
    return (
        <div className="h-20 w-screen text-custom-vanila flex  items-center fixed ">
            <div className="w-[94%] m-auto border- h-16 flex items-center justify-between">
               <div className="font-planeLight color-[#d30707] text-xl">
                <h1 className="">SAMAR</h1>
                <div className=' flex items-center -mt-2'>
                <img src={SVG} className='h-4 w-auto' alt="svg"/>
                 <h1>SIDDIQUI</h1>
                </div>
               </div> 

               <div>Menu</div>              
            </div>
        </div>
    )
}

export default Navbar