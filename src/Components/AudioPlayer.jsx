import React, { useState, useEffect, useRef } from "react";

const AudioPlayer = ({ textToSpeak, selectedLang }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const voicesRef = useRef([]);

  // Load voices when available
  useEffect(() => {
    const loadVoices = () => {
      voicesRef.current = window.speechSynthesis.getVoices();
    };

    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
  }, []);

  const getVoiceForLang = (langCode) => {
    return voicesRef.current.find((voice) => voice.lang.startsWith(langCode));
  };

  const toggleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    const voice = getVoiceForLang(selectedLang);

    if (voice) {
      utterance.voice = voice;
    } else {
      console.warn(`No voice found for language: ${selectedLang}`);
    }

    utterance.lang = selectedLang;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.cancel(); // Stop any ongoing speech
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    const stopSpeech = () => {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    };

    window.addEventListener("beforeunload", stopSpeech);
    return () => {
      stopSpeech();
      window.removeEventListener("beforeunload", stopSpeech);
    };
  }, []);

  return (
    <div className="flex justify-center mt-8 flex-col items-center gap-4">
      <button
        onClick={toggleSpeech}
        className={`px-6 cursor-pointer py-3 rounded-lg shadow-md text-white transition-all duration-300 ${
          isSpeaking
            ? "bg-red-600 hover:bg-red-700"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {isSpeaking ? "Stop Reading" : "Click here to play sound"}
      </button>

      {isSpeaking && (
        <div className="flex gap-1 items-end h-6">
          <div className="w-1 bg-green-400 animate-bar1" />
          <div className="w-1 bg-green-400 animate-bar2" />
          <div className="w-1 bg-green-400 animate-bar3" />
          <div className="w-1 bg-green-400 animate-bar1" />
          <div className="w-1 bg-green-400 animate-bar2" />
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;
