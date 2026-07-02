import React, { useState, useEffect } from 'react';
import './RippleEffect.css';

const RippleEffect = () => {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const newRipple = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now() + Math.random() // Ensure unique ID even if clicks are fast
      };
      
      setRipples((prev) => [...prev, newRipple]);

      // Remove the ripple after animation completes (600ms)
      setTimeout(() => {
        setRipples((prev) => prev.filter(r => r.id !== newRipple.id));
      }, 600);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="ripple-container">
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="ripple"
          style={{
            left: ripple.x,
            top: ripple.y
          }}
        />
      ))}
    </div>
  );
};

export default RippleEffect;
