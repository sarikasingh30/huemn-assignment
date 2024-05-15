import "./index.css"
import { Footer } from './Components/Footer/Footer';
import { Navbar } from './Components/Navbar/Navbar';
import { MainComponent } from "./Components/MainComponent/MainComponent";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainComponent/>
      <Footer/>
    </div>
  );
}

export default App;
