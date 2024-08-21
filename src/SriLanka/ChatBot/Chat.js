import React, { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';
import './Chat.css';
import Botpic1 from '../../images/Chat/chat1.jpg';
import Botpic2 from '../../images/Chat/chat2.jpg';
import Botpic3 from '../../images/Chat/chat3.jpg';



function Chat() {
  const chatBotRef = useRef(null);

  const images = [Botpic1, Botpic2, Botpic3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image rotation logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  // Handle ChatBot click event
  const handleChatBotClick = () => {
    Swal.fire({
      title: 'NEW AI CHATBOT COMING SOON !',
      text: 'Stay tuned for a premium experience!',
      imageUrl: images[currentImageIndex],
      imageWidth: 300,
      imageHeight: 200,
      imageAlt: 'ChatBot Image',
      confirmButtonText: 'OK',
      customClass: {
        popup: 'premium-popup',
        title: 'premium-title',
        confirmButton: 'premium-button',
      },
    });
  };

  return (
    <div ref={chatBotRef} className="chat" style={{ '--floating-button-image': `url(${images[currentImageIndex]})` }}>
      <button className="chatbot-icon" onClick={handleChatBotClick}>
        <img src={images[currentImageIndex]} alt="ChatBot Icon" />
      </button>
      <div className="online-dot"></div>
    </div>
  );
}

export default Chat;
