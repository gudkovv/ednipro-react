import './App.css';
import Navbar from './components/Navbar'; 
import Header from './components/Header';
import MuseumBox from './components/MuseumBox'; 
import Contacts from './components/Contacts';


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <MuseumBox />
      <Contacts />
      <Navbar variant="footer" />
    </>
  );
}

export default App;