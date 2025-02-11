import React from 'react';
import JitsiMeet from '../components/JitsiMeet'; // Adjust the path as necessary

const StartClassPage = () => {
  return (
    <div>
      <h1>Start Class</h1>
      {/* The JitsiMeet component will render the video conference */}
      <JitsiMeet />
    </div>
  );
};

export default StartClassPage;
