import { useState } from "react";
import { createContext } from "react";
import data from "../../assets/data.json";
export const myContext = createContext();

import React from "react";

const Context = ({ children }) => {
  let [dataArray, setDataArray] = useState([...data]);
  let [likedArray, setLikedArray] = useState([]);

  let currentDate = new Date("2024-02-21").toLocaleDateString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  currentDate = currentDate.split("/").reverse().join("-");
  let [city, setCity] = useState("All");
  let [date, setDate] = useState(currentDate);
  let [price, setPrice] = useState("0-500");
  let [property, setProperty] = useState("House");
  let [isLiked, setIsLiked] = useState(false);
  let [searchedProperty, setSearchedProperty] = useState();
  function getCity(e) {
    console.log(e.target.value);
    setCity(e.target.value);
  }
  function getDate(e) {
    console.log(e.target.value);
    setDate(e.target.value);
  }
  function getPrice(e) {
    console.log(e.target.value);
    setPrice(() => e.target.value);
  }
  function getProperty(e) {
    console.log(e.target.value);
    setProperty(e.target.value);
  }
  function getData() {
    // props.getData(city, price, date, property);
  }

  function getAllData() {
    let minPrice = parseInt(price.split("-")[0]);
    let maxPrice = parseInt(price.split("-")[1]);

      let updatedArray = data.filter((ele) => {
          if (ele.address.includes(city.toUpperCase())) {
              return ele;
          } else if (city.toUpperCase() == "ALL") {
              return ele;
          }
      }).filter((ele) => ele.price >= minPrice && ele.price <= maxPrice)
        .filter((ele) => ele.type.toUpperCase() == property.toUpperCase());
      console.log(updatedArray);
    setDataArray(() => [...updatedArray]);
  }

  function showLiked() {
    console.log("liked");
  }
  function getUserInput(e) {
    console.log(e.target.value);
    if (e.target.value == "") {
      setDataArray([...data]);
    }
    setSearchedProperty(e.target.value);

  }

  function addToLike(id) {
    setIsLiked(() => !isLiked);
    if (!likedArray.includes(id)) {
      setLikedArray((prev) => {
        return [...prev, id];
      });
    } else {
      setLikedArray((prev) => {
        const index = prev.indexOf(id);
        const x = prev.splice(index, 1);
        return [...prev];
      });
    }
  }
  function searchProperty() {
    console.log(searchedProperty);
    let searchedArray=data.filter((ele, idx) => {
      return ele.name.toLowerCase().includes(searchedProperty.toLowerCase());
    })

    setDataArray([...searchedArray]);
  }

  return (
    <div>
      <myContext.Provider
        value={{
          getDate,
          getPrice,
          getProperty,
          getData,
          getUserInput,
          getCity,
          getAllData,
          property,
          city,
          date,
          price,
          dataArray,
          isLiked,
          addToLike,
          likedArray,
          searchProperty,
          searchedProperty,
        }}
      >
        {children}
      </myContext.Provider>
    </div>
  );
};

export default Context;
