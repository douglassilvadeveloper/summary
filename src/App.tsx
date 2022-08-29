import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header nameApp="Summary" />
      <Main />
      <Footer text="By Douglas Silva. All rights reserved." />
    </div>
  );
}

export default App;
