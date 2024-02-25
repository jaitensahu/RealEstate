import React, { useRef, useState } from "react";
import { useContext } from "react";
import { IconContext } from "react-icons";
import { IoHomeSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { myContext } from "../DataStore/Context";

const Header = () => {
  let navigateTo = useNavigate();
  let {
    getCity,
    getDate,
    getPrice,
    getProperty,
    getAllData,
    city,
    date,
    price,
    property,
    getUserInput,
    searchProperty,
    searchedProperty,
  } = useContext(myContext);

  return (
    <div>
      <div className="top">
        <IconContext.Provider value={{ size: "1.5em" }}>
          <div className="icon">
            <IoHomeSharp onClick={() => navigateTo("/")} />
          </div>
        </IconContext.Provider>
        <h1>Search properties to rent</h1>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => getUserInput(e)}
            value={searchedProperty}
          />
          <button onClick={searchProperty}>Search</button>
          <button onClick={() => navigateTo("/liked")}>Liked</button>
        </div>
      </div>
      <div className="bottomWrapper">
        <div className="bottom">
          <div className="city">
            <p>Enter City</p>
            <input type="text" value={city} onChange={(e) => getCity(e)} />
          </div>
          <div className="date">
            <p>Date</p>
            <input type="date" value={date} onChange={getDate} />
          </div>
          <div className="price">
            <p>Price</p>
            <select name="" id="" value={price} onChange={getPrice}>
              <option value="0-500">0-500</option>
              <option value="500-1000">500-1000</option>
              <option value="1000-2000">1000-2000</option>
            </select>
          </div>

          <div className="propertyType">
            <p>Property Type</p>
            <select name="" id="" onChange={getProperty} value={property}>
              <option value="House">House</option>
              <option value="Pg">Pg</option>
              <option value="Farm-house">Farm-house</option>
              <option value="villa">villa</option>
              <option value="Hotel">Hotel</option>
              <option value="Oyo">Oyo</option>
            </select>
          </div>

          <button onClick={() => getAllData()}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
