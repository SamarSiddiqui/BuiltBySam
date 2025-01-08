import React from 'react'

const VisualImpact = () => {
  return (
    <div className=' flex items-center min-h-[100vh] justify-center leading-[1.4] font-grandSlangItalic'>
      <div>
      <h1 className='text-[clamp(45px,12vw,180px)] flex items-center justify-evenly uppercase'>Designing <span><i className="fa-solid fa-asterisk text-[clamp(15px,5vw,80px)]"></i></span></h1>
      
      <h1 className='text-[clamp(35px,8vw,100px)] pl-20 largerMobile:pl-6 smallerTab:pl-5'>Digital <span className='largerMobile:pl-20'>Landscapes</span> </h1>

      <div className='flex justify-evenly text-[clamp(30px,8vw,60px)]'>
      <h1 className='lowercase'>Inspired by</h1>
      <span>↓</span>
      </div>

      <h1 className='text-[clamp(40px,10vw,180px)] pl-10 text-center largerMobile:pl-5 largerMobile:text-start '>Logic <span className='font-migraLight largerMobile:block largerMobile:pl-20 '>&</span> <span className='largerMobile:pl-28 '>Beauty</span></h1>
      </div>
    </div>
  )
}

export default VisualImpact
