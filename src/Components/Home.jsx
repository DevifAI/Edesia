import React, { useEffect, useState } from "react";
import ImgFirst from "../assets/img1.png";
import { FaChevronDown } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Icon from "./Icon";
import { MdOutlineScience } from "react-icons/md";
import { IoCheckmarkSharp } from "react-icons/io5";
import music from "../assets/acousticbreeze.mp3"

const Home = () => {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showDropdown, setShowDropdown] = useState(true)

 useEffect(()=>{
  if(isVisible){
    setShowDropdown(false)
  }
  else{
    setShowDropdown(true)
  }
 },[isVisible])

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
      <div className="w-full h-[180px] sm:h-[220px] md:h-[320px] bg-[#DF674A]" />

      {/* Title */}
      <h1 className="  absolute top-4 font-ptserif sm:top-6 md:top-10 text-white text-2xl sm:text-[75px]">
Plumpy’Nut®
      </h1>

      {/* Image */}
    <div className="absolute top-[90px] sm:top-[100px] md:top-[130px] z-10 px-4 w-full flex justify-center"> 
  <img
    src={ImgFirst}
    alt="Plumpy Nut"
    
    className="w-[90vw] sm:w-[500px] md:w-[850px] object-contain"
  />
</div>


      {/* Dropdown */}
     {!isVisible && ( <div className="mt-[380px] sm:mt-[420px] md:mt-[250px] z-20 md:mb-10">
        <div className={`${open?"w-auto rounded-xl shadow-md border border-gray-200 bg-white":"bg-white"}`}>
          
          <button
            className="flex justify-between items-center w-[350px] px-4 py-3 text-gray-800 font-medium rounded-t-xl"
            onClick={toggleDropdown}
          >
            <div className="border w-[392px] h-[47px] border-gray-200 rounded-full text-[17px]  bg-[#F3F0F6] flex justify-center gap-3   py-2 ">
              {" "}
              <svg
                className="mt-1 h-[19px] w-[19px]"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.4416 24.1042L19 20.6625V23.2584H16.6666V16.6667H23.2583V19H20.6333L24.075 22.4417L22.4416 24.1042ZM12 23.6667C10.3861 23.6667 8.86942 23.3605 7.44998 22.748C6.03054 22.1355 4.79581 21.3042 3.74581 20.2542C2.69581 19.2042 1.86456 17.9695 1.25206 16.55C0.639563 15.1306 0.333313 13.6139 0.333313 12C0.333313 10.3862 0.639563 8.86948 1.25206 7.45004C1.86456 6.0306 2.69581 4.79587 3.74581 3.74587C4.79581 2.69587 6.03054 1.86462 7.44998 1.25212C8.86942 0.639624 10.3861 0.333374 12 0.333374C13.6139 0.333374 15.1305 0.639624 16.55 1.25212C17.9694 1.86462 19.2041 2.69587 20.2541 3.74587C21.3041 4.79587 22.1354 6.0306 22.7479 7.45004C23.3604 8.86948 23.6666 10.3862 23.6666 12C23.6666 12.3889 23.6472 12.7778 23.6083 13.1667C23.5694 13.5556 23.5111 13.9445 23.4333 14.3334H21.0416C21.1389 13.9445 21.2118 13.5556 21.2604 13.1667C21.309 12.7778 21.3333 12.3889 21.3333 12C21.3333 11.6112 21.309 11.2223 21.2604 10.8334C21.2118 10.4445 21.1389 10.0556 21.0416 9.66671H17.075C17.1333 10.0556 17.1771 10.4445 17.2062 10.8334C17.2354 11.2223 17.25 11.6112 17.25 12C17.25 12.3889 17.2354 12.7778 17.2062 13.1667C17.1771 13.5556 17.1333 13.9445 17.075 14.3334H14.7416C14.8 13.9445 14.8437 13.5556 14.8729 13.1667C14.9021 12.7778 14.9166 12.3889 14.9166 12C14.9166 11.6112 14.9021 11.2223 14.8729 10.8334C14.8437 10.4445 14.8 10.0556 14.7416 9.66671H9.25831C9.19998 10.0556 9.15623 10.4445 9.12706 10.8334C9.0979 11.2223 9.08331 11.6112 9.08331 12C9.08331 12.3889 9.0979 12.7778 9.12706 13.1667C9.15623 13.5556 9.19998 13.9445 9.25831 14.3334H13.1666V16.6667H9.78331C10.0166 17.5028 10.318 18.3049 10.6875 19.073C11.0569 19.841 11.4944 20.575 12 21.275C12.3889 21.275 12.7778 21.2507 13.1666 21.2021C13.5555 21.1535 13.9444 21.1098 14.3333 21.0709V23.4625C13.9444 23.5014 13.5555 23.5452 13.1666 23.5938C12.7778 23.6424 12.3889 23.6667 12 23.6667ZM2.95831 14.3334H6.92498C6.86665 13.9445 6.8229 13.5556 6.79373 13.1667C6.76456 12.7778 6.74998 12.3889 6.74998 12C6.74998 11.6112 6.76456 11.2223 6.79373 10.8334C6.8229 10.4445 6.86665 10.0556 6.92498 9.66671H2.95831C2.86109 10.0556 2.78817 10.4445 2.73956 10.8334C2.69095 11.2223 2.66665 11.6112 2.66665 12C2.66665 12.3889 2.69095 12.7778 2.73956 13.1667C2.78817 13.5556 2.86109 13.9445 2.95831 14.3334ZM3.94998 7.33337H7.39165C7.56665 6.61393 7.7854 5.90907 8.0479 5.21879C8.3104 4.52851 8.61665 3.85282 8.96665 3.19171C7.8972 3.54171 6.9347 4.07157 6.07915 4.78129C5.22359 5.49101 4.51387 6.34171 3.94998 7.33337ZM8.96665 20.8084C8.61665 20.1473 8.3104 19.4716 8.0479 18.7813C7.7854 18.091 7.56665 17.3862 7.39165 16.6667H3.94998C4.51387 17.6584 5.22359 18.5091 6.07915 19.2188C6.9347 19.9285 7.8972 20.4584 8.96665 20.8084ZM9.78331 7.33337H14.2166C13.9833 6.49726 13.6819 5.69518 13.3125 4.92712C12.943 4.15907 12.5055 3.42504 12 2.72504C11.4944 3.42504 11.0569 4.15907 10.6875 4.92712C10.318 5.69518 10.0166 6.49726 9.78331 7.33337ZM16.6083 7.33337H20.05C19.4861 6.34171 18.7764 5.49101 17.9208 4.78129C17.0653 4.07157 16.1028 3.54171 15.0333 3.19171C15.3833 3.85282 15.6896 4.52851 15.9521 5.21879C16.2146 5.90907 16.4333 6.61393 16.6083 7.33337Z"
                  fill="#666666"
                />
              </svg>
              Select Your Language{" "}
              <FaChevronDown
                className={` transition-transform mt-1.5 ${
                  open ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
          </button>

          {open && (
            <ul className="divide-y divide-gray-200">
              {languages.map((lang, index) => (
                <li
                  key={index}
                  onClick={handleTable}
                  className="px-4 py-2 hover:bg-[#DF674A] hover:text-white cursor-pointer flex justify-between"
                >
                  {lang.name}
                  <span>{lang.flag}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>)} 
     


      {isVisible && (
        <div className="w-[100%] sm:mt-40 lg:mt-56 flex flex-col gap-5 ">
    <div className="flex items-center justify-center  mt-25 px-1 py-3 md:gap-14 bg-[#f8f8fc] rounded-full shadow-sm w-full max-w-[370px] mx-auto flex-wrap gap-3 sm:gap-4 sm:mt-20">
  {/* Play Button */}
  <div
    className="bg-blue-500 text-white p-0.5 rounded-full cursor-pointer shrink-0"
   onClick={() => {
  const audio = document.getElementById('myAudio');
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}}

  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      viewBox="0 0 24 24"
      className="w-4 h-4 sm:w-8 sm:h-8"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  </div>

  {/* Fake Waveform Bars */}
  <div class="flex items-end gap-1  ">
  
  <div class="w-1 bg-blue-500 h-3"></div>
  <div class="w-1 bg-blue-500 h-4"></div>
  <div class="w-1 bg-blue-500 h-5"></div>
  <div class="w-1 bg-blue-500 h-3"></div>
  <div class="w-1 bg-blue-500 h-4"></div>
  <div class="w-1 bg-blue-500 h-5"></div>
  <div class="w-1 bg-blue-500 h-3"></div>
  <div class="w-1 bg-blue-500 h-4"></div>
  <div class="w-1 bg-blue-500 h-5"></div>
  <div class="w-1 bg-blue-500 h-3"></div>
  <div class="w-1 bg-blue-500 h-3"></div>
  <div class="w-1 bg-blue-500 h-4"></div>
  <div class="w-1 bg-blue-500 h-5"></div>
  <div class="w-1 bg-blue-500 h-3"></div>
  <div class="w-1 bg-blue-500 h-4"></div>
  <div class="w-1 bg-blue-500 h-5"></div>
   <div class="w-1 bg-blue-500 h-3"></div>
  <div class="w-1 bg-blue-500 h-4"></div>
  <div class="w-1 bg-blue-500 h-5"></div>
  
  

</div>


  {/* Duration */}
  <div className="text-sm text-red-500 font-semibold shrink-0">00:10</div>

  {/* Hidden Audio Element */}
  <audio id="myAudio" src={music} preload="auto" />
</div>

<h1 className="text-center text-2xl">Click to play the sound</h1>
          <div className=" w-full font-ptserif max-w-screen-700xl px-4 md:px-8 text-black mt-16 mx-auto flex  justify-center gap-1">
            <p className="text-lg   sm:text-xl md:text-[2.5rem] text-center max-w-full leading-relaxed ">
              Peanut-based, Ready-to-Use Therapeutic Food (RUTF). For the <br /> dietary management of children suffering 
              from severe acute <br /> malnutrition without medical complications. For children 6 months <br /> of age and older.
               1 SACHET = 500 kcal.  Dose recommendation: <br /> 150–185 kcal/kg/day per child for 6 to 10 weeks
            </p>
          </div>
      

          <div className="w-[93%] h-[1px] sm:h-[1px] md:h-[1px]  bg-gray-300 ml-10 mt-20" />
          
{/* ======= Usage Instructions + Ingredients Section ======= */}
<div className="w-full max-w-7xl px-6 sm:px-10 lg:px-19 xl: mx-auto flex flex-wrap justify-between gap-10 md:gap-16 lg:gap-29 mt-8 mb-7">

  <div className="flex flex-col gap-4 flex-1 min-w-[280px]">
    <div className="text-[3rem] flex items-start gap-2.5 font-ptserif  text-gray-800">
      <span className="pt-6"><Icon  /></span>
      <span className="pb-2 pt-1.5">Usage Instructions:</span>
    </div>
    {[
      "Do not add water",
      "Do not heat",
      "Squeeze & eat",
      "Child eats",
      "Supplement with breastfeeding",
    ].map((text, idx) => (
      <div key={idx} className="text-base flex items-start gap-2">
        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#E15C3E] text-white text-md font-semibold shrink-0 mt-1.5 ml-1">
          {idx + 1}
        </div>
        <span className="flex items-center font-inter gap-1 text-[1.5rem]">
          {text}
          {idx === 0 && (
            <AiOutlineClose className="text-[#E15C3E] text-lg mt-[3px]" />
          )}
          {idx === 1 && (
            <AiOutlineClose className="text-[#E15C3E] text-lg mt-[3px]" />
          )}
          {idx === 2 && (
            <IoCheckmarkSharp  className="text-blue-500 text-lg mt-[3px]" />
          )}
           {idx === 3 && (
            <IoCheckmarkSharp  className="text-blue-500 text-lg mt-[3px]" />
          )}
           {idx === 4 && (
            <IoCheckmarkSharp   className="text-blue-500 text-lg mt-[3px]" />
          )}
           {idx === 5 && (
            <IoCheckmarkSharp   className="text-blue-500 text-lg mt-[3px]" />
          )}
        </span>
      </div>
    ))}
  </div>

  {/* Ingredients */}
  <div className="flex flex-col gap-3 flex-1 min-w-[280px]">
    <div className="text-[3rem] flex items-start gap-2 font-ptserif text-gray-800">
     <span className="pt-6"> <Icon /></span>
      <span className=" pt-1.5">Ingredients:</span>
    </div>
    <div className="flex flex-col gap-0.5 mt-2 text-base font-inter text-gray-700 text-[1.5rem]">
      <p>Peanut Paste, Sugar, Soy Protein Isolate</p>
      <p>Vegetable Oils (Soybean, Canola), Skimmed</p>
      <p>Milk Powder, Whey Permeate (Milk), Palm</p>
      <p>Oil, Cocoa, Vitamins And Minerals..</p>
    </div>
    <p className="text-base text-gray-700 text-[24px] mt-0.5">
      Contains Peanuts, Soy, and Milk.
    </p>
    <p className="text-base text-gray-700 mb-1 text-[24px]">
      <span className=" ">Storage:</span> Store at 25°C Or Below. <br />
      Avoid <br className="sm:hidden" /> Prolonged Exposure To Heat.
    </p>
  </div>
</div>

<div className="w-[93%] h-[1px] sm:h-[1px] md:h-[1px]  bg-gray-300 ml-10 mt-20" />

  {/* max-w-7xl */}
{/* ======= Macronutrients + Vitamins Section+Minerals Section ======= */}
<div className="w-full  px-6 sm:px-10 lg:px-24 xl:px- mx-auto py-8 flex justify-between items-start ">
  <div className="w-full  flex flex-col md:flex-row md:justify-self-center md:gap-20 ">
    
    {/* Macronutrients */}
    <div className="flex-1 flex flex-col gap-5  xl:ml-14">
      <div className="flex items-center gap-2 text-[3rem] font-ptserif text-gray-800">
     <span  className="pt-2.5" ><Icon/></span>
        <span className="mt-1">Plumpy’Nut®:</span>
      </div>
      <div className="text-base  text-[1.5rem]">
        Nutritional Values (Per 92g Sachet) Macronutrients
      </div>

      {[
        "Energy: 500 kcal",
        "Protein: 12.5 g",
        "Fat: 32.8 g",
        "Saturated Fat: 8.5 g",
        "Carbohydrates: 41.4 g",
        "Sugars: 9.2 g",
        "Fiber: 2.0 g",
        "Sodium: 208 mg",
        "Ash: 2.3 g",
        "Moisture: 1.8 g",
      ].map((item, index) => (
       <div key={index} className="flex items-start gap-2 sm:text-[1.5rem] mt-1">
  <div className="w-[28px] h-[28px] sm:w-[28px] sm:h-[28px] flex items-center justify-center mt-1 rounded-full bg-[#E15C3E] text-white font-semibold">
    <FaCheck size={11} />
  </div>
          <span className="font-inter">{item}</span>
        </div>
      ))}
    </div>

    {/* Vitamins */}
    <div className="flex-1 flex flex-col gap-3 mt-8 md:mt-0 ">
      <div className="flex items-center gap-2 text-[3rem] font-ptserif text-gray-800 ">
      <span  className="pt-2.5 " ><Icon/></span>
        <span className="mt-1">Vitamins</span>
      </div>

      {[
        "Vitamin A: 1012 µg",
        "Vitamin D: 15.6 µg",
        "Vitamin E: 18.4 mg",
        "Vitamin C: 82.8 mg",
        "Vitamin K: 27.7 mg",
        "Vitamin B1 (Thiamine): 0.46 mg",
        "Vitamin B2 (Riboflavin): 1.47 mg",
        "Vitamin B3 (Niacin): 4.6 mg",
        "Vitamin B5 (Pantothenic Acid): 2.85 mg",
        "Vitamin B6: 0.55 mg",
        "Vitamin B8 (Biotin): 55.2 µg",
        "Vitamin B9 (Folic Acid): 184 µg",
        "Vitamin B12: 1.47 µg",
      ].map((item, index) => (
        <div key={index} className="flex items-start font-inter gap-2 text-sm sm:text-[1.5rem] mt-3 ml-1 ">
          <div className="w-[28px] h-[28px] flex items-center font-inter justify-center rounded-full bg-[#E15C3E] text-white text-xs font-semibold mt-[4px]  ">
            <FaCheck size={11} />
          </div>
          {item}
        </div>
      ))}
    </div>

    {/* Minerals */}
    <div className="flex-1 flex flex-col gap-5 mt-8 md:mt-0">
      <div className="flex items-center gap-2.5 text-[3rem] font-ptserif text-gray-800">
        <span  className="pt-2.5" ><Icon/></span>
        <span className="mt-1 sm:mt-1.5">Minerals</span>
      </div>

      {[
        "Iron: 9.7 mg",
        "Zinc: 10.1 mg",
        "Copper: 1.29 mg",
        "Iodine: 82.8 µg",
        "Selenium: 18.4 µg",
        "Calcium: 276 mg",
        "Phosphorus: 276 mg",
        "Potassium: 1012 mg",
        "Magnesium: 73.6 mg",
        "Manganese: 1.1 mg",
        "Chloride: 920 mg",
      ].map((item, index) => (
        <div key={index} className="flex items-start gap-3 text-sm sm:text-[1.5rem] mt-1.5 ml-1">
          <div className="w-[28px] h-[28px] flex items-center justify-center rounded-full bg-[#E15C3E] text-white text-xs font-semibold mt-[6px]">
            <FaCheck size={11} />
          </div>
          <span className="font-inter">{item}</span>
        </div>
      ))}
    </div>

  </div>
</div>


{/* ======= Minerals Section ======= */}



         

        
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
