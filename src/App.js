import './App.css';
import Statewise from './components/Statewise/Statewise';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollTop from './components/ScrollTop/ScrollTop';

function App() {
  return (
    <div className="App">
      <Header />
      <Statewise />
      <Footer />
      <ScrollTop showBelow={250}/>
    </div>
  );
}

export default App;
