import { useState } from "react";
import "./App.css";
import GeneralInformation from "./assets/genInfo.jsx";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>CV Application</h1>
      <GeneralInformation />
    </>
  );
}

export default App;
