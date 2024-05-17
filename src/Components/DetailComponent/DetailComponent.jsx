import React, { useState } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { getLocalData, saveLocalData } from "../../Utils/localStorage";
export const DetailComponent = ({ SData }) => {

  const [likedDishes, setLikedDishes] = useState(getLocalData("wishList")||{}); // Object to store liked dishes

  const handleLikeSet = (item) => {
    const newLikedDishes = { ...likedDishes }; // Create a copy
    if (newLikedDishes[item.idMeal]) {  // Check if dish is already liked
      delete newLikedDishes[item.idMeal];
    } else {
      let x={like:true, item}
      newLikedDishes[item.idMeal] = x
      
    }
    saveLocalData("wishList",newLikedDishes);
    setLikedDishes(newLikedDishes);
     // Update local storage
  };



  gsap.registerPlugin(useGSAP);
  const bBox = useRef();
  useGSAP(
    () => {
      gsap.fromTo(
        ".NoDishChoosed",
        { backgroundColor: "red", color: "white", scale: 0 },
        {
          backgroundColor: "black",
          color: "white",
          duration: 1,
          repeat: -1,
          yoyo: true,
          scale: 1,
        }
      );
    },
    { scope: bBox }
  );

  return (
    <div className="detailC">
      {SData.idMeal ? (
        <div className="Dbox">
          <h2>{SData.strMeal}</h2>
          <div className="ImgBox">
            <img src={SData.strMealThumb} alt="img" />
          </div>
          <div className="likeNCat">
            <h2>
              CATEGORY: <span>{SData.strCategory}</span>
            </h2>
            <div className="like" style={{ paddingLeft: "2%" }}>
              {!likedDishes[SData?.idMeal]? (
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => handleLikeSet(SData)}
                >
                  <path
                    d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
                    stroke="#000000"
                  />
                </svg>
              ) : (
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => handleLikeSet(SData)}
                >
                  <path
                    d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
                    fill="red"
                  />
                </svg>
              )}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "start",
            }}
          >
            <table>
              <thead>
                <tr>
                  <th>INGREDIENTS</th>
                  <th>MEASURE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{SData.strIngredient1}</td>
                  <td>{SData.strMeasure1}</td>
                </tr>
                <tr>
                  <td>{SData.strIngredient2}</td>
                  <td>{SData.strMeasure2}</td>
                </tr>
                <tr>
                  <td>{SData.strIngredient3}</td>
                  <td>{SData.strMeasure3}</td>
                </tr>
                <tr>
                  <td>{SData.strIngredient4}</td>
                  <td>{SData.strMeasure4}</td>
                </tr>
                <tr>
                  <td>{SData.strIngredient4}</td>
                  <td>{SData.strMeasure4}</td>
                </tr>
              </tbody>
            </table>
            <div className="yumm">
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.u0We4JIK_T5HmIrtv3NB2QHaHa&pid=Api&P=0&h=180"
                alt="yumm"
              />
            </div>
            <table>
              <thead>
                <tr>
                  <th>INGREDIENTS</th>
                  <th>MEASURE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{SData.strIngredient6}</td>
                  <td>{SData.strMeasure6}</td>
                </tr>
                <tr>
                  <td>{SData.strIngredient7}</td>
                  <td>{SData.strMeasure7}</td>
                </tr>
                <tr>
                  <td>{SData.strIngredient8}</td>
                  <td>{SData.strMeasure8}</td>
                </tr>
                <tr>
                  <td>{SData.strIngredient9}</td>
                  <td>{SData.strMeasure9}</td>
                </tr>
                <tr>
                  <td>{SData.strIngredient10}</td>
                  <td>{SData.strMeasure10}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="para">
            <p>{SData.strInstructions}</p>
          </div>
        </div>
      ) : (
        <div ref={bBox} className="NoBox">
          <div className="NoDishChoosed">
            <h1>Please Choose The Dish </h1>
          </div>
        </div>
      )}
    </div>
  );
};
