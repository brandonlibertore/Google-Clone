import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Search from './pages/Search';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          {/* HOME PAGE (GOOGLE HOME PAGE) */}
          <Route path='/' exact element={<Home />}/>

          {/* SEARCH PAGE (GOOGLE RESULTS PAGE) */} 
          <Route path='/search' element={<Search />}/>
        </Routes>
    </Router>
  );
}

export default App;
