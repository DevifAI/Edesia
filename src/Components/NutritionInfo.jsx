import React from "react";
import { FaCheck } from "react-icons/fa";
import Icon from "./Icon";

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
    "Vitamin C: 82.8 Mg",
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
    <div className="w-full max-w-7xl px-4 sm:px-8 md:px-10 xl:px-14 py-10 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">

        {/* Macronutrients */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3 text-gray-800 font-ptserif text-[clamp(1.75rem,2.5vw,3rem)]">
            <span className="pt-1"><Icon /></span>
            <span>Plumpy’Nut®:</span>
          </div>
          <div className="text-[clamp(1.1rem,1.5vw,1.4rem)] ">
            Nutritional Values (Per 92g Sachet) Macronutrients
          </div>
          {macronutrients.map((item, index) => (
            <div key={index} className="flex items-start gap-3 text-[clamp(1rem,1.3vw,1.25rem)]">
              <div className="min-w-[1.75rem] h-[1.75rem] flex items-center justify-center rounded-full bg-[#E15C3E] text-white mt-1">
                <FaCheck size={12} />
              </div>
              <span className="font-inter">{item}</span>
            </div>
          ))}
        </div>

        {/* Vitamins */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3 text-gray-800 font-ptserif text-[clamp(1.75rem,2.5vw,3rem)]">
            <span className="pt-1"><Icon /></span>
            <span>Vitamins :</span>
          </div>
          {vitamins.map((item, index) => (
            <div key={index} className="flex items-start gap-3 text-[clamp(1rem,1.3vw,1.25rem)]">
              <div className="min-w-[1.75rem] h-[1.75rem] flex items-center justify-center rounded-full bg-[#E15C3E] text-white mt-[6px] ml-2">
                <FaCheck size={12} />
              </div>
              <span className="font-inter">{item}</span>
            </div>
          ))}
        </div>

        {/* Minerals */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3 text-gray-800 font-ptserif text-[clamp(1.75rem,2.5vw,3rem)]">
            <span className="pt-1"><Icon /></span>
            <span>Minerals:</span>
          </div>
          {minerals.map((item, index) => (
            <div key={index} className="flex items-start gap-3 text-[clamp(1rem,1.3vw,1.25rem)]">
              <div className="min-w-[1.75rem] h-[1.75rem] flex items-center justify-center rounded-full bg-[#E15C3E] text-white mt-[6px] ml-2">
                <FaCheck size={12} />
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
