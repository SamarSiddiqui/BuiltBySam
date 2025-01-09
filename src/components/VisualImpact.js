import React from 'react'

const VisualImpact = () => {
  return (
    <div className=' flex items-center min-h-[100vh] justify-center leading-[1.4] font-grandSlangItalic'>
      <div>
      <h1 className='text-[clamp(52px,12vw,200px)] flex items-center justify-evenly uppercase largerMobile:py-1'>Designing <span><i className="fa-solid fa-asterisk text-[clamp(15px,5vw,80px)]"></i></span></h1>
      
      <h1 className='text-[clamp(45px,8vw,130px)] pl-20 largerMobile:pl-2 largerMobile:py-3 largerMobile:mx-1'>Digital <span className='largerMobile:pl-10 largerMobile:block largerMobile:text-center largerMobile:pb-0'>Landscapes</span> </h1>


      <div className='flex justify-evenly text-[clamp(45px,8vw,100px)] largerMobile:leading-[1.5] largerMobile:py-0'>
      <h1 className='lowercase'>Inspired by</h1>
      <span>↓</span>
      </div>

      <h1 className='text-[clamp(60px,10vw,200px)] pl-10 text-center largerMobile:pl-5 largerMobile:text-start '>Logic <span className='font-migraLight largerMobile:block largerMobile:text-center largerMobile:pr-10 '>&</span> <span className='largerMobile:text-center largerMobile:block largerMobile:pl-16 largerMobile:-mt-7 '>Beauty</span></h1>

      </div>
    </div>
  )
}

export default VisualImpact
