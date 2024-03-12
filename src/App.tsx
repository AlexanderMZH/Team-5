import "./App.css";

import { useState } from "react";
import Spinner from "./Components/Spinner";
import Layout from "./Layout";

function App() {
  const [spinnerToggle, setSpinnerToggle] = useState(false);

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
