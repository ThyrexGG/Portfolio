import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    
    // Check if device supports hover (ignores mobile/touch)
    if (window.matchMedia('(pointer: coarse)').matches) {
      if (cursor) cursor.style.display = 'none';
      return;
    }

    const onMouseMove = (e) => {
      if (cursor) {
        // We use requestAnimationFrame for smoother performance, 
        // but direct style update is usually fine for a simple cursor blob
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return <div className="custom-cursor" ref={cursorRef}></div>;
};

export default CustomCursor;
