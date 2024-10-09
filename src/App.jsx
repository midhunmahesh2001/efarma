import './App.css';
import Nav from './Components/Nav/Nav.jsx';
import Header from './Components/Header/Header.jsx';
import Advertise from './Components/Advertise/Advertise.jsx';
import Highlights from './Components/Highlights/Highlights.jsx';
import Brands from './Components/Brands/Brands.jsx';
import Footer from './Components/Footer/Footer.jsx';
import LoginSignup from './Components/LoginSignup/LoginSignup.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router basename="/epharma">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav />
              <Header />
              <Advertise />
              <Highlights />
              <Brands />
              <Footer />
            </>
          }
        />
        
        {/* Login route for LoginSignup component */}
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </Router>
  );
}

export default App;
