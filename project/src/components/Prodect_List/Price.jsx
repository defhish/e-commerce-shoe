export default function Price({oldprice,newprice}){
    let oldstyles={
        textDecorationLine:"line-through",
    }
    let newstyles={
        fontWeight:"bold",
    }
    let styles={
        backgroundColor:"white",
        borderRadius:"10px",
        width:"130px",
        marginLeft:"65px",
        boxShadow: "-2px -2px 2px 2px rgb(217, 208, 208)",
    }
    return(
        <div style={styles}>
            <span style={oldprice>"$2000"?{textDecorationLine:"line-through"}:null}>{oldprice}</span>
            &nbsp; &nbsp;
            {oldprice>="$2000"?<span style={newstyles}>{newprice}</span>:null}
        </div>
    );
}