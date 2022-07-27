import '../App.css';
import React from "react";
import MyMenu from "../components/UI/MyMenu";
import "../styles/top.css";
import FirstPage from "../components/firstPage"
import SecondPage from "../components/SecondPage"


function PostPage() {

 const menus=[{value:"Варианты обучения",link:"/about"},{value:"Что о нас говорят",link:"/about"}, {value:"Онлайн-тест",link:"/about"}, {value:"Eще",link:"/about"}]

 const contentPost1=[{title:"krgel;rg"},{text:"eorgkerkg"}, {pic:"some"}]
 const contentPost2={title:"krgel;rg",text:"eorgkerkg", pic:"some"}

 
 
 const ChangeTheForm =()=>{
  
  
 }
  return (
 
   

    <div className="App">
     <MyMenu menus={menus}/>
     <FirstPage/>
     <SecondPage content={contentPost1} content2={contentPost2}/>
    
     
     

      
    </div>
  );
}

export default PostPage;
