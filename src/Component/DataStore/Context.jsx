import { useState } from "react";
import { createContext } from "react";
import data from "../../assets/data.json";
export const myContext = createContext();
import React from "react";

const Context = ({ children }) => {
  // Getting current Date to set on date input
  let currentDate = new Date("2024-02-21").toLocaleDateString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  currentDate = currentDate.split("/").reverse().join("-");

  // All States Defined Here
  let [dataArray, setDataArray] = useState([...data]);
  let [likedArray, setLikedArray] = useState([]);
  let [city, setCity] = useState("All");
  let [date, setDate] = useState(currentDate);
  let [price, setPrice] = useState("All");
  let [property, setProperty] = useState("All");
  let [isLiked, setIsLiked] = useState(false);
  let [searchedProperty, setSearchedProperty] = useState();

  // Functions To City, Date, Price, Property
  function getCity(e) {
    setCity(e.target.value);
  }
  function getDate(e) {
    setDate(e.target.value);
  }
  function getPrice(e) {
    setPrice(() => e.target.value);
  }
  function getProperty(e) {
    setProperty(e.target.value);
  }
  // -------------------------------------------

  // (Executes on Clicking on submit button) Function to gat all the inputs and filter the data according to the Input
  function getAllData() {
    let minPrice = parseInt(price.split("-")[0]);
    let maxPrice = parseInt(price.split("-")[1]);

    let updatedArray = data
      .filter((ele) => {
        if (ele.address.includes(city.toUpperCase())) {
          return ele;
        } else if (city.toUpperCase() == "ALL") {
          return ele;
        }
      })
      .filter((ele) => {
        if (price == "All") {
          return true;
        }
        return ele.price >= minPrice && ele.price <= maxPrice;
      })
      .filter((ele) => {
        if (property.toUpperCase() == "ALL") {
          return true;
        }
        return ele.type.toUpperCase() == property.toUpperCase();
      });
    setDataArray(() => [...updatedArray]);
  }
  // ----------------------------------------------------------------------------------------------------------

  // Function to get and set serach bar input from user
  function getUserInput(e) {
    if (e.target.value == "") {
      setDataArray([...data]);
    }
    setSearchedProperty(e.target.value);
  }
  // -----------------------------------------------------------------

  // Function to add liked card to the likedArray
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
  // -----------------------------------------------------------

  // (Executes on clicking on search button) Updates The Data according to searched input
  function searchProperty() {
    let searchedArray = data.filter((ele, idx) =>
      ele.name.toLowerCase().includes(searchedProperty.toLowerCase())
    );
    setDataArray([...searchedArray]);
  }
  // -------------------------------------------------------------------------------------

  return (
    <div>
      <myContext.Provider
        value={{
          getDate,
          getPrice,
          getProperty,
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
