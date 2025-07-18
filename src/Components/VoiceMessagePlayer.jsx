import { useState, useRef } from 'react';

export default function VoiceMessagePlayer() {
  const [audioFile, setAudioFile] = useState(null);
  const [duration, setDuration] = useState('00:00');
  const audioRef = useRef(null);

  const handleAudioUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAudioFile(url);
    }
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (audio) {
      const total = Math.floor(audio.duration);
      const mins = String(Math.floor(total / 60)).padStart(2, '0');
      const secs = String(total % 60).padStart(2, '0');
      setDuration(`${mins}:${secs}`);
    }
  };

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  return (
    <div className="p-4">
      <label className="mb-2 block">
        
        <input type="file" accept="audio/*" onChange={handleAudioUpload} className="mt-1" />
      </label>

      {audioFile && (
        <div className="flex items-center bg-[#f7f7fa] rounded-full px-4 py-2 w-fit mt-4 shadow-sm">
          {/* Play Button */}
          <button
            onClick={handlePlayPause}
            className="w-6 h-6 bg-[#007aff] text-white flex items-center justify-center rounded-full mr-2"
          >
            ▶
          </button>

          {/* Waveform */}
          <div className="flex items-end gap-[2px] h-10">
            {[
              20, 12, 30, 18, 36, 15, 26, 32, 28, 14,
              30, 22, 36, 24, 10, 18, 26, 30, 16, 8,
              10, 14, 8
            ].map((height, idx) => (
              <div
                key={idx}
                className="w-[2px] bg-[#007aff]"
                style={{ height: `${height}px` }}
              ></div>
            ))}
          </div>

          {/* Duration */}
          <span className="ml-2 text-sm text-red-500">{duration}</span>

          <audio
            ref={audioRef}
            src={audioFile}
            onLoadedMetadata={handleLoadedMetadata}
            className="hidden"
          />
        </div>
      )}
    </div>
  );
}
