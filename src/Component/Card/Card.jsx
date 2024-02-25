// import React, { memo, useState } from "react";
// import { CiHeart } from "react-icons/ci";
// import { FaHeart } from "react-icons/fa";
// import { IoMdBed } from "react-icons/io";
// import { LuBath } from "react-icons/lu";
// import { GoDiamond } from "react-icons/go";
// import { IconContext } from "react-icons";
// import { useContext } from "react";
// import { myContext } from "../DataStore/Context";

// const Card = (props) => {
//   let { isLiked, addToLike } = useContext(myContext);
  // let [isLiked, setIsLiked] = useState(false);
  
  // function addToLike(id) {
  //   setIsLiked(() => !isLiked);
  //   if (!props.likedCard.includes(id)) {
  //     props.liked((prev) => {
  //       return [...prev, id];
  //     });
  //   } else {
  //     props.liked((prev) => {
  //       const index = prev.indexOf(id);
  //       const x = prev.splice(index, 1);
  //       return [...prev];
  //     });
  //   }

  // }
  // return (
  //   // <div className="card">
  //   //   <div className="imageContainer">
  //   //     <img src={props.image} alt="" />
  //   //   </div>
  //   //   <IconContext.Provider value={{ size: "1.5em" }}>
  //   //     <div className="detail">
  //   //       <div className="price">
  //   //         <h1>Rs {props.price}/Day</h1>
  //   //         <div onClick={() => addToLike(props.id)}>
  //   //           {isLiked ? <FaHeart style={{ color: "red" }} /> : <CiHeart />}
  //   //         </div>
  //   //       </div>
  //   //       <h2>{props.name}</h2>
  //   //       <p>{props.address}</p>
  //   //       <hr />
  //   //       <div className="bottom_data">
  //   //         <div className="bed">
  //   //           <IoMdBed />
  //   //           <span> {props.beds} Beds</span>
  //   //         </div>
  //   //         <div className="bath">
  //   //           <LuBath />
  //   //           <span> 4 Bath</span>
  //   //         </div>
  //   //         <div className="area">
  //   //           <GoDiamond />
  //   //           <span> 100x20</span>
  //   //         </div>
  //   //       </div>
  //   //     </div>
  //   //   </IconContext.Provider>
  //   // </div>
  // );
// };

// export default memo(Card);
