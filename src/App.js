import Navbar from './Navbar';
import Home from './Home';
import Hobbies from './Hobbies';
import About from './about';
import Experience from './Experience';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';

function App() {
 
  return (
   
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/hobbies" element={<Hobbies/>}/>
            <Route path="/experience" element={<Experience/>}/>
            <Route path="*" element={<NotFound/>}/>
    
          </Routes>
        </div>
        

          
      </div>
    </Router>
  );
}

export default App;
