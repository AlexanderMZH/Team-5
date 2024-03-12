import { useState } from "react";

import "./style.scss";

const SingleItem = () => {
  const [allActive, setAllActive] = useState("active");
  const [dressesActive, setDressesActive] = useState("");
  const [topsActive, setTopsActive] = useState("");
  const [outerWearActive, setOuterWearActive] = useState("");
  const [jacketActive, setJacketActive] = useState("");

  const productNavActiveToggle = (param: String) => {
    setAllActive("");
    setDressesActive("");
    setTopsActive("");
    setOuterWearActive("");
    setJacketActive("");
    if (param === "all") {
      setAllActive((preState) => (preState === "" ? "active" : ""));
    } else if (param === "dresses") {
      setDressesActive((preState) => (preState === "" ? "active" : ""));
    } else if (param === "tops") {
      setTopsActive((preState) => (preState === "" ? "active" : ""));
    } else if (param === "outerwear") {
      setOuterWearActive((preState) => (preState === "" ? "active" : ""));
    } else if (param === "jacket") {
      setJacketActive((preState) => (preState === "" ? "active" : ""));
    }
  };

  return (
    <>
      <section className="popular-product-section">
        <div className="popular-product-nav">
          <div>
            <h1>Most Popular Products</h1>
          </div>
          <div className="product-nav">
            <ul>
              <li
                className={allActive}
                onClick={() => {
                  productNavActiveToggle("all");
                }}
              >
                <div>
                  <span>all</span>
                </div>
              </li>
              <li
                className={dressesActive}
                onClick={() => {
                  productNavActiveToggle("dresses");
                }}
              >
                <div>
                  <span>Dresses</span>
                </div>
              </li>
              <li
                className={topsActive}
                onClick={() => {
                  productNavActiveToggle("tops");
                }}
              >
                <div>
                  <span>tops</span>
                </div>
              </li>
              <li
                className={outerWearActive}
                onClick={() => {
                  productNavActiveToggle("outerwear");
                }}
              >
                <div>
                  <span>outerwear</span>
                </div>
              </li>
              <li
                className={jacketActive}
                onClick={() => {
                  productNavActiveToggle("jacket");
                }}
              >
                <div>
                  <span>jacket</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="popular-product-container">
          <ul className="popular-product-container-ul">
            <li className="popular-product-container-li">
              <div className="popular-product">
                <div className="popular-product-image">
                  <img src="./dress.png" alt="" />
                </div>
                <div className="popular-product-features">
                  <div className="features-text">
                    <span>get 20% off</span>
                  </div>
                  <div className="features-icons">
                    <img src="./heart.png" alt="" />
                    <img src="./cart.png" alt="" />
                  </div>
                </div>
                <div className="view">
                  <span>quick view</span>
                </div>
                <div className="popular-product-name">
                  <h3>cazy knit cardigan sweater</h3>
                  <h3>80$</h3>
                </div>
              </div>
            </li>
            <li className="popular-product-container-li">
              <div className="popular-product">
                <div className="popular-product-image">
                  <img src="./dress.png" alt="" />
                </div>
                <div className="popular-product-features">
                  <div className="features-text">
                    <span>get 20% off</span>
                  </div>
                  <div className="features-icons">
                    <img src="./heart.png" alt="" />
                    <img src="./cart.png" alt="" />
                  </div>
                </div>
                <div className="view ">
                  <span>quick view</span>
                </div>
                <div className="popular-product-name">
                  <h3>cazy knit cardigan sweater</h3>
                  <h3>80$</h3>
                </div>
              </div>
            </li>
            <li className="popular-product-container-li">
              <div className="popular-product">
                <div className="popular-product-image">
                  <img src="./dress.png" alt="" />
                </div>
                <div className="popular-product-features">
                  <div className="features-text">
                    <span>get 20% off</span>
                  </div>
                  <div className="features-icons">
                    <img src="./heart.png" alt="" />
                    <img src="./cart.png" alt="" />
                  </div>
                </div>
                <div className="view ">
                  <span>quick view</span>
                </div>
                <div className="popular-product-name">
                  <h3>cazy knit cardigan sweater</h3>
                  <h3>80$</h3>
                </div>
              </div>
            </li>
            <li className="popular-product-container-li">
              <div className="popular-product">
                <div className="popular-product-image">
                  <img src="./dress.png" alt="" />
                </div>
                <div className="popular-product-features">
                  <div className="features-text">
                    <span>get 20% off</span>
                  </div>
                  <div className="features-icons">
                    <img src="./heart.png" alt="" />
                    <img src="./cart.png" alt="" />
                  </div>
                </div>
                <div className="view">
                  <span>quick view</span>
                </div>
                <div className="popular-product-name">
                  <h3>cazy knit cardigan sweater</h3>
                  <h3>80$</h3>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default SingleItem;
