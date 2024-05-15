import React, { useEffect, useState } from "react";
import { getLocalData } from "../Utils/localStorage";

export const WishList = () => {
  let [data, setData] = useState(getLocalData("wishList") || []);

  return (
    <div>
      <h2 style={{textAlign:"center"}}>WISHLIST</h2>
      <table style={{display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"center", width:"90%", margin:"auto", marginTop:"3%"}}>
        <tr style={{display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"center", width:"100%", margin:"auto"}}>
          <th>Dish</th>
          <th>Image</th>
          <th>Category</th>
          <th>Area</th>
          <th>Tags</th>
        </tr>
      </table>
      <tbody style={{display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"center", width:"100%", margin:"auto"}}>
        {data?.map((el)=>{
            return <tr key={el?.idMeal} style={{display:"flex", justifyContent:"space-around", alignItems:"center", width:"100%", margin:"auto"}}>
                <td>{el?.strMeal}</td>
                <td><img style={{width:"80px", height:"80px"}} src={el.strMealThumb} alt="dm"/></td>
                <td>{el.strCategory}</td>
                <td>{el.strArea}</td>
                <td>{el.strTags}</td>
            </tr>
        })}
      </tbody>
    </div>
  );
};
