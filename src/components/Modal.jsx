import React, { useState } from "react";
import "./Modal.css";

const Modal = () => {
  const [isOpen, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("modal")) {
      setOpen(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  const validatePhone = (phone) => {
    if (phone !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return false;
    }
    return true;
  };

  const validateDoB = (dob) => {
    const today = new Date();
    const dobDate = new Date(dob);
    if (today < dobDate) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      return;
    }
    if (!validatePhone(formData.phone.length)) {
      return;
    }
    if (!validateDoB(formData.dob)) {
      return;
    }
    setFormData({ ...formData, username: "", email: "", phone: "", dob: "" });
    setOpen(false);
  };

  const handleModalOpenClose = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <div className={isOpen ? "modal" : "modal"} onClick={handleClickOutside}>
      <h1>User Details Modal</h1>
      <button className="submit-button" onClick={handleModalOpenClose}>
        Open Form
      </button>
      {isOpen && (
        <div className="modal-content">
          <form className="form" onSubmit={handleSubmit}>
            <h2>Fill Details</h2>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              required
              value={formData.username}
              onChange={handleInputChange}
            />
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="number"
              id="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
            />
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              required
              value={formData.dob}
              onChange={handleInputChange}
            />
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Modal;
