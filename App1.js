
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import About from "./Portflio/About";
import Contact from "./Portflio/Contact";
import Header from "./Portflio/Header";
import Home from "./Portflio/Home";
import Skill from "./Portflio/Skill";
import Work from "./Portflio/Work";
import Footer from "./Portflio/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
function App() {
  return (
    <>
    {/* background-color: #333; */}
     <div style={{background:"#333" }}>
        <BrowserRouter>
          <Header></Header>
          <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/Skill" element={<Skill />} />
                <Route path="/work" element={<Work/>}/>
                <Route path="/contact" element={<Contact />} />
              </Routes>
              <Footer></Footer>
              </div>

              
  
      
        
        </BrowserRouter>
          
        </div>
    </>
  );
}

export default App;
