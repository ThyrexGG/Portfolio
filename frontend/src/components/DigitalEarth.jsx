import React, { useEffect, useState, useRef } from 'react';
import Globe from 'react-globe.gl';
import { FaReact, FaNodeJs, FaDatabase, FaPython } from 'react-icons/fa';
import './DigitalEarth.css';

const DigitalEarth = () => {
  const globeEl = useRef();
  const [countries, setCountries] = useState({ features: [] });

  useEffect(() => {
    // Fetch GeoJSON for the globe's countries
    fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(setCountries);
  }, []);

  useEffect(() => {
    if (globeEl.current) {
      // Configure auto-rotation and enable mouse controls
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 1.0;
      globeEl.current.controls().enableZoom = false; // Disable scroll zoom so we don't break page scroll
    }
  }, [countries]);

  return (
    <div className="earth-wrapper">
      
      {/* First 3D Orbit Ring */}
      <div className="orbit orbit-1">
        <div className="moon-container">
          <div className="moon"><FaReact /></div>
        </div>
      </div>

      {/* Second 3D Orbit Ring (Reversed) */}
      <div className="orbit orbit-2">
        <div className="moon-container">
          <div className="moon"><FaNodeJs /></div>
        </div>
      </div>

      {/* Third 3D Orbit Ring */}
      <div className="orbit orbit-3">
        <div className="moon-container">
          <div className="moon"><FaDatabase /></div>
        </div>
      </div>

      {/* The 3D Interactive Globe */}
      <div className="globe-container">
        <Globe
          ref={globeEl}
          width={420}
          height={420}
          backgroundColor="rgba(0,0,0,0)" // Transparent background
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          atmosphereColor="#38bdf8"
          atmosphereAltitude={0.25}
        />
      </div>

    </div>
  );
};

export default DigitalEarth;
