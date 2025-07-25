import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const TherapeuticFoodDescription = ({ selectedLang }) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (selectedLang && i18n.language !== selectedLang) {
      i18n.changeLanguage(selectedLang);
    }
  }, [selectedLang, i18n]);

  return (
    <div className="w-full font-ptserif max-w-screen-700xl px-4 md:px-8 text-black mt-16 mx-auto flex justify-center gap-1">
      <p className="text-lg sm:text-xl md:text-[2.5rem] text-center max-w-full leading-relaxed whitespace-pre-line">
        {t("TherapeuticFoodDescription")}
      </p>
    </div>
  );
};

export default TherapeuticFoodDescription;
