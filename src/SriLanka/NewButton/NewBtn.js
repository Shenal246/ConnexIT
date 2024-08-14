import React from 'react';
import './NewButton.css';

function NewBtn() {

  return (
    <div className='meetRow'>
      <div className="button-container">
        <a href='https://outlook.office365.com/owa/calendar/Meetingourexpertise@connexit.biz/bookings/' target='_blank'>  <button className="bottom-button" >👉 Meet our team</button></a>
        {/* <button className="top-button"></button> */}
      </div>
    </div>
  );
}

export default NewBtn;
