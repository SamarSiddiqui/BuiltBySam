import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

function App() {
  const container = document.querySelector('.main-container')

  useGSAP(()=>{
    container.addEventListener('mousemove',(e)=>{
      gsap.to('.cursor',{
       x:e.clientX,
       y:e.clientY,
      })         
 })
 })
  return (
    <div className='main-container relative'>
      <div className="cursor w-5 h-5 absolute z-[999] rounded-full bg-red-700"></div>
     <Navbar/>
     <Outlet/>
    </div>
  );
}

export default App;
