import React from 'react';
import './NewButton.css';

function NewBtn() {
  const handleClick = () => {
    window.location.href = 'https://outlook.office.com/calendar/view/month';
  };

  return (
    <div className='meetRow'>
      <div className="button-container">
        <button className="bottom-button" onClick={handleClick}>👉 Meet our team</button>
        {/* <button className="top-button"></button> */}
      </div>
    </div>
  );
}

export default NewBtn;
