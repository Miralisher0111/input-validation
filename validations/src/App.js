// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

function App() {
  const [entredName, setEntredvalue] = useState("");
  const NameHandler = (event) => {
    setEntredvalue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(entredName);
  };

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <label>
          <b>Email:</b>
        </label>
        <input id="email" onChange={NameHandler}></input>
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
