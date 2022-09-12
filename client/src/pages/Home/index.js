import React from 'react';
import loopedVid from '../../Games/images/loop-blocks.mp4';
import Contact from '../Contact'

const HomePage = () => { 
    
    return (
      <body>
      <video
        autoPlay
        loop
        src={loopedVid}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          left: "50%",
          top: '50%',
          objectFit: "cover",
          transform:"translate(-50%, -50%)",
          zIndex: '-1'
        }}
      >
      </video>
      
     {/* <Contact/> */}
     </body>
    );

}

export default HomePage; 