import React from "react";

const AlertButton = () => {
  const handleClick = () => {
    alert("Your Slot is Booked");
  };

  return (
    <>
    <h1>Book your Slot</h1>
    <div className="btn">
    <button className="btn btn-primary" onClick={handleClick}>
      Book Your Slot
    </button>
    </div>
    </>
   
  );
};

export default AlertButton;
