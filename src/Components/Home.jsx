import React, { useEffect, useState } from "react";
import ImgFirst from "../assets/img1.png";
import { FaChevronDown } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Icon from "./Icon";
import { MdOutlineScience } from "react-icons/md";
import { IoCheckmarkSharp } from "react-icons/io5";
import music from "../assets/acousticbreeze.mp3";
import AudioPlayer from "./AudioPlayer";
import UsageAndIngredients from "./UsageAndIngredients";
import TherapeuticFoodDescription from "./TherapeuticFoodDescription";
import NutritionInfo from "./NutritionInfo";
import DropCircle from "./DropCircle";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showDropdown, setShowDropdown] = useState(true);

  useEffect(() => {
    if (isVisible) {
      setShowDropdown(false);
    } else {
      setShowDropdown(true);
    }
  }, [isVisible]);

  const handleTable = () => {
    setIsVisible((prev) => !prev);
  };

  const toggleDropdown = () => setOpen(!open);

  const languages = [
    { name: "English", flag: "🇬🇧" },
    { name: "العربية", flag: "🇸🇦" },
    { name: "Seleccionar Español", flag: "🇪🇸" },
    { name: "Seleccionar Português", flag: "🇵🇹" },
    { name: "Chagua Kiswahili", flag: "🇰🇪" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center relative">
      {/* Top Orange Bar */}
      <div className="w-full h-[11.25rem]  sm:h-[13.75rem]  md:h-[20rem] bg-[#DF674A]" />

      {/* Title */}
      <h1 className="absolute top-4 sm:top-6 md:top-10 text-white text-2xl sm:text-[4.6875rem] font-ptserif">
  Plumpy’Nut®
</h1>


      {/* Image */}
      <div className="absolute top-[90px] sm:top-[100px] md:top-[130px] z-10 px-4 w-full flex justify-center">
        <img
          src={ImgFirst}
          alt="Plumpy Nut"
          className="w-[90vw] sm:w-[31.25rem] md:w-[53.125rem] object-contain"
        />
      </div>

      {/* Dropdown */}
     {!isVisible && (
  <div className="mt-[95px] sm:mt-[420px] md:mt-[250px] z-20 md:mb-10">
    <div
      className={`${
        open
          ? "w-auto rounded-xl shadow-md border border-gray-200 bg-white"
          : "bg-white"
      }`}
    >
      <button
        className="flex justify-between items-center w-full sm:w-[21.875rem] px-2 sm:px-4 py-3 text-gray-800 font-medium rounded-t-xl"
        onClick={toggleDropdown}
      >
        <div className="border w-full sm:w-[24.5rem] h-[2.9375rem] border-gray-200 rounded-full text-[1] sm:text-[1.0625rem] bg-[#F3F0F6] flex justify-center gap-2 sm:gap-3 py-2 px-2 sm:px-4">

             <DropCircle />
          <span className="truncate">Select Your Language</span>
          <FaChevronDown
            className={`transition-transform mt-1.5 ${open ? "rotate-180" : "rotate-0"}`}
          />
        </div>
      </button>

      {open && (
        <ul className="divide-y divide-gray-200 max-h-[18.75rem] overflow-y-auto">
          {languages.map((lang, index) => (
            <li
              key={index}
              onClick={handleTable}
              className="px-3 sm:px-4 py-2 hover:bg-[#DF674A] hover:text-white cursor-pointer flex justify-between"
            >
              {lang.name}
              <span>{lang.flag}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
)}


      {isVisible && (
        <div className="w-[100%] sm:mt-40 lg:mt-56 flex flex-col gap-5 ">
          <AudioPlayer />
          <TherapeuticFoodDescription />

          <div className="w-[93%] h-[1px] sm:h-[1px] md:h-[1px]  bg-gray-300 ml-10 mt-20" />

          {/* ======= Usage Instructions + Ingredients Section ======= */}
          <UsageAndIngredients />

          <div className="w-[93%] h-[1px] sm:h-[1px] md:h-[1px]  bg-gray-300 ml-10 mt-20" />
          {/* ======= Macronutrients + Vitamins Section+Minerals Section ======= */}
          <NutritionInfo />

          <div className="w-full bg-[#E15C3E] text-white">
            <h1 className="text-center font-ptserif text-lg sm:text-xl md:text-2xl py-3">
              Plumpy’Nut®
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
