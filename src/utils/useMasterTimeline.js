import  { useRef } from 'react'
import gsap from 'gsap'

const useMasterTimeline = () => {
    const masterTimelineRef = useRef(null);
    if (!masterTimelineRef.current) {
      masterTimelineRef.current = gsap.timeline();
    }
  
    return masterTimelineRef.current;
}

export default useMasterTimeline
