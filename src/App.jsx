
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Works from "./components/works/Works";
function App() {
  return (
    <div className="app">
      <Header/>
      <Services/>
      <Portfolio/>
      <Works/>
      <Footer/>

    </div>
  );
}

export default App;
