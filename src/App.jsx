import "./App.css";

//import { CardContent } from "./Components/CardContent/CardContent";
import ContentWho from "./Components/Category/QuienesSomos/ContentWho"
//import { Header } from "./Components/NavBar/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";

function App() {
  return (
    <Router>
     
      <Routes>
            <Route exact path='/' element={<Home/>} />  
            <Route path ='/quienessomos' element={<ContentWho/>}/>
        </Routes>
    </Router>
  );
}

export default App;
