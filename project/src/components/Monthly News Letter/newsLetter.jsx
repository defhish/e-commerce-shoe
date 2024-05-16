import nike from "../components-imges/NewsLetter-imges/NikeLogo.png";
import gucci from "../components-imges/NewsLetter-imges/gucci.png";
import lv from "../components-imges/NewsLetter-imges/lv.png";
import adidas from "../components-imges/NewsLetter-imges/adidas.png";
import skechers from "../components-imges/NewsLetter-imges/Skechers-logo.png";
import "./newsLetter.css";

export default function NewsLetter(){
    return(
        <div id="sec5">
            <div id="inside1">
                <h2>Monthly News Letter</h2>
                <p>
                  We've got everything you need to step up your summer wardrobe, from breezy sandals to comfortable sneakers. Shop our new arrivals now and find the perfect pair for your sunny adventures!
                </p>
            </div>
            <div id="inside2">
                <form>
                    <input type="email" placeholder="Please enter your email" id="i1"></input>
                    <input type="submit" value="save" id="i2"></input>
                </form>
            </div>
                <h2> Top brands Collections</h2>
                    <div className="flex1">
                        <div><img src={nike} className="shoe-img"></img></div>
                        <div><img src={gucci} className="shoe-img"></img></div>
                        <div><img src={lv} className="shoe-img"></img></div>
                        <div><img src={adidas} className="shoe-img"></img></div>
                        <div><img src={skechers} className="shoe-img"></img></div>
                    </div>
            
        </div>
    )
}