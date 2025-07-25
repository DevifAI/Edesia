import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Icon from "./Icon";

const NutritionInfo = ({ selectedLang }) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (selectedLang && i18n.language !== selectedLang) {
      i18n.changeLanguage(selectedLang);
    }
  }, [selectedLang, i18n]);

  const macronutrientKeys = [
    "Macronutrient_Energy",
    "Macronutrient_Protein",
    "Macronutrient_Fat",
    "Macronutrient_SaturatedFat",
    "Macronutrient_Carbohydrates",
    "Macronutrient_Sugars",
    "Macronutrient_Fiber",
    "Macronutrient_Sodium",
    "Macronutrient_Ash",
    "Macronutrient_Moisture",
  ];

  const vitaminKeys = [
    "Vitamin_A",
    "Vitamin_D",
    "Vitamin_E",
    "Vitamin_K",
    "Vitamin_C",
    "Vitamin_B1",
    "Vitamin_B2",
    "Vitamin_B3",
    "Vitamin_B5",
    "Vitamin_B6",
    "Vitamin_B8",
    "Vitamin_B9",
    "Vitamin_B12",
  ];

  const mineralKeys = [
    "Mineral_Iron",
    "Mineral_Zinc",
    "Mineral_Copper",
    "Mineral_Iodine",
    "Mineral_Selenium",
    "Mineral_Calcium",
    "Mineral_Phosphorus",
    "Mineral_Potassium",
    "Mineral_Magnesium",
    "Mineral_Manganese",
    "Mineral_Chloride",
  ];

  return (
    <div className="w-full max-w-7xl px-4 sm:px-8 md:px-10 xl:px-14 py-12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
        {/* Macronutrients */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3 text-gray-800 font-ptserif text-[clamp(1.75rem,2.5vw,3rem)]">
            <span className="pt-1">
              <Icon />
            </span>
            <span>{t("PlumpynutLabel")}</span>
          </div>
          <div className="text-[clamp(1.1rem,1.5vw,1.4rem)] ">
            {t("MacronutrientsLabel")}
          </div>

          {macronutrientKeys.map((key, index) => {
            const isChild =
              key === "Macronutrient_SaturatedFat" ||
              key === "Macronutrient_Sugars";
            return (
              <div
                key={index}
                className={`flex items-start gap-3 text-[clamp(1rem,1.3vw,1.25rem)] ${
                  isChild ? "pl-8" : ""
                }`}
              >
                <div
                  className={`${
                    isChild
                      ? "w-[0.85rem] h-[0.85rem] mt-2 rounded-full border-2 border-[#666666]"
                      : "min-w-[1.45rem] h-[1.45rem] flex items-center justify-center rounded-full bg-[#666666] mt-1"
                  }`}
                ></div>
                <span className="font-inter">{t(key)}</span>
              </div>
            );
          })}
        </div>

        {/* Vitamins */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3 text-gray-800 font-ptserif text-[clamp(1.75rem,2.5vw,3rem)]">
            <span className="pt-1">
              <Icon />
            </span>
            <span>{t("VitaminsLabel")}</span>
          </div>
          {vitaminKeys.map((key) => (
            <div
              key={key}
              className="flex items-start gap-3 text-[clamp(1rem,1.3vw,1.25rem)]"
            >
              <div className="min-w-[1.45rem] h-[1.45rem] flex items-center justify-center rounded-full bg-[#666666] text-white mt-[6px] ml-2"></div>
              <span className="font-inter">{t(key)}</span>
            </div>
          ))}
        </div>

        {/* Minerals */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3 text-gray-800 font-ptserif text-[clamp(1.75rem,2.5vw,3rem)]">
            <span className="pt-1">
              <Icon />
            </span>
            <span>{t("MineralsLabel")}</span>
          </div>
          {mineralKeys.map((key) => (
            <div
              key={key}
              className="flex items-start gap-3 text-[clamp(1rem,1.3vw,1.25rem)]"
            >
              <div className="min-w-[1.45rem] h-[1.45rem] flex items-center justify-center rounded-full bg-[#666666] text-white mt-[6px] ml-2"></div>
              <span className="font-inter">{t(key)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NutritionInfo;
