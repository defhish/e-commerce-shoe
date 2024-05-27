import nike from "../../assets/Top_Brands/NikeLogo.png";
import gucci from "../../assets/Top_Brands/gucci.png";
import lv from "../../assets/Top_Brands/lv.png";
import adidas from "../../assets/Top_Brands/adidas.png";
import skechers from "../../assets/Top_Brands/Skechers-logo.png";
import "./newsLetter.css";

export default function NewsLetter(){
    return(
        <div id="sec5">
            <div id="inside1">
                <h2>Subscribe to our newsletter</h2>
            </div>
            <div id="inside2">
                <form>
                    <input type="email" placeholder="Email" id="i1"></input>
                    <input type="password" placeholder=" Password" id="i1"></input>
                    <input type="submit" value="Subscribe" id="i2"></input>
                </form>
            </div>
            <div className="Topbrands">
                <h2> Top brands Collections</h2>
                    <div className="flex1">
                        <div><img src={nike} className="shoe-img"></img></div>
                        <div><img src={gucci} className="shoe-img"></img></div>
                        <div><img src={lv} className="shoe-img"></img></div>
                        <div><img src={adidas} className="shoe-img"></img></div>
                        <div><img src={skechers} className="shoe-img"></img></div>
                    </div>

                    </div>
            
        </div>
    )
}