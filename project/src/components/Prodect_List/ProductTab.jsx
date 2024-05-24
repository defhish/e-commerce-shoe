import Product from "./Product.jsx";
function ProductTab(){
   
    return(
        <>
        <h2 style={{textAlign:"center",marginTop:"4rem"}}>Explore the widest collection of sportswear</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",marginTop:"0rem"}}>
            <Product title="Adidas ZX" idx={0}/>
            <Product title="Adidas ZX" idx={1} />
            <Product title="Adidas ZX" idx={2}/>
            <Product title="Adidas ZX" idx={3} />
            <Product title="Adidas ZX" idx={4}/>
            <Product title="Adidas ZX" idx={5} />
        </div>
        <button style={{backgroundColor:"black",color:"white",width:"70px",height:"30px",border:"2px solid black",borderRadius:"18px",marginLeft:'50%'}}>More</button>
        </>
    );
}
export default ProductTab;