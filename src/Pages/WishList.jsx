import React, {useEffect, useState } from "react";
import { getLocalData, saveLocalData } from "../Utils/localStorage";
import { Link } from "react-router-dom";

export const WishList = () => {
  let [data,setData]= useState([])
  console.log(data)

  useEffect(() => {
    const rData = getLocalData("wishList")||{};
        let vals=Object.values(rData)
    setData(vals);
  }, []); 

  const handleDelete=(is)=>{
    
     let dataX=getLocalData("wishList")
     console.log(is, dataX, dataX[is])
     delete dataX[is]
     saveLocalData("wishList",dataX)
     setData(Object.values(getLocalData("wishList")))
  }

// useEffect(()=>{
  
// },[])
  return (
    <div className="wGridBox">
      <h2 style={{textAlign:"center", marginTop:"3%"}}>WISHLIST</h2>
  {data.length>0?  <div className="grid">
        {data?.map((el)=>{
            return <div key={el?.item?.idMeal} className="grid-div">
                <h4>{el.item.strMeal}</h4>
                <div><img className="imgHolder" src={el.item.strMealThumb} alt="dm"/></div>
                <p>{el.item.strCategory}</p>
                <p>{el.item.strArea}</p>
                <p>{el.item.strTags}</p>
                {el.item.strYoutube?<a href={el.item.strYoutube} target="_blank" rel="noreferrer" style={{textDecoration:"none"}}>Click Here</a>:""}
                <button className="but" onClick={()=>handleDelete(el.item.idMeal)}>Delete</button>
                
            </div>
        })}
      </div>:<Link to="/" ><div className="grid"><h2 style={{color:"blue"}}>Please Add Dish to Your Wishlist</h2></div> </Link>}
    </div>
  );
};
