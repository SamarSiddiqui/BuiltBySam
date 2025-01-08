import React from 'react'

const BioSection = () => {
  return (
    <div className='min-h-screen flex largerMobile:block largerMobile:mb-10'>
      <div className='w-1/2  flex-1 flex   justify-center largerMobile:w-full largerMobile:h-1/2'>
      <div className='w-2/3 proTablet:w-[80%]   mt-20 text-[clamp(20px,4.5vw,40px)] font-migraLight leading-[1.2] largerMobile:text-4xl'>
        <p>Living my dream of <span className='font-grandSlangBold italic font-normal '>creating</span> something <span className='font-grandSlangBold italic font-normal '>meaningful</span>, one line of code at a time, with an <span className='font-grandSlangBold italic font-normal '>eye on Innovation and Endless Possibilities.</span></p>
      </div>
      </div>
      <div className='  w-1/2  flex flex-1  items-center pt-20 justify-center largerMobile:w-full largerMobile:h-1/2'>
      <div className='h-1/2 w-2/3   proTablet:w-[90%]  font-planeBold text-[clamp(10px,2vw,18px)] largerMobile:text-lg my-5'>
      <p className='mb-5'>I live in Lucknow, India—a city rich in culture and history. My journey into programming sparked during the last year of my college, where curiosity and logic led me to explore the art of coding.</p>
      <p>Driven by a passion for understanding how things work behind the scenes, I found my calling in front-end development. My goal is simple yet profound: to make the internet a more beautiful, functional, and engaging place for everyone.</p>
      </div>
      </div>
    </div>
  )
}

export default BioSection
