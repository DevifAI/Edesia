import React from "react";
import { FaCheck } from "react-icons/fa";
import Icon from "./Icon";

// Replace with actual image/logo if needed


const NutritionInfo = () => {
  const macronutrients = [
    "Energy: 500 Kcal",
    "Protein: 12.5 G",
    "Fat: 32.8 G",
    "Saturated Fat: 8.5 G",
    "Carbohydrates: 41.4 G",
    "Sugars: 9.2 G",
    "Fiber: 2.0 G",
    "Sodium: 208 Mg",
    "Ash: 2.3 G",
    "Moisture: 1.8 G",
  ];

  const vitamins = [
    "Vitamin A: 1012 Mg",
    "Vitamin D: 15.6 Mg",
    "Vitamin E: 18.4 Mg",
    "Vitamin K: 27.6 Mg",
    "VVitamin C: 82.8 Mg",
    "Vitamin B1 (Thiamine): 0.46 Mg",
    "Vitamin B2 (Riboflavin): 1.47 Mg",
    "Vitamin B3 (Niacin): 4.6 Mg",
    "Vitamin B5 (Pantothenic Acid): 2.85 Mg",
    "Vitamin B6: 0.55 Mg",
    "Vitamin B8 (Biotin): 55.2 Mg",
    "Vitamin B9 (Folic Acid): 184 Mg",
    "Vitamin B12: 1.47 Mg",
  ];

  const minerals = [
    "Iron: 9.7 Mg",
    "Zinc: 10.1 Mg",
    "Copper: 1.29 Mg",
    "Iodine: 82.8 Mg",
    "Selenium: 18.4 Mg",
    "Calcium: 276 Mg",
    "Phosphorus: 276 Mg",
    "Potassium: 1012 Mg",
    "Magnesium: 73.6 Mg",
    "Manganese: 1.1 Mg",
    "Chloride: 920 Mg",
  ];

  return (
    // ✅ One parent div — fully responsive
    <div className="w-full px-6 sm:px-8 lg:px-24 py-10 mx-auto">
      <div className="flex flex-col pl-3  lg:flex-row gap-12 lg:gap-7  ">

        {/* Macronutrients */}
        <div className="flex-1 flex flex-col gap-4 lg:pl-17">
          <div className="flex items-center gap-3 text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-ptserif text-gray-800 ">
            <span className="pt-2"><Icon /></span>
            <span>Plumpy’Nut®:</span>
          </div>
          <div className="text-[1.2rem] sm:text-[1.5rem]">
            Nutritional Values (Per 92g Sachet) Macronutrients
          </div>
          {macronutrients.map((item, index) => (
            <div key={index} className="flex items-start gap-2 text-base text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] mt-1">
              <div className="w-[28px] h-[28px] flex items-center justify-center mt-1 rounded-full bg-[#E15C3E] text-white">
                <FaCheck size={11} />
              </div>
              <span className="font-inter">{item}</span>
            </div>
          ))}
        </div>

        {/* Vitamins */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex items-center gap-3 text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-ptserif text-gray-800">
            <span className="pt-1"><Icon /></span>
            <span>Vitamins</span>
          </div>
          {vitamins.map((item, index) => (
            <div key={index} className="flex items-start gap-2 text-base text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] mt-1">
              <div className="w-[28px] h-[28px] flex items-center justify-center rounded-full bg-[#E15C3E] text-white mt-[4px] ml-1">
                <FaCheck size={11} />
              </div>
              <span className="font-inter">{item}</span>
            </div>
          ))}
        </div>

        {/* Minerals */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex items-center gap-3 text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-ptserif text-gray-800">
            <span className="pt-1"><Icon /></span>
            <span>Minerals</span>
          </div>
          {minerals.map((item, index) => (
            <div key={index} className="flex items-start gap-2 text-base text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] mt-1 ml-1.5">
              <div className="w-[28px] h-[28px] flex items-center justify-center rounded-full bg-[#E15C3E] text-white mt-[6px]">
                <FaCheck size={11} />
              </div>
              <span className="font-inter">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NutritionInfo;
