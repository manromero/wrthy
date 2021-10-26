import ContactForm from "./components/ContactForm/index.js";
import Body from "./components/Body/index.js";
import Objectives from "./components/Objectives";
import EDetail from "./components/EDetail";
import Motivation from "./components/Motivation";
import Rates from "./components/Rates";
import CustomNavbar from "./components/CustomNavbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Body />
      <Objectives />
      <EDetail />
      <Motivation />
      <Rates />
      <ContactForm />
    </div>
  );
}

export default App;
