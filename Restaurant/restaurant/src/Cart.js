import { useState } from "react";
import { Link } from "react-router-dom";
const Cart = ({ orderedTitle, total,  handleSendMessage }) => {
  if (orderedTitle === null) {
    console.log("Its null");
  }
  var occurrences = orderedTitle.reduce(function (obj, item) {
    obj[item] = (obj[item] || 0) + 1;
    return obj;
  }, {});
  delete occurrences[""];

  function findPrice(dishName) {
    if (dishName === "Veg Fried Rice" || dishName === "Veg Noodles") {
      return 120;
    } else if (dishName === "Veg Triple Rice") {
      return 150;
    } else if (dishName === "Veg Manchurian") {
      return 100;
    } else if (
      dishName === "Non-Veg Fried Rice" ||
      dishName === "Non-Veg Noodles" ||
      dishName === "Non-Veg Manchurian"
    ) {
      return 130;
    } else if (dishName === "Non-Veg Triple Rice") {
      return 170;
    }
  }

  const myArrayQuantity = Object.values(occurrences);
  const myArrayTitle = Object.keys(occurrences);

  return (
    <div>
      <h1>Cart</h1>
      <button>
        <Link to="/menu">Add more</Link>
      </button>
      <form>
        <button onClick={() => { handleSendMessage(myArrayQuantity, myArrayTitle)}} type="submit">
          <Link to="/thankyou">Place order</Link>
        </button>
      </form>
      {myArrayQuantity.map((Element) => {
        return <h1>{Element}</h1>;
      })}
      {myArrayTitle.map((Element) => {
        return (
          <div>
            <h1>{Element}</h1>
            <h2>{findPrice(Element)}</h2>
          </div>
        );
      })}
      <h1>Total Price : {total}</h1>
    </div>
  );
};

export default Cart;
