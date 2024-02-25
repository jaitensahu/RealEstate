import React, { memo, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoMdBed } from "react-icons/io";
import { LuBath } from "react-icons/lu";
import { GoDiamond } from "react-icons/go";
import { IconContext } from "react-icons";
import { useContext } from "react";
import { myContext } from "../DataStore/Context";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AllCards = () => {
  let { dataArray, likedArray, addToLike } = useContext(myContext);

  if (dataArray.length == 0) {
    return (
      <div className="notFound">
        <h1>Search Result Not Found... Please Modify Your Search Inputs</h1>
      </div>
    );
  }
  return (
    <div className="cardsContainer">
      {dataArray.map((ele, idx) => {
        return (
          <div className="card" key={idx + "asde"}>
            <div className="imageContainer">
              <LazyLoadImage effect="blur" src={ele.image} alt="" />
            </div>
            <IconContext.Provider value={{ size: "1.5em" }}>
              <div className="detail">
                <div className="price">
                  <h1>Rs {ele.price}/Day</h1>
                  <div onClick={() => addToLike(ele.id)}>
                    {likedArray.includes(ele.id) ? (
                      <FaHeart style={{ color: "red" }} />
                    ) : (
                      <CiHeart />
                    )}
                  </div>
                </div>
                <h2>{ele.name}</h2>
                <p>{ele.address}</p>
                <hr />
                <div className="bottom_data">
                  <div className="bed">
                    <IoMdBed />
                    <span> {ele.beds} Beds</span>
                  </div>
                  <div className="bath">
                    <LuBath />
                    <span> 4 Bath</span>
                  </div>
                  <div className="area">
                    <GoDiamond />
                    <span> 100x20</span>
                  </div>
                </div>
              </div>
            </IconContext.Provider>
          </div>
        );
      })}
    </div>
  );
};

export default memo(AllCards);
