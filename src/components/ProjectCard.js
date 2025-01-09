import React from "react";
const ProjectCard = ({ title, description, projectImg, techImages,projectLink }) => {
  return (
    
    <div className="min-h-screen flex justify-center items-center  my-1">
    <div className="w-[85%] rounded-2xl  shadow-[0_5px_10px_rgba(200,200,200,0.1)] relative cursor-pointer group proTablet:w-11/12 m-5">
      {/* Image */}
      <div className="w-full h-full">
        <img
          src={projectImg}
          alt={title}
          className="object-cover rounded-2xl  proTablet:rounded-t-2xl proTablet:rounded-b-none"
        />
      </div>
  
      {/* Description */}
      <div
        className={`hidden group-hover:block rounded-2xl bg-custom-linear backdrop-blur-lg absolute h-full w-full top-0 
        proTablet:relative proTablet:bottom-0 proTablet:h-auto proTablet:block proTablet:bg-black proTablet:backdrop-blur-none proTablet:rounded-b-2xl proTablet:rounded-t-none`}
      >
        <div className="w-[85%]  m-auto h-full flex flex-col justify-between proTablet:w-full">
          {/* UpperSection */}
          <div className="p-5 h-full flex flex-col justify-between proTablet:p-0">
            <div className="p-1 proTablet:mx-7">
              <h1 className="text-[clamp(25px,3.5vw,100px)] font-grandSlangBold font-bold  proTablet:my-2">
                {title}
              </h1>
              <p className="text-[clamp(15px,1.5vw,30px)] w-2/3 leading-[2.2] font-planeItalic proTablet:leading-7 proTablet:w-11/12">
                {description}
              </p>
            </div>
  
            {/* BottomSection */}
            <div className="flex justify-between py-2 proTablet:py-1 smallerTab:flex-col smallerTab:items-center proTablet:mx-4">
              {/* IconsImages */}
              <div className="text-3xl flex items-center proTablet:text-sm">
                {techImages?.map((image, index) => (
                  <div
                    className=" inline-flex rounded-full mx-2"
                    key={index}
                  >
                    <img src={image} className="h-7" alt="tech-icon" />
                  </div>
                ))}
              </div>
  
              <div className="proTablet:my-5 ">
              <a href={projectLink?.sourceLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <button className="text-lg bg-gray-200/100 text-black py-2 px-5 mx-3 rounded-3xl proTablet:px-3 proTablet:text-sm">
                    View Source
                  </button>
                </a>
                <a href={projectLink?.liveLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <button className="text-lg bg-gray-200/100 text-black py-2 px-5 mx-3 rounded-3xl proTablet:px-3 proTablet:text-sm">
                    See It Live
                    </button>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default ProjectCard;
