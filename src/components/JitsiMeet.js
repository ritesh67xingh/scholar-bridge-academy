import React, { useEffect } from 'react';

const JitsiMeet = () => {
  useEffect(() => {
    // Make sure the external_api.js script has loaded before running this
    const domain = '8x8.vc';
    const options = {
      roomName: 'vpaas-magic-cookie-a0f007de962444a5bc0bc68b06025d38/SampleAppCognitiveFoldsEruptScornfully', // Your room name
      parentNode: document.getElementById('jaas-container'), // The container for the Jitsi meeting
    };

    // Initialize the JitsiMeetExternalAPI only if the script has been loaded
    if (window.JitsiMeetExternalAPI) {
      const api = new window.JitsiMeetExternalAPI(domain, options);

      // If JWT token is required, uncomment and set it
      // api.executeCommand('token', 'YOUR_JWT_TOKEN');

      return () => {
        if (api) {
          api.dispose(); // Clean up the meeting instance on component unmount
        }
      };
    }
  }, []);

  return <div id="jaas-container" style={{ width: '100%', height: '600px' }} />;
};

export default JitsiMeet;
