import { useTranslation } from "react-i18next";
import { AiOutlineClose } from "react-icons/ai";
import { IoCheckmarkSharp } from "react-icons/io5";
import Icon from "./Icon";
import { useEffect } from "react";

const UsageAndIngredients = ({ selectedLang }) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (selectedLang && i18n.language !== selectedLang) {
      i18n.changeLanguage(selectedLang);
    }
  }, [selectedLang, i18n]);

  const usageSteps = [
    {
      key: "DoNotAddWater",
      icon: <AiOutlineClose className="text-[#E15C3E] text-lg mt-[3px]" />,
    },
    {
      key: "DoNotHeat",
      icon: <AiOutlineClose className="text-[#E15C3E] text-lg mt-[3px]" />,
    },
    {
      key: "SqueezeAndEat",
      icon: <IoCheckmarkSharp className="text-blue-500 text-lg mt-[3px]" />,
    },
    {
      key: "ChildEats",
      icon: <IoCheckmarkSharp className="text-blue-500 text-lg mt-[3px]" />,
    },
    {
      key: "SupplementWithBreastfeeding",
      icon: <IoCheckmarkSharp className="text-blue-500 text-lg mt-[3px]" />,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-16 2xl:px-20 py-10 grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12 sm:gap-x-14 lg:gap-x-20">
      {/* ===== Usage Instructions ===== */}
      <div className="flex flex-col gap-5 min-w-[16rem]">
        <div className="flex items-center gap-2 font-ptserif text-gray-800 text-[1.75rem] sm:text-3xl md:text-4xl xl:text-[2.5rem] 2xl:text-[2.rem]">
          <span className="text-[1.8rem] md:text-[2.2rem] flex items-center justify-center">
            <Icon />
          </span>
          <span>{t("UsageInstructions")}:</span>
        </div>

        {usageSteps.map((step, idx) => (
          <div key={step.key} className="flex items-start gap-2">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#E15C3E] text-white font-semibold text-sm mt-1 ml-2">
              {idx + 1}
            </div>
            <span className="flex items-center font-inter gap-1 text-base sm:text-lg md:text-xl xl:text-[1.3rem] text-gray-800">
              {t(step.key)} {step.icon}
            </span>
          </div>
        ))}
      </div>

      {/* ===== Ingredients ===== */}
      <div className="flex flex-col gap-3 min-w-[16rem]">
        <div className="flex items-center gap-2 font-ptserif text-gray-800 text-[1.75rem] sm:text-3xl md:text-4xl xl:text-[2.5rem] 2xl:text-[2.rem]">
          <span className="text-[1.8rem] md:text-[2.2rem] flex items-center justify-center">
            <Icon />
          </span>
          <span>{t("Ingredients")}:</span>
        </div>

        <div className="flex flex-col gap-1 text-gray-700 font-inter text-base sm:text-lg md:text-xl xl:text-[1.3rem] leading-relaxed ml-2">
          <p>{t("IngredientsLine1")}</p>
          <p>{t("IngredientsLine2")}</p>
          <p>{t("IngredientsLine3")}</p>
          <p>{t("IngredientsLine4")}</p>
        </div>

        <p className="text-gray-700 font-inter text-base sm:text-lg md:text-xl xl:text-[1.3rem] ml-2">
          {t("ContainsAllergens")}
        </p>

        <p className="text-gray-700 font-inter text-base sm:text-lg md:text-xl xl:text-[1.3rem] ml-2">
          <span className="">{t("StorageHeading")}</span>{" "}
          {t("StorageInstruction")}
        </p>
      </div>
    </div>
  );
};

export default UsageAndIngredients;
