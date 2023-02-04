import "./Header.css";
import { Link } from "react-router-dom";
import { User, Loader, Search } from "../../allComponents";
import { useDispatch, useSelector } from "react-redux";
import { BiShoppingBag } from "react-icons/bi";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);
  const { cartItems } = useSelector(state => state.cart)
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <header className="header">
          <div className="scontainer flex">
            <div className="logo">
              <Link to="/">
                <img
                  src="/assets/HB-black.png"
                  alt="Hatey bazarey"
                  style={{ height: "70px", width: "140px" }}
                />
              </Link>
            </div>
            <Search />
            <div className="account flexCenter">
              <Link to="/cart">
                <div className="card">
                  <BiShoppingBag className="cardIcon" />
                  <span className="flexCenter">{cartItems.length}</span>
                </div>
              </Link>
              <User />
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
