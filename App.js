import './App.css';
import Event from './Components/Event/Event';
import FAQ from './Components/FAQ/FAQ';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Introduction from './Components/Introduction/Introduction';
import Roadmap from './Components/Roadmap/Roadmap';
import Tokenomics from './Components/Tokenomics/Tokenomics';

function App() {
  return (
    <>
    <Header></Header>
    <Introduction></Introduction>
    <Event></Event>
    <Tokenomics></Tokenomics>
    <Roadmap></Roadmap>
    <FAQ></FAQ>
    <Footer></Footer>
    </>
  );
}

export default App;
