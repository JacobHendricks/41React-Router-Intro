import React from "react";
import './App.css';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Soda from "./Soda";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <VendingMachine />
          </Route>
          <Route exact path="/soda">
            <Soda />
          </Route>
          <Route exact path="/chips">
            <Chips />
          </Route>
        </Switch>
        {/* <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/soda" element={<Soda />} />
          <Route path="/chips" element={<Chips />} />
        </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
