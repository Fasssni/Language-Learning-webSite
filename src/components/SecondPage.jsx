import React  from "react";
import MyForm from "./UI/form/MyForm";

const SecondPage=({content, content2})=>{
    return(
        <div className="secondPage">
     <MyForm content={content} content2={content2}></MyForm>

        </div>
    )
}

export default SecondPage;