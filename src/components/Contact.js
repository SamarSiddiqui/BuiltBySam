import React from 'react'

const Contact = () => {
  return (
    <div className='min-h-screen'>
      {/* AnimatedHeading */}
      <div className=''>
        <div className=' flex flex-col items-center font-migraLight'>
          {/* first-line */}
          <div className=' flex gap-10 mt-10'>
            <div className='text-6xl'>Lets<br/>create</div>
            <h1 className='text-9xl'>something</h1>
          </div>
          {/* second-line */}
          <div className=''>
            <h1 className='text-[150px]'>MEANINGFUL</h1>
          </div>
          {/* thrid-line */}
          <div className=' flex items-center'>
            <h1 className='font-bold text-9xl'>TOGETHER</h1>
            <div className='text-6xl'>(but not forever)</div>
          </div>
        </div>
        <div className=' flex justify-center font-planeBold'>
          <button className=' py-3 px-10 my-5 rounded-full text-black bg-custom-vanila text-sm '><a href='mailto:samar.r.siddiqui@gmail.com'>CONTACT ME 👋🏻</a></button>
        </div>
      </div>
      {/* SocialIcons */}
      <div className=' font-planeBold'>
        <div className=' flex justify-between items-center'>
          <div className=' text-black p-5 text-lg'>
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
        <i className="fa-brands fa-linkedin  rounded-full p-2.5  mx-2 bg-custom-vanila cursor-pointer"></i>
        </a>
        {/* GitHub */}
        <a href='https://github.com/SamarSiddiqui' target='blank' rel='noopener noreferrer'>
        <i className="fa-brands fa-github  rounded-full p-2.5  mx-2 bg-custom-vanila cursor-pointer"></i>
        </a>
          </div>
          <div>
            <h1 className='mx-5  py-2 px-5 rounded-full  text-sm text-black bg-custom-vanila font-bold cursor-pointer'>RESUME<i className="fa-solid fa-download ml-2 "></i></h1>
          </div>
        </div>
        <div className='text-center text-sm my-3'>Samar Siddiqui 2025 🖤</div>
      </div>
    </div>
  )
}

export default Contact
