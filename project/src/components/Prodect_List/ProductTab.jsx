import Product from "./Product.jsx";
<<<<<<< HEAD
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
=======
function ProductTab() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          margin: "2rem",
        }}
      >
        <Product title="Adidas ZX" idx={0} />
        <Product title="Adidas ZX" idx={1} />
        <Product title="Adidas ZX" idx={2} />
        <Product title="Adidas ZX" idx={3} />
        <Product title="Adidas ZX" idx={4} />
        <Product title="Adidas ZX" idx={5} />
      </div>
      <button
        style={{
          backgroundColor: "black",
          color: "white",
          height: "4rem",
          width: "10rem",
          border: "none",
          display: "block",
          margin: "2rem auto",
          fontSize: "1.3rem",
          cursor: "pointer",
        }}
      >
        More
      </button>
    </>
  );
>>>>>>> a6b9995bf361f7a9ec375002f571b7ad5536ef96
}
export default ProductTab;
