import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Popular from './component/Popular';
import WeddingCat from './component/WeddingCat';
import About from './component/About';
import Footer from './component/Footer';

function App() {
  return (
   <>
   <Navbar/>
   <Home/>
   <Popular/>
   <WeddingCat/>
   <About/>
   <Footer/>
   </>
  );
}

export default App;
