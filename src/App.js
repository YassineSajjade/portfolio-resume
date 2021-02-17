import './App.css';
import 'hover.css/css/hover-min.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Myprojects from './components/Myprojects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar/>
      <About/> 
      <Resume/> 
      <Myprojects/> 
      <Contact/>
    </>
  );
}

export default App;
