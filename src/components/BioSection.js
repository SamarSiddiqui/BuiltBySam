import React from 'react'

const BioSection = () => {
  return (
    <div className='h-screen flex'>
      <div className='w-1/2 h-full flex items-center justify-center'>
      <div className='w-2/3  text-4xl font-migraLight'>
        <p>Living my dream of <span className='font-grandSlangBold italic font-normal '>creating</span> something <span className='font-grandSlangBold italic font-normal '>meaningful</span>, one line of code at a time, with an <span className='font-grandSlangBold italic font-normal '>eye on Innovation and Endless Possibilities.</span></p>
      </div>
      </div>
      <div className='w-1/2 h-full flex items-end justify-center'>
      <div className='h-1/2 w-2/3  font-planeBold text-lg '>
      <p className='mb-5'>I live in Lucknow, India—a city rich in culture and history. My journey into programming sparked during the last year of my college, where curiosity and logic led me to explore the art of coding.</p>
      <p>Driven by a passion for understanding how things work behind the scenes, I found my calling in front-end development. My goal is simple yet profound: to make the internet a more beautiful, functional, and engaging place for everyone.</p>
      </div>
      </div>
    </div>
  )
}

export default BioSection
