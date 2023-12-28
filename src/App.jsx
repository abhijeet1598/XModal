import React, { useState } from "react";
import "./App.css";
import Modal2 from "./components/Modal2";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button onClick={openModal} className="submit-button">
        Open Form
      </button>
      {isOpen && <Modal2 closeModal={closeModal} />}
    </div>
  );
};

export default App;
