import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
//import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Hookcounter from "./components/Hookcounter";

function App() {
  return (
    <div className="App">
      <Hookcounter/>
      {/* <Counter/> */}
      {/* <Message/> */}   
      {/* <Greet name="Abdul"/>
      <Greet name="Samad"/>
      <Greet name="Chandio"/>
      <Welcome />
      <Hello></Hello> */}
    </div>
  );
}

export default App;
