
import TopBrands from "./TopBrands";
import "./newsLetter.css";

export default function NewsLetter(){
    return(
        <div id="sec5">
            <div id="inside1">
                <h2 style={{color:"black"}}>Subscribe to our newsletter</h2>
            </div>
            <div id="inside2">
                <form>
                    <input type="email" placeholder="Email" id="i1"></input>
                    <input type="password" placeholder=" Password" id="i1"></input>
                    <input type="submit" value="Subscribe" id="i2"></input>
                </form>
            </div>
            
            <TopBrands></TopBrands>
        </div>
    )
}