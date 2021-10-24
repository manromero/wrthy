import Header from "./components/Header/index.js";
import ContactForm from "./components/ContactForm/index.js";
import Body from "./components/Body/index.js";
import Objectives from "./components/Objectives";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Objectives />
      <ContactForm />
    </div>
  );
}

export default App;
