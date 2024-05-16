import image from "../components-imges/discount-imges/img2.jpg";
import "./discount.css";
function Discount() {
  return (
    <>
      <div className="discount-page">
        <img
          className="picture"
          src={image}
          alt="/"
        />
        <div className="discount-content" />
        <div className="content-one">
          <div className="discount-title">
            <p>All Inclusive</p>
            <h1 className="discount-title-content">
              Get{" "}
              <span className="get-discount">Discount</span>{" "}
              For Membership
            </h1>
            <p className="discount-description">
              New membership will get 20% discount for first purchase
            </p>
            <button className="button">
              Reserve Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Discount;