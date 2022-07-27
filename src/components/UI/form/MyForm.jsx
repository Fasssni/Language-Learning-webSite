import React from "react";
import classes from "./MyForm.module.css"
import { useState } from "react";

const MyForm=(...props)=>{
   
   
    const  style={cursor: 'pointer',
    backgroundColor: '#ffffff52',
    borderRadius: '16px',
    fontSize: '14px',
    lineHeight: '18px',
    textAlign: 'center',
    color: '#fff',
    padding:"5px 15px",
    border:"none",
    position:"absolute",
    marginTop:"-200px"


   
}
    const style2={cursor: 'pointer',
        backgroundColor: '#fff',
        borderRadius: '16px',
        fontSize: '14px',
        lineHeight: '18px',
        textAlign: 'center',
        color: 'black',
        padding:"5px 15px",
        border:"none",
        position:"absolute",
        marginTop:"-200px"}
        
        const firstBtn=
        {style:style,form:classes.MyForm}
        const secondBtn=
        {style:style,form:classes.MyForm2}

        const [changeForm,setChangeForm]=useState(style2)
        const [changeForm2,setChangeForm2]=useState(style)
        const [changeColor,setChangeColor]=useState(firstBtn.form)
        const [changeContent, setChangeContent]=useState(props.content)


        const descriptionAdult={title:"Пройдите бесплатныей ознакомительный урок",descript:"Как проходит вводный урок"};
        const descriptionChild={title:"Пройдите бесплатныей ознакомительный урок",descript:"Как проходит вводный урок"};

        const [request, setRequest]=useState(" "); 
 

        

        
        
        
        
    return(
       <div className="form">
       
        <div className="buttons">
        <button style={changeForm}
         onClick={()=>{changeForm2==style ? setChangeForm(style2) : setChangeForm2(style); setChangeForm(style2);     
        setRequest(descriptionAdult);
        setChangeColor(firstBtn.form)}}>Взрослым</button>
       
        <button style={changeForm2} 
        onClick={()=>{changeForm==style ? setChangeForm2(style2) : setChangeForm(style);
        setChangeForm2(style2);
        setChangeColor(secondBtn.form);
        setRequest(descriptionChild)
        console.log(changeForm2)}}>Детям</button>

        
        
        <form className={changeColor}>
        <h2 style={{color:"black"}}>{request.title }</h2>
        </form>

       </div>
       </div>
    )
}

export default MyForm;