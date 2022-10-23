import LaunchPage from "./LaunchPage.js";
import SignUp from "./SignUp.js";
import Login from "./Login.js";
import Menu from "./Menu.js";
import Cart from "./Cart.js";
import ThankYou from "./ThankYou.js";
import Missing from "./Missing.js";
import Axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [nameCheck, setNameCheck] = useState([]);
  const [emailCheck, setEmailCheck] = useState([]);
  const [count, setCount] = useState(0);
  const [test1, setTest1] = useState([]);
  const [test2, setTest2] = useState([]);
  const [ordered, setOrdered] = useState([]);
  const [total , setTotal] = useState(0);

  const [vegMenu, setvegMenu] = useState([
    {
      id: 1,
      title: "Veg Fried Rice",
      price: 120,
    },
    {
      id: 2,
      title: "Veg Noodles",
      price: 120,
    },
    {
      id: 3,
      title: "Veg Triple Rice",
      price: 150,
    },
    {
      id: 4,
      title: "Veg Manchurian",
      price: 100,
    },
  ]);

  const [nonVegMenu, setNonVegMenu] = useState([
    {
      id: 1,
      title: "Non-Veg Fried Rice",
      price: 130,
    },
    {
      id: 2,
      title: "Non-Veg Noodles",
      price: 130,
    },
    {
      id: 3,
      title: "Non-Veg Triple Rice",
      price: 170,
    },
    {
      id: 4,
      title: "Non-Veg Manchurian",
      price: 130,
    },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchName = async () => {
      try {
        const response = await Axios.get("http://localhost:3001/getName");
        setTest1(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
        }
      }
    };

    fetchName();
  }, []);

  useEffect(() => {
    const fetchName = async () => {
      try {
        const response = await Axios.get("http://localhost:3001/getEmail");
        setTest2(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
        }
      }
    };

    fetchName();
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!e) return;
    const value1 = name.toString();
    const value2 = email.toString();
    const actualName = { name: value1 };
    try {
      const response = await Axios.post(
        "http://localhost:3001/createName",
        actualName
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    const actualEmail = { email: value2 };
    try {
      const Response = await Axios.post(
        "http://localhost:3001/createEmail",
        actualEmail
      );
      console.log(Response);
    } catch (err) {
      console.log(err);
    }
    navigate("/menu");
  };

  const handleLogout = () => {
    navigate("/");
  };

  const handleReset = () => {
    setOrdered([]);
    setCount(0);
  };

  const checkLoginName = (loginName) => {
    let flag = false;
    test1.map((user) => {
      if (user.name === loginName) {
        flag = true;
      }
    });
    if (flag === true) {
      return true;
    } else {
      return false;
    }
  };

  const checkLoginEmail = (loginEmail) => {
    let flag = false;
    test2.map((user) => {
      if (user.email === loginEmail) {
        flag = true;
      }
    });
    if (flag === true) {
      return true;
    } else {
      return false;
    }
  };

  const handleCheck = (e) => {
    e.preventDefault();
    if (!e) return;
    const value1 = nameCheck;
    const value2 = emailCheck;
    const ans1 = checkLoginName(value1);
    const ans2 = checkLoginEmail(value2);
    if (ans1 && ans2) {
      navigate("/menu");
    } else {
      alert("Wrong email or password");
    }
  };

  const handleClickVeg = (id0) => {
    const orderedDish = vegMenu.filter((item) => item.id === id0);
    const id = ordered.length ? ordered[ordered.length - 1].id + 1 : 1;
    const newDish = {
      id: id,
      title: orderedDish[0].title,
      price: orderedDish[0].price,
    };
    const allOrdered = [...ordered, newDish];
    setOrdered(allOrdered);
    setCount(count + 1);
    setTotal(total + newDish.price);
  };

  const handleClickNonVeg = (id0) => {
    const orderedDish = nonVegMenu.filter((item) => item.id === id0);
    const id = ordered.length ? ordered[ordered.length - 1].id + 1 : 1;
    const newDish = {
      id: id,
      title: orderedDish[0].title,
      price: orderedDish[0].price,
    };
    const allOrdered = [...ordered, newDish];
    setOrdered(allOrdered);
    setCount(count + 1);
    setTotal(total + newDish.price);
  };

  const handleSendMessage = async (arrayQuantity, arrayTitle) => {
    const messageObject = { arrayQuantity, arrayTitle, total}
    try {
      const Response = await Axios.post(
        "http://localhost:3001/sendMessage",
        messageObject
      );
      console.log(Response.data);
    } catch (err) {
      console.log(err);
    }
    setTotal(0);
  }

  return (
    <div className="App">
      <Routes>
        <Route index element={<LaunchPage />} />
        <Route
          path="/signup"
          element={
            <SignUp
              handleSubmit={handleSubmit}
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              handleCheck={handleCheck}
              nameCheck={nameCheck}
              setNameCheck={setNameCheck}
              emailCheck={emailCheck}
              setEmailCheck={setEmailCheck}
            />
          }
        />
        <Route path="/menu">
          <Route
            index
            element={
              <Menu
                vegMenu={vegMenu}
                nonVegMenu={nonVegMenu}
                handleClickVeg={handleClickVeg}
                handleClickNonVeg={handleClickNonVeg}
                count={count}
                handleLogout={handleLogout}
              />
            }
          />
          <Route
            path="/menu/cart"
            element={
              <Cart
                orderedTitle={ordered.map((item) => {
                  return item.title;
                })}
                handleSendMessage={handleSendMessage}
                total={total}
              />
            }
          />
        </Route>
        <Route
          path="/thankyou"
          element={<ThankYou handleReset={handleReset} />}
        />
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
