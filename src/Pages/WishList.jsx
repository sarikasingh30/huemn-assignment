import React from "react";
import { getLocalData } from "../Utils/localStorage";

export const WishList = () => {
  let data=getLocalData("wishList") || []

  return (
    <div className="wGridBox">
      <h2 style={{textAlign:"center", marginTop:"3%"}}>WISHLIST</h2>
    <div className="grid">
        {data?.map((el)=>{
            return <div key={el?.idMeal} className="grid-div">
                <h4>{el?.strMeal}</h4>
                <div className="imgHolder"><img src={el.strMealThumb} alt="dm"/></div>
                <h3>{el.strCategory}</h3>
                <h6>{el.strArea}</h6>
                <p>{el.strTags}</p>
            </div>
        })}
      </div>
    </div>
  );
};
