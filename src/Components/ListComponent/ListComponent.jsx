import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';

export const ListComponent = ({List,setSData}) => {
  const [clicked,setClicked]=useState(false)


  const handleSet=(el)=>{
    setSData(el)
    setClicked(true)
    
  }
gsap.registerPlugin(useGSAP);

const container = useRef();
useGSAP(
  () => {
      // ✅ safe, created during execution, selector text scoped
      gsap.to(".Lbox", { rotation: 360, duration: 5, ease: "elastic" })
  },
  { scope: container }
);


  // console.log(List)
  return (
    <div className='listC' ref={container}>
      {List?.map((el)=>{
        return <div className={`Lbox ${clicked?"clicked":""} `} key={el?.idMeal} onClick={()=>handleSet(el)}>
            <div className="LHead"><h3>{el?.strMeal}</h3></div>
            <div className='ImgBox'><img  src={el?.strMealThumb} alt="img" /></div>
            <div><p>{el?.strCategory}</p></div>
        </div>
      })}  

    </div>
  )
}
