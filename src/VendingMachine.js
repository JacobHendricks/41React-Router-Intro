import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
  return (
    <div className="VendingMachine">
      <h1>Vending Machine?</h1>
      <h1>Pick a snack!</h1>
      <h2><Link to="/chips">Chips</Link></h2>
      <h2><Link to="/soda">Soda</Link></h2>
    </div>
  );
}

export default VendingMachine;

