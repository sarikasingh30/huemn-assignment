import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Footer = () => {
  gsap.registerPlugin(useGSAP);
  const fBox = useRef();
  useGSAP(
    () => {
      // ✅ safe, created during execution, selector text scoped
      gsap.to(".xob",{y:-20,stagger:{each:0.1,from:"start",ease: 'power2.inOut',repeat:-1, yoyo:true}})
    },
    { scope: fBox }
  );
  return (
    <div style={{backgroundColor:"#333"}}>
      <div id="footer" ref={fBox}>
        <div className="xob" style={{backgroundColor:"#A87676"}}></div>
        <div className="xob" style={{backgroundColor:"#FFD0D0"}}></div>
        <div className="xob" style={{backgroundColor:"#CA8787"}}></div>
        <div className="xob" style={{backgroundColor:"#FFD0D0"}}></div>
        <div className="xob" style={{backgroundColor:"#CA8787"}}></div>
        <div className="xob" style={{backgroundColor:"#FFD0D0"}}></div>
        <div className="xob" style={{backgroundColor:"#A87676"}}></div>
      </div>
    </div>
  );
};
