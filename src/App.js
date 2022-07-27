
import './App.css';
import React from "react";
import { BrowserRouter, Route  } from "react-router-dom";
import PostPage from './pages/PostPage';
import About from './pages/About';
function App() {

  return(
    <BrowserRouter>

    
    
    <Route path="/posts"><PostPage/></Route>
    <Route path="/about"><About/></Route>
    
 
    </BrowserRouter>
  )
}

export default App;
