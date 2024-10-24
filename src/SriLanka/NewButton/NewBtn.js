import React from 'react';
import './NewButton.css';

function NewBtn() {

  return (
    <div className='meetRow'>
      <div className="button-container">
        <a href='https://outlook.office365.com/owa/calendar/Meetingourexpertise@connexit.biz/bookings/' target='_blank'>  <button className="bottom-button" >👉 Meet our team</button></a>
        {/* <button className="top-button"></button> */}


        
      </div>

      <div className='feedbackbtnrow'>

      <a
          href="https://forms.office.com/Pages/ResponsePage.aspx?id=fuSYqqNza0mmRNxa-fbwsfBpQjK7vGlNg0EwUHwk9rhUMjYyTE5LMkpCN0NZREY4VkVVNjVITUlaNC4u"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="feedback-button">
            Feedbacks
          </button>
        </a>

      </div>


    </div>
  );
}

export default NewBtn;
