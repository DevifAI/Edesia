import React, { useEffect, useState } from "react";
import ImgFirst from "../assets/img1.png";
import { FaChevronDown } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Icon from "./Icon";
import { MdOutlineScience } from "react-icons/md";
import { IoCheckmarkSharp } from "react-icons/io5";
// import music from "../assets/acousticbreeze.mp3";
import AudioPlayer from "./AudioPlayer";
import UsageAndIngredients from "./UsageAndIngredients";
import TherapeuticFoodDescription from "./TherapeuticFoodDescription";
import NutritionInfo from "./NutritionInfo";
import DropCircle from "./DropCircle";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState("en");
  const [voiceLang, setVoiceLang] = useState("es-ES");
  const { t } = useTranslation();
  const textToRead = [
    t("TherapeuticFoodDescription"),
    t("UsageInstructions"),
    t("DoNotAddWater"),
    t("DoNotHeat"),
    t("SqueezeAndEat"),
    t("ChildEats"),
    t("SupplementWithBreastfeeding"),
    t("Ingredients"),
    t("IngredientsLine1"),
    t("IngredientsLine2"),
    t("IngredientsLine3"),
    t("IngredientsLine4"),
    t("ContainsAllergens"),
    t("StorageHeading") + " " + t("StorageInstruction"),
    t("PlumpynutLabel"),
    t("MacronutrientsLabel"),
    t("Macronutrient_Energy"),
    t("Macronutrient_Protein"),
    t("Macronutrient_Fat"),
    t("Macronutrient_SaturatedFat"),
    t("Macronutrient_Carbohydrates"),
    t("Macronutrient_Sugars"),
    t("Macronutrient_Fiber"),
    t("Macronutrient_Sodium"),
    t("Macronutrient_Ash"),
    t("Macronutrient_Moisture"),
    t("VitaminsLabel"),
    t("Vitamin_A"),
    t("Vitamin_D"),
    t("Vitamin_E"),
    t("Vitamin_K"),
    t("Vitamin_C"),
    t("Vitamin_B1"),
    t("Vitamin_B2"),
    t("Vitamin_B3"),
    t("Vitamin_B5"),
    t("Vitamin_B6"),
    t("Vitamin_B8"),
    t("Vitamin_B9"),
    t("Vitamin_B12"),
    t("MineralsLabel"),
    t("Mineral_Iron"),
    t("Mineral_Zinc"),
    t("Mineral_Copper"),
    t("Mineral_Iodine"),
    t("Mineral_Selenium"),
    t("Mineral_Calcium"),
    t("Mineral_Phosphorus"),
    t("Mineral_Potassium"),
    t("Mineral_Magnesium"),
    t("Mineral_Manganese"),
    t("Mineral_Chloride"),
  ].join(". "); // Combine for better TTS flow
  // const [showDropdown, setShowDropdown] = useState(true);

  useEffect(() => {
    const handleBeforeUnload = () => {
      window.speechSynthesis.cancel(); // Stop any ongoing speech
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.speechSynthesis.cancel(); // Also cancel on component unmount
    };
  }, []);
  // useEffect(() => {
  //   if (isVisible) {
  //     setShowDropdown(false);
  //   } else {
  //     setShowDropdown(true);
  //   }
  // }, [isVisible]);

  const handleTable = (code, voiceCode) => {
    setSelectedLang(code);
    setVoiceLang(voiceCode);
    i18n.changeLanguage(code); // <- i18n switch
    setIsVisible(true);
    setOpen(false);
  };

  const toggleDropdown = () => setOpen(!open);

  const languages = [
    { name: "العربية", code: "sa", transCode: "ar", voiceCode: "ar-SA" },
    {
      name: "Seleccionar Español",
      code: "es",
      transCode: "es",
      voiceCode: "es-ES",
    },
    {
      name: "Seleccionar Português",
      code: "pt",
      transCode: "pt",
      voiceCode: "pt-PT",
    },
    {
      name: "Chagua Kiswahili",
      code: "ke",
      transCode: "sw",
      voiceCode: "sw-KE",
    },
    { name: "Zabî Hausa", code: "ng", transCode: "ha", voiceCode: "ha-NG" },
    { name: "Yan Yorùbá", code: "ng", transCode: "yo", voiceCode: "yo-NG" },
    { name: "Họrọ Igbo", code: "ng", transCode: "ig", voiceCode: "ig-NG" },
    { name: "አማርኛ ይምረጡ", code: "et", transCode: "am", voiceCode: "am-ET" },
    {
      name: "Afaan Oromo filadhu",
      code: "et",
      transCode: "om",
      voiceCode: "om-ET",
    },
    { name: "Dooro Soomaali", code: "so", transCode: "so", voiceCode: "so-SO" },
    { name: "ትግርኛ ምረፅ", code: "er", transCode: "ti", voiceCode: "ti-ER" },
    { name: "Londa Oluganda", code: "ug", transCode: "lg", voiceCode: "lg-UG" },
    { name: "Pona Lingála", code: "cd", transCode: "ln", voiceCode: "ln-CD" },
    { name: "Tála Kikongo", code: "ad", transCode: "kg", voiceCode: "kg-AO" },
    {
      name: "Hitamo Ikinyarwanda",
      code: "rw",
      transCode: "rw",
      voiceCode: "rw-RW",
    },
    {
      name: "Fidio ny teny Malagasy",
      code: "mg",
      transCode: "mg",
      voiceCode: "mg-MG",
    },
    {
      name: "Sankhani Chichewa",
      code: "mw",
      transCode: "ny",
      voiceCode: "ny-MW",
    },
    { name: "Cäl Nuer", code: "ss", transCode: "nus", voiceCode: "nus-SS" },
    { name: "Yië Dinka", code: "ss", transCode: "din", voiceCode: "din-SS" },
    { name: "پشتو وټاکئ", code: "pk", transCode: "ps", voiceCode: "ps-PK" },
    { name: "ਪੰਜਾਬੀ ਚੁਣੋ", code: "in", transCode: "pa", voiceCode: "pa-IN" },
    { name: "سنڌي چونڊيو", code: "pk", transCode: "sd", voiceCode: "sd-PK" },
    {
      name: "Piliin ang Tagalog",
      code: "ph",
      transCode: "tl",
      voiceCode: "tl-PH",
    },
    {
      name: "Chaymi rimaykuy Quechua",
      code: "ec",
      transCode: "qu",
      voiceCode: "qu-EC",
    },
    {
      name: "Ticha’ le K’iche’",
      code: "gt",
      transCode: "quc",
      voiceCode: "quc-GT",
    },
    {
      name: "Chwazi Kreyòl Ayisyen",
      code: "ht",
      transCode: "ht",
      voiceCode: "ht-HT",
    },
    { name: "Pawɔ Twi", code: "gh", transCode: "tw", voiceCode: "tw-GH" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center relative">
      {/* Top Orange Bar */}
      <div className="w-full h-[11.25rem]  sm:h-[13.75rem]  md:h-[20rem] bg-[#DF674A]" />

      {/* Title */}
      <h1 className=" absolute top-4 sm:top-6 md:top-10 text-white text-2xl sm:text-[4.6875rem] font-newSpirit ">
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
              className="flex justify-between items-center w-full sm:w-[21.875rem] px-2 sm:px-4 py-3 text-gray-800 font-medium rounded-t-xl "
              onClick={toggleDropdown}
            >
              <div className="border  border-2  w-full sm:w-[24.5rem] h-[2.9375rem] border-gray-400 rounded-full text-[1] sm:text-[1.0625rem] bg-[#F3F0F6] flex justify-center gap-2 sm:gap-3 py-2 px-2 sm:px-4">
                <DropCircle />
                <span className="truncate cursor-pointer ">
                  Select Your Language
                </span>
                <FaChevronDown
                  className={`transition-transform mt-1.5 ${
                    open ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </button>

            {open && (
              <ul className="divide-y divide-gray-200 max-h-[16.75rem] overflow-y-auto">
                {languages.map((lang, index) => (
                  <li
                    key={index}
                    onClick={() => handleTable(lang.transCode, lang.voiceCode)}
                    className="px-3 sm:px-4 py-2 hover:bg-[#DF674A] hover:text-white cursor-pointer flex justify-between"
                  >
                    {lang.name}
                    <img
                      src={`https://flagcdn.com/w40/${lang.code.toLowerCase()}.png`}
                      alt={lang.name}
                      className="w-6 h-4 object-cover rounded-sm ml-2"
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      {isVisible && (
        <div className="w-[100%] sm:mt-40 lg:mt-56 flex flex-col gap-5 ">
          <AudioPlayer textToSpeak={textToRead} selectedLang={voiceLang} />

          <TherapeuticFoodDescription selectedLang={selectedLang} />

          <div className="w-[93%] h-[1px] sm:h-[1px] md:h-[1px]  bg-gray-300 ml-10 mt-20" />

          {/* ======= Usage Instructions + Ingredients Section ======= */}
          <UsageAndIngredients selectedLang={selectedLang} />

          <div className="w-[93%] h-[1px] sm:h-[1px] md:h-[1px]  bg-gray-300 ml-10 mt-20" />
          {/* ======= Macronutrients + Vitamins Section+Minerals Section ======= */}
          <NutritionInfo selectedLang={selectedLang} />

          <div className="w-full bg-[#E15C3E] text-white mt-13">
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
