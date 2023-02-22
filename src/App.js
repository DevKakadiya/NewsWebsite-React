
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import News from './components/News';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  
  return (
      <>
 <Router>    
 <Routes>
  <Route path='/' element={
          <>
          <NavBar/>
           <News key={"Home"} />
              <Footer/>
          </>
  }/>

<Route path='/business' element={
          <>
          <NavBar/>
           <News key={"business"} category={"business"}/>
              <Footer/>
          </>
  }/>
    <Route path='/entertainment' element={
          <>
          <NavBar/>
           <News key={"entertainment"} category={"entertainment"}/>
              <Footer/>
          </>
  }/>
    <Route path='/general' element={
          <>
          <NavBar/>
           <News key={"general"} category={"general"}/>
              <Footer/>
          </>
  }/>
    <Route path='/health' element={
          <>
          <NavBar/>
           <News key={"health"} category={"health"}/>
              <Footer/>
          </>
  }/>
    <Route path='/science' element={
          <>
          <NavBar/>
           <News key={"science"} category={"science"}/>
              <Footer/>
          </>
  }/>
    <Route path='/sports' element={
          <>
          <NavBar/>
           <News key={"sports"} category={"sports"}/>
              <Footer/>
          </>
  }/>
    <Route path='/technology' element={
          <>
          <NavBar/>
           <News key={"technology"} category={"technology"}/>
              <Footer/>
          </>
  }/>

          
  </Routes>       
 </Router>

     
    
   
        
           
         
       
        
      
              
            

     </>
  );
}

export default App;
