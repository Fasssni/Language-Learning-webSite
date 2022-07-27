import React from "react"; 
import { Link } from "react-router-dom";
import classes from "./MyMenu.module.css";


const MyMenu=({menus})=>{
    var i=0;
    return(
    <div className="top"> 
   <h2 className="logo">Tongue&Co.</h2>
    <ul className={classes.MyMN}>
    {menus.map((p)=>
   <a key={i++}  href={p.link}><li style={{marginLeft:"70px"}}key={i++}>{p.value}</li></a>)}

    </ul>


    </div>)
}

export default MyMenu;