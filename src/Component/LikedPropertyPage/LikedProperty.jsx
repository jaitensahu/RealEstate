import React, { useContext } from "react";
// import Card from "../Card/Card";
import data from "../../assets/data.json";
import { myContext } from "../DataStore/Context";
import { IconContext } from "react-icons";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoMdBed } from "react-icons/io";
import { LuBath } from "react-icons/lu";
import { GoDiamond } from "react-icons/go";

const LikedProperty = () => {
  // console.log(props.oriData);
  let { likedArray, dataArray, isLiked, setLikedArray, addToLike } =
    useContext(myContext);
  console.log(likedArray);
  return (
    <div className="cardsContainer">
      {data.map((ele, idx) => {
        if (likedArray.includes(ele.id)) {
          return (
            <div className="card">
              <div className="imageContainer">
                <img src={ele.image} alt="" />
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
        }
      })}
    </div>
  );
};

export default LikedProperty;
