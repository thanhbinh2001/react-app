import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RouterURL from "./router/RouterURL";

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <RouterURL />
      <Footer />
    </div>
  );
}

export default App;
