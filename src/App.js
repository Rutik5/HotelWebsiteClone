

import './App.css';
import Background from './components/Background';
import Contacts from './components/Contacts';
import Destinations from './components/Destinations';
import Locations from './components/Locations';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <Navbar/>
      <Background/>
      <Locations/>
      <Destinations/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
