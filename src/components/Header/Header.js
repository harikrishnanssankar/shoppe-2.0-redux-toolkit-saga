import { useHistory } from "react-router-dom";
import "./Header.css";
import { NavHashLink as Link } from "react-router-hash-link";

const Header = () => {
  const history = useHistory();

  const scrollWithOffset = (el, offset) => {
    window.scroll({
      top: el.offsetTop - offset,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="header__container">
      <div className="header__leftDiv" >
        <i className="bi bi-shop"></i>
        <h3>Shoppe</h3>
      </div>
      <div className="header__centerDiv">
        <Link
          to="/#home"
          activeclass="active"
          spy='true'
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
          spy='true'
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
          spy='true'
          smooth={true}
          scroll={(el) => scrollWithOffset(el, 0)}
          exact
          className="header__link"
        >
          <h4>Collections</h4>
        </Link>
        <h4>All Products</h4>
      </div>
      <div className="header__rightDiv">
        <i className="bi bi-search"></i>
        <i className="bi bi-cart2"></i>
      </div>
    </div>
  );
};

export default Header;
