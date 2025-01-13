import React from 'react'
import flowers from '../assets/svg/flower1.svg'
import gsap from 'gsap'

export const useFlowerFalling = (headingElem,flowersElem) => {
    const heading = document.querySelector(headingElem)
    const flowersContainer = document.querySelector(flowersElem)

  const flowerImages = [flowers,flowers,flowers,flowers]

  let lastFlowerTime = 0
  const  cooldown = 200

  heading.addEventListener('mousemove', (e) => {
    const currentTime = Date.now();
  
    // Check if enough time has passed since the last flower was created
    if (currentTime - lastFlowerTime < cooldown) {
      return; // Exit if still on cooldown
    }
    lastFlowerTime = currentTime;
  
    // Randomly select a flower SVG
    const randomIndex = Math.floor(Math.random() * flowerImages.length);
    const selectedFlower = flowerImages[randomIndex];
  
    // Create a flower
    const flower = document.createElement('img');
    flower.src = selectedFlower;
    flower.classList.add('flower-svg');
    flower.style.width='50px';
    
    // Position flower relative to the heading
    const boundingBox = heading.getBoundingClientRect();
    const relativeX = e.clientX - boundingBox.left;
    const relativeY = e.clientY - boundingBox.top;
  
    flower.style.left = `${relativeX}px`;
    flower.style.top = `${relativeY}px`;
  
    // Append flower to the container
    flowersContainer.appendChild(flower);
  
    // Animate the flower falling
    gsap.to(flower, {
      y: 600, // Adjust to determine the falling distance
      opacity: 0,
      rotate: () => Math.random() * 360,
      duration: 1.5,
      ease: 'power1.in',
      onComplete: () => flower.remove(), // Remove flower after animation
    });
  });


}

// export default useFlowerFalling
