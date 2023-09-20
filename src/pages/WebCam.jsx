import WebCam from 'react-webcam'
import React from 'react';

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };
  
  export const WebCamera = () => (
    <WebCam
      audio={false}
      height={720}
      screenshotFormat="image/jpeg"
      width={1280}
      videoConstraints={videoConstraints}
    >
      {({ getScreenshot }) => (
        <button
          onClick={() => {
            const imageSrc = getScreenshot()
          }}
        >
          Capture photo
        </button>
      )}
    </WebCam>
  );

// const videoConstraints = {
//     width: 1280,
//     height: 720,
//     facingMode: "user"
//   };
  
//   export const WebCamera = () => {
//     const webcamRef = React.useRef(null);
//     const capture = React.useCallback(
//       () => {
//         const imageSrc = webcamRef.current.getScreenshot();
//       },
//       [webcamRef]
//     );
//     return (
//       <>
//         <WebCam
//           audio={false}
//           height={720}
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           width={1280}
//           videoConstraints={videoConstraints}
//         />
//         <button onClick={capture}>Capture photo</button>
//       </>
//     );
//   };