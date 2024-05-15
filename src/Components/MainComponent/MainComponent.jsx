import React, { useEffect, useState } from "react";
import { ListComponent } from "../ListComponent/ListComponent";
import { DetailComponent } from "../DetailComponent/DetailComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  getRestaurantsListFailure,
  getRestaurantsListRequest,
  getRestaurantsListSuccess,
} from "../../Redux/actions";
import axios from "axios";

export const MainComponent = () => {
  const dispatch = useDispatch();
  const {list,isLoading,isError} = useSelector((store)=>store);
  const [SData,setSData]=useState({})

 
  useEffect(() => {
    const getList = () => {
        dispatch(getRestaurantsListRequest());
        axios.get("https://www.themealdb.com/api/json/v1/1/search.php?f=s")
          .then((r) => {
            // console.log(r)
            dispatch(getRestaurantsListSuccess(r.data.meals));
          })
          .catch((e) => dispatch(getRestaurantsListFailure(e)));
      }
    if (list.length===0) {
      getList();
    }
  },[dispatch,list]);

  return (
    <>
    {isLoading?<div>LOADING</div>:isError?<div>OOPS!! Error: Data Not Found</div>:<div className="mainC">
    <ListComponent List={list} setSData={setSData}/>
    <DetailComponent SData={SData}/>
  </div>}
    </>
  );
};
