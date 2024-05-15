import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export const DetailComponent = ({ SData }) => {
  // console.log(SData);gsap.registerPlugin(useGSAP);

  const roundbox = useRef();
  useGSAP(
    () => {
      // ✅ safe, created during execution, selector text scoped
      gsap.to(".yumm", {
        scale: 1.5,
        duration: 3,
        ease: "elastic",
        repeat: -1,
      });
    },
    { scope: roundbox }
  );

  return (
    <div className="detailC" ref={roundbox}>
      {SData.idMeal ? (
        <div className="Dbox">
          <h2>{SData.strMeal}</h2>
          <div className="ImgBox">
            <img src={SData.strMealThumb} alt="img" />
          </div>
          <div>
            <h2>
              CATEGORY: <span>{SData.strCategory}</span>
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              padding: "3px 3px 3px 3px",
              alignItems: "center",
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
        <div className="NoDishChoosed">
          <h1>Please Choose The Dish </h1>
        </div>
      )}
    </div>
  );
};
