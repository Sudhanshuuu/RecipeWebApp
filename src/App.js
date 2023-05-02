import React from "react";
import Pages from "./pages/Pages.jsx";
import Nav from "./components/Nav/Nav.jsx"

import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
