import "./style.scss";

const Header = () => {
  return (
    <section className="header-section">
      <div className="header">
        <div className="header-navigation-container">
          <div className="brand">
            <img src="/dress.png" alt="brand" />
          </div>
          <div className="header-navigation">
            <ul className="header-navigation-ul">
              <li className="header-navigation-li">
                <div className="single-navigator">
                  <span>home</span>
                  <div>
                    <img src="" alt="" />
                  </div>
                </div>
              </li>
              <li className="header-navigation-li">
                <div className="single-navigator">
                  <span>shop</span>
                  <div>
                    <img src="" alt="" />
                  </div>
                </div>
              </li>
              <li className="header-navigation-li">
                <div className="single-navigator">
                  <span>blog</span>
                  <div>
                    <img src="" alt="" />
                  </div>
                </div>
              </li>
              <li className="header-navigation-li">
                <div className="single-navigator">
                  <span>portfolio</span>
                  <div>
                    <img src="" alt="" />
                  </div>
                </div>
              </li>
              <li className="header-navigation-li">
                <div className="single-navigator">
                  <span>pages</span>
                  <div>
                    <img src="" alt="" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-navigation-right">
          <ul className="navigation-right-ul">
            <li className="navigation-right-li">
              <div className="single-navigator-right">
                <span>login</span>
                <span>/</span>
                <span>registration</span>
              </div>
            </li>
            <li className="navigation-right-li">
              <div className="single-navigator-right">
                <img src="/search.png" alt="search" />
              </div>
            </li>
            <li className="navigation-right-li">
              <div className="single-navigator-right">
                <img src="/header_heart.png" alt="wishlist" />
              </div>
            </li>
            <li className="navigation-right-li">
              <div className="single-navigator-right">
                <img src="/header_cart.png" alt="cart" />
              </div>
            </li>
            <li className="navigation-right-li">
              <div className="single-navigator-right">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Header;
