import shoef1 from "../../assets/Product_Page/Product_1_Sqare.png";
import map from "../../assets/Product_Page/India.png";
import days from "../../assets/Product_Page/Exchange.png";
import delivery from "../../assets/Product_Page/Delivery.png";
import features from "../../assets/Product_Page/Feature_logo.png";
import reviews from "../../assets/Product_Page/Review_logo.png";
import QueAns from "../../assets/Product_Page/FYQs.png";
import care from "../../assets/Product_Page/Care_Info_logo.png";
import similarProd from "../../assets/Product_Page/Similar_product_logo.png";
import MenuListComposition from "./MenuListComposition";
import According from "./QnsAns";

function Service() {
  return (
    <>
        <div className="prod">
            <img src={shoef1} alt="adidas" className="left-img"/>
            {/* <Carousel data={slides} currentSlide={slide} setCurrentSlide={setSlide}/> */}
            <div className="prod3">
                <div className="services">
                <p className="ser"><img src={days} alt="free"/><br></br>7 days Free <br></br> Exchange Policy</p>
                <p className="ser"><img src={map} alt="india-map"/><br></br>Made in India <br></br> With Love</p>
                <p className="ser"><img src={QueAns} alt="delivery"/><br></br>Free Delivery <br></br> Within 4-5 days</p>
                
                </div>
                <MenuListComposition/>
            </div> 
        </div>
        <div className="feature">
        <p className="ser"><img src={features} alt="features"/><br></br><b>Features</b></p>
        <p className="ser"><img src={reviews} alt="reviews"/><br></br><b>Reviews</b></p>
        <p className="ser"><img src={QueAns} alt="QueAns"/><br></br><b>FYQs</b></p>
        <p className="ser"><img src={care} alt="care"/><br></br><b>Care&info</b></p>
        <p className="ser"><img src={similarProd} alt="similarProd"/><br></br><b>Similar Product</b></p>
        </div>
        <According></According>
    </>
  )
}

export default Service