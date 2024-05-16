import "./Product.css";
import { useRef, useEffect } from 'react';
import Price from "./Price.jsx";
function Product({title,idx}){
    let oldprices=["$2,000","$2,000","$2,000","$3,000","$2,000","$2,000","$5,000","$2,000"];
    let newprices=["$1,000","$1,000","$1,000","$1,000","$1,000","$1,000","$1,000","$1,000"];
    let description=["Our collection of shoes for men comprises of the latest trends in every style and has something just perfect, for every occasion and for everybody",
    "Our collection of shoes for men comprises of the latest trends in every style and has something just perfect, for every occasion and for everybody",
    "Our collection of shoes for men comprises of the latest trends in every style and has something just perfect, for every occasion and for everybody",
    "Our collection of shoes for men comprises of the latest trends in every style and has something just perfect, for every occasion and for everybody",
    "Our collection of shoes for men comprises of the latest trends in every style and has something just perfect, for every occasion and for everybody",
    "Our collection of shoes for men comprises of the latest trends in every style and has something just perfect, for every occasion and for everybody",
    "Our collection of shoes for men comprises of the latest trends in every style and has something just perfect, for every occasion and for everybody",
    "Our collection of shoes for men comprises of the latest trends in every style and has something just perfect, for every occasion and for everybody",
    ]
    let image=[
        "https://github.com/developedbyed/3d-card-effect/blob/master/adidas.png?raw=true",
        "https://github.com/developedbyed/3d-card-effect/blob/master/adidas.png?raw=true",
        "https://github.com/developedbyed/3d-card-effect/blob/master/adidas.png?raw=true",
        "https://github.com/developedbyed/3d-card-effect/blob/master/adidas.png?raw=true",
        "https://github.com/developedbyed/3d-card-effect/blob/master/adidas.png?raw=true",
        "https://github.com/developedbyed/3d-card-effect/blob/master/adidas.png?raw=true",
        "https://github.com/developedbyed/3d-card-effect/blob/master/adidas.png?raw=true",
        "https://github.com/developedbyed/3d-card-effect/blob/master/adidas.png?raw=true",
    ]
    const productRef = useRef(null);
    const handleMouseMove = (e) => {
        const product = productRef.current;
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        // product.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      };
      const handleMouseEnter = () => {
        const product = productRef.current;
        // product.style.transition = 'none';
        // // product.querySelector('.title').style.transform = 'translateZ(150px)';
        product.querySelector('.sneaker img').style.transform = 'translateZ(200px) rotateZ(-45deg)';
        // product.querySelector('.description').style.transform = 'translateZ(125px)';
        // product.querySelector('.sizes').style.transform = 'translateZ(100px)';
        // product.querySelector('.purchase').style.transform = 'translateZ(75px)';
      };
    
      const handleMouseLeave = () => {
        const product = productRef.current;
        // product.style.transition = 'all 0.5s ease';
        // product.style.transform = 'rotateY(0deg) rotateX(0deg)';
        // product.querySelector('.title').style.transform = 'translateZ(0px)';
        product.querySelector('.sneaker img').style.transform = 'translateZ(0px) rotateZ(0deg)';
        // product.querySelector('.description').style.transform = 'translateZ(0px)';
        // product.querySelector('.sizes').style.transform = 'translateZ(0px)';
        // product.querySelector('.purchase').style.transform = 'translateZ(0px)';
      };
    
      useEffect(() => {
        const product = productRef.current;
        product.addEventListener('mousemove', handleMouseMove);
        product.addEventListener('mouseenter', handleMouseEnter);
        product.addEventListener('mouseleave', handleMouseLeave);
    
        return () => {
          product.removeEventListener('mousemove', handleMouseMove);
          product.removeEventListener('mouseenter', handleMouseEnter);
          product.removeEventListener('mouseleave', handleMouseLeave);
        };
      }, []);
    return(
    <div className="Product" ref={productRef}>

        <div className="sneaker">
           <div className="circle"></div>
            <img src={image[idx]} alt="sample shoe" className="product-img"/>
        </div>

    <div className="about-card">
            <h3 id="title">{title}</h3>
            <p>{description[idx]}</p>

        <div className="price">
            <Price oldprice={oldprices[idx]}  newprice={newprices[idx]}/>
        </div>
    </div>
        <button id="purchase-btn">Purchase</button>
    </div>
        
    );
}
export default Product;