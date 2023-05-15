import './App.css';
import Home from './Pages/Home';
import Header from './Shared/Header';
import About from './components/About';
import Carousel from './components/Home/Carousel';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Carousel />
    </div>
  );
}

export default App;
