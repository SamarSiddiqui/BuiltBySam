import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import shape0 from '../assets/svg/Shapes/shape1.svg'
import shape1 from '../assets/svg/Shapes/shape2.svg'
import shape2 from '../assets/svg/Shapes/shape3.svg'
import shape3 from '../assets/svg/Shapes/shape4.svg'
import shape4 from '../assets/svg/Shapes/shape5.svg'
import shape5 from '../assets/svg/Shapes/shape6.svg'
import shape6 from '../assets/svg/Shapes/shape7.svg'
import shape7 from '../assets/svg/Shapes/shape8.svg'
import shape8 from '../assets/svg/Shapes/shape9.svg'
import shape9 from '../assets/svg/Shapes/shape10.svg'
import shape10 from '../assets/svg/Shapes/shape11.svg'
import shape11 from '../assets/svg/Shapes/shape12.svg'
import shape12 from '../assets/svg/Shapes/shape13.svg'
import shape13 from '../assets/svg/Shapes/shape14.svg'
import shape14 from '../assets/svg/Shapes/shape15.svg'

 const useShapeFalling = (headingElem,shapesElem) => {

  useGSAP(()=>{
    const headings = document.querySelectorAll(headingElem)
    const shapesContainer = document.querySelector(shapesElem)
    const shapeImages = [shape0,shape1,shape2,shape3,shape4,shape5,shape6,shape7,shape8,shape9,shape10,shape11,shape12,shape13,shape14]
  
    let lastShapeTime = 0
    const  cooldown = 400
    headings.forEach((heading)=>{

        heading.addEventListener('mousemove', (e) => {
          const currentTime = Date.now();
        
          // Check if enough time has passed since the last flower was created
          if (currentTime - lastShapeTime < cooldown) {
            return; // Exit if still on cooldown
          }
          lastShapeTime = currentTime;
        
          // Randomly select a shape SVG
          const randomIndex = Math.floor(Math.random() * shapeImages.length);
          const selectedShape = shapeImages[randomIndex];
        
          // Create a shape
          const shape = document.createElement('img');
          shape.src = selectedShape;
          shape.classList.add('shape-svg');
          shape.style.width='60px';
          shape.style.position = 'absolute';  
          shape.style.pointerEvents = 'none';
          
          // Position shape relative to the heading
          const boundingBox = heading.getBoundingClientRect();
          const relativeX = e.clientX - boundingBox.left;
          const relativeY = e.clientY - boundingBox.top;
        
          shape.style.left = `${relativeX}px`;
          shape.style.top = `${relativeY}px`;
        
      
          shapesContainer.appendChild(shape);
        
         
          gsap.to(shape, {
            y: 500, 
            opacity: 0,
            rotate: () => Math.random() * 720,
            duration: 1.5,
            ease: 'power2.in',
            onComplete: () => shape.remove(), 
          });
        });
      })
  }) 

}

export default useShapeFalling
