import Nav from "./Nav.js";
import { BiFoodTag } from "react-icons/bi";
import { useState } from "react";

const Menu = ({
  vegMenu,
  nonVegMenu,
  handleClickVeg,
  handleClickNonVeg,
  count,
  handleLogout
}) => {

  return (
    <div>
      <Nav count={count} handleLogout={handleLogout}/>
      <>
        <h3>Veg</h3>
        <BiFoodTag color="green" />
        {vegMenu.map((dish) => {
          return (
            <div>
              <p>{dish.id}</p>
              <p>{dish.title}</p>
              <p>{dish.price}</p>
              <button onClick={() => handleClickVeg(dish.id)}>
                Add to Cart
              </button>
            </div>
          );
        })}
      </>
      <>
        <h3>Non Veg</h3>
        <BiFoodTag color="red" />
        {nonVegMenu.map((dish) => {
          return (
            <div>
              <p>{dish.id}</p>
              <p>{dish.title}</p>
              <p>{dish.price}</p>
              <button onClick={() => handleClickNonVeg(dish.id)}>
                Add to Cart
              </button>
            </div>
          );
        })}
      </>
    </div>
  );
};

export default Menu;
