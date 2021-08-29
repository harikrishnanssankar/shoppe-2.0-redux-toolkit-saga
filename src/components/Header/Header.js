import { useHistory } from "react-router-dom";
import "./Header.css";
import { NavHashLink as Link } from "react-router-hash-link";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();
  const scrollWithOffset = (el, offset) => {
    setShowMenu(false);
    window.scroll({
      top: el.offsetTop - offset,
      left: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="header__container">
      <h3 className="header__menuBtn" onClick={() => setShowMenu(!showMenu)}>
        <i className="bi bi-list"></i>
      </h3>
      <div className="header__leftDiv">
        <i className="bi bi-shop"></i>
        <h3>Shoppe</h3>
      </div>

      <div className="header__centerDiv">
        <Link
          to="/#home"
          activeclass="active"
          spy="true"
          smooth={true}
          scroll={(el) => scrollWithOffset(el, 0)}
          exact
          className="header__link"
        >
          <h4>Home</h4>
        </Link>
        <Link
          to="/#exclusive"
          activeclass="active"
          spy="true"
          smooth={true}
          scroll={(el) => scrollWithOffset(el, 0)}
          exact
          className="header__link"
        >
          <h4>Exclusive</h4>
        </Link>
        <Link
          to="/#collection"
          activeclass="active"
          spy="true"
          smooth={true}
          scroll={(el) => scrollWithOffset(el, 0)}
          exact
          className="header__link"
        >
          <h4>Collections</h4>
        </Link>
        <h4 onClick={() => history.push('/allproducts')} >All Products</h4>
      </div>
      <div className="header__rightDiv">
        <i className="bi bi-search"></i>
        <i className="bi bi-cart2"></i>
      </div>

      {showMenu && (
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100vh",
            top: 0,
            backgroundColor: "#f3ba00ee",
            left: "0px"
          }}
        >
          <div className="header__menu">
            <i
              onClick={() => setShowMenu(false)}
              className="bi bi-x-lg header__menuCloseBtn"
            ></i>
            <Link
              to="/#home"
              activeclass="active"
              spy="true"
              smooth={true}
              scroll={(el) => scrollWithOffset(el, 0)}
              exact
              className="header__link"
            >
              <h4>Home</h4>
            </Link>
            <Link
              to="/#exclusive"
              activeclass="active"
              spy="true"
              smooth={true}
              scroll={(el) => scrollWithOffset(el, 0)}
              exact
              className="header__link"
            >
              <h4>Exclusive</h4>
            </Link>
            <Link
              to="/#collection"
              activeclass="active"
              spy="true"
              smooth={true}
              scroll={(el) => scrollWithOffset(el, 0)}
              exact
              className="header__link"
            >
              <h4>Collections</h4>
            </Link>
            <h4 onClick={() => history.push('/allproducts')} >All Products</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
