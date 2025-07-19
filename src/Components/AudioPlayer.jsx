import React, { useState, useRef } from 'react';
import music from "../assets/acousticbreeze.mp3";

const AudioPlayer = () => {
  const audioRef = useRef(new Audio(music));
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <div className="flex items-center justify-center mt-25 px-1 py-3 md:gap-14 bg-[#f8f8fc] rounded-full shadow-sm w-full max-w-[370px] mx-auto flex-wrap gap-3 sm:gap-4 sm:mt-20">
        {/* Play Button */}
        <div
          className="bg-blue-500 text-white p-2 rounded-full cursor-pointer flex items-center"
          onClick={toggleAudio}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </div>

        {/* Waveform Bars */}
        <div className="flex items-end gap-1">
          {[3, 4, 5, 3, 4, 5, 3, 4, 5, 3, 3, 4, 5, 3, 4, 5, 3, 4, 5].map((h, i) => (
            <div key={i} className={`w-1 bg-blue-500`} style={{ height: `${h * 4}px` }}></div>
          ))}
        </div>

        {/* Duration */}
        <div className="text-sm text-red-500 font-semibold shrink-0">00:10</div>
      </div>

      <h1 className="text-center text-2xl mt-4">Click to play the sound</h1>
    </div>
  );
};

export default AudioPlayer;







// import React, { useState, useEffect, useRef } from "react";
// import music from "../assets/acousticbreeze.mp3";

// const AudioPlayer = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);

//   const audioRef = useRef(new Audio(music));
//   const canvasRef = useRef(null);
//   const animationRef = useRef(null);

//   useEffect(() => {
//     const audio = audioRef.current;

//     const updateTime = () => setCurrentTime(audio.currentTime);
//     const setMeta = () => setDuration(audio.duration);

//     audio.addEventListener("timeupdate", updateTime);
//     audio.addEventListener("loadedmetadata", setMeta);

//     return () => {
//       audio.removeEventListener("timeupdate", updateTime);
//       audio.removeEventListener("loadedmetadata", setMeta);
//     };
//   }, []);

//   // Animate waveform using Web Audio API
//   useEffect(() => {
//     const audio = audioRef.current;
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
//     const src = audioCtx.createMediaElementSource(audio);
//     const analyser = audioCtx.createAnalyser();

//     src.connect(analyser);
//     analyser.connect(audioCtx.destination);
//     analyser.fftSize = 64;

//     const bufferLength = analyser.frequencyBinCount;
//     const dataArray = new Uint8Array(bufferLength);

//     const draw = () => {
//       animationRef.current = requestAnimationFrame(draw);
//       analyser.getByteFrequencyData(dataArray);

//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       dataArray.forEach((val, i) => {
//         const barHeight = (val / 255) * canvas.height;
//         const x = i * 4;
//         ctx.fillStyle = "#3b82f6";
//         ctx.fillRect(x, canvas.height - barHeight, 3, barHeight);
//       });
//     };

//     draw();

//     return () => cancelAnimationFrame(animationRef.current);
//   }, []);

//   const toggleAudio = () => {
//     const audio = audioRef.current;
//     if (isPlaying) {
//       audio.pause();
//     } else {
//       audio.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div>
//       <div className="flex items-center justify-center mt-25 px-1 py-3 md:gap-14 bg-[#f8f8fc] rounded-full shadow-sm w-full max-w-[370px] mx-auto flex-wrap gap-3 sm:gap-4 sm:mt-20">
//         {/* Play Button */}
//         <div
//           className="bg-blue-500 text-white p-2 rounded-full cursor-pointer flex items-center"
//           onClick={toggleAudio}
//         >
//           {isPlaying ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="white"
//               viewBox="0 0 24 24"
//               className="w-6 h-6"
//             >
//               <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="white"
//               viewBox="0 0 24 24"
//               className="w-6 h-6"
//             >
//               <path d="M8 5v14l11-7z" />
//             </svg>
//           )}
//         </div>

//         {/* Canvas for Real Waveform */}
//         <canvas
//           ref={canvasRef}
//           width="100"
//           height="40"
//           className="bg-transparent"
//         />

//         {/* Duration */}
//         <div className="text-sm text-red-500 font-semibold shrink-0">
//           {formatTime(currentTime)} / {formatTime(duration)}
//         </div>
//       </div>

//       <h1 className="text-center text-2xl">Click to play the sound</h1>
//     </div>
//   );
// };

// // Helper function to format time in mm:ss
// const formatTime = (time) => {
//   const minutes = Math.floor(time / 60)
//     .toString()
//     .padStart(2, "0");
//   const seconds = Math.floor(time % 60)
//     .toString()
//     .padStart(2, "0");
//   return `${minutes}:${seconds}`;
// };

// export default AudioPlayer;
