import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Article from "./components/article/Article";
function App() {
  return (
    <div className="App">
      <div className="head">
        <Header />
      </div>
      <div className="body">
        <Article />
      </div>
      <Footer />
    </div>
  );
}

export default App;
