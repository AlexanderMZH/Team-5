import { Routes, Route } from "react-router-dom";

import Main from "../Pages/Main";
import SingleItem from "../Pages/SingleItem";
import Cart from "../Pages/Cart";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/item" element={<SingleItem />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Router;
