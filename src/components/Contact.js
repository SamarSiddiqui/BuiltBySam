import React from 'react'

const Contact = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      {/* AnimatedHeading */}
      <div className=' py-3 '>
        <div className=' flex flex-col items-center font-migraLightItalic  smallerTab:py-14'>
          {/* first-line */}
          <div className=' flex gap-10 mt-10  leading-[0.8] largerMobile:leading-[1.1] largerMobile:items-center largerMobile:gap-3 '>
            <div className='text-[clamp(45px,5vw,100px)]  flex items-center text-right'>Lets<br/>create</div>
            <h1 className='text-[clamp(65px,12vw,200px)]'>something</h1>
          </div>
          {/* second-line */}
          <div className='text-[clamp(70px,10vw,220px)] leading-[1] '>
            <h1 className=' largerMobile:leading-[1.1]'>MEANINGFUL</h1>
          </div>
          {/* thrid-line */}
          <div className=' flex items-center'>
            <h1 className='font-bold text-[clamp(36px,5vw,80px)] leading-[0.1] largerMobile:leading-[1] px-1'>TOGETHER</h1>
            <div className='font-bold text-[clamp(25px,5vw,80px)] ml-2'>(but not forever)</div>
          </div>
        </div>
        <div className='justify-center  flex items- font-planeBold'>
          <button className=' py-3 px-10 my-7 rounded-full text-black bg-custom-vanila text-sm font-bold largerMobile:m-14 largerMobile:px-[2.5rem] '><a href='mailto:samar.r.siddiqui@gmail.com '>CONTACT ME 👋🏻</a></button>
        </div>
      </div>

      {/* SocialIcons */}
      <div className='font-planeBold h-full flex-1 flex flex-col justify-between '>
        <div className=' smallerTab:flex-1 flex justify-between items-center  proTablet:flex  proTablet:flex-col smallerTab:justify-center'>
          <div className=' text-black   p-5 text-xl'>
            {/* Instagram */}
          <a href='https://www.instagram.com/samsid__?igsh=MTgxMHpoY3prZzNkMQ==' target='blank'>
        <i className="fa-brands fa-instagram  rounded-full p-2.5  mx-2 bg-custom-vanila cursor-pointer"></i>
        </a>
        {/* Twitter */}
		<a href='https://x.com/samsid__?t=td35lKcr2eFGflbmhChFHw&s=09' target='blank'>
        <i className="fa-brands fa-x-twitter rounded-full p-2.5  mx-2 bg-custom-vanila  cursor-pointer"></i>
        </a>
        {/* LinkedIn */}
        <a href='https://www.linkedin.com/in/samar-siddiqui-763481236/' target='blank' rel='noopener noreferrer'>        
        <i className="fa-brands fa-linkedin-in  rounded-full p-2.5  mx-2 bg-custom-vanila cursor-pointer"></i>
        </a>
        {/* GitHub */}
        <a href='https://github.com/SamarSiddiqui' target='blank' rel='noopener noreferrer'>
        <i className="fa-brands fa-github  rounded-full p-2.5  mx-2 bg-custom-vanila cursor-pointer"></i>
        </a>
          </div>
          <div className=' smallerTab:my-2'>
            <h1 className='mx-5  py-2 px-5 rounded-full  text-sm text-black bg-custom-vanila font-bold cursor-pointer '>RESUME<i className="fa-solid fa-download ml-2 "></i></h1>
          </div>
        </div>
        <div className='text-center text-sm my-3'>Samar Siddiqui 2025 🖤</div>
      </div>
    </div>
  )
}

export default Contact
