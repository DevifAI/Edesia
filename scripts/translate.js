// translate.js
import translate from "google-translate-api-x";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const languages = [
  "en",
  "ar",
  "es",
  "pt",
  "sw",
  "ha",
  "yo",
  "ig",
  "am",
  "om",
  "so",
  "sa",
  "ti",
  "lg",
  "ln",
  "kg",
  "rw",
  "mg",
  "ny",
  "nus",
  "din",
  "ps",
  "pa",
  "sd",
  "tl",
  "qu",
  "ht",
  "tw",
];

// ✅ Add any new keys here
const sourceText = {
  TherapeuticFoodDescription: `Peanut-based, Ready-to-Use Therapeutic Food (RUTF). For the 
dietary management of children suffering from severe acute 
malnutrition without medical complications. For children 6 months 
of age and older. 1 SACHET = 500 kcal. Dose recommendation: 
150–185 kcal/kg/day per child for 6 to 10 weeks`,

  UsageInstructions: "Usage Instructions",
  DoNotAddWater: "Do Not Add Water",
  DoNotHeat: "Do Not Heat",
  SqueezeAndEat: "Squeeze & Eat",
  ChildEats: "Child Eats",
  SupplementWithBreastfeeding: "Supplement With Breastfeeding",

  Ingredients: "Ingredients",
  IngredientsLine1: "Peanut Paste, Sugar, Soy Protein Isolate,",
  IngredientsLine2: "Vegetable Oils (Soybean, Canola), Skimmed",
  IngredientsLine3: "Milk Powder, Whey Permeate (Milk), Palm",
  IngredientsLine4: "Oil, Cocoa, Vitamins And Minerals.",
  ContainsAllergens: "Contains Peanuts, Soy, And Milk.",

  StorageHeading: "Storage:",
  StorageInstruction: "Store At 25°C Or Below. Avoid Prolonged Exposure To Heat.",

  // 👇 New NutritionInfo keys
  PlumpynutLabel: "Plumpy’Nut®:",
  MacronutrientsLabel: "Nutritional Values (Per 92g Sachet) Macronutrients",
  Macronutrient_Energy: "Energy: 500 Kcal",
  Macronutrient_Protein: "Protein: 12.5 G",
  Macronutrient_Fat: "Fat: 32.8 G",
  Macronutrient_SaturatedFat: "Saturated Fat: 8.5 G",
  Macronutrient_Carbohydrates: "Carbohydrates: 41.4 G",
  Macronutrient_Sugars: "Sugars: 9.2 G",
  Macronutrient_Fiber: "Fiber: 2.0 G",
  Macronutrient_Sodium: "Sodium: 208 Mg",
  Macronutrient_Ash: "Ash: 2.3 G",
  Macronutrient_Moisture: "Moisture: 1.8 G",

  VitaminsLabel: "Vitamins :",
  Vitamin_A: "Vitamin A: 1012 Mg",
  Vitamin_D: "Vitamin D: 15.6 Mg",
  Vitamin_E: "Vitamin E: 18.4 Mg",
  Vitamin_K: "Vitamin K: 27.6 Mg",
  Vitamin_C: "Vitamin C: 82.8 Mg",
  Vitamin_B1: "Vitamin B1 (Thiamine): 0.46 Mg",
  Vitamin_B2: "Vitamin B2 (Riboflavin): 1.47 Mg",
  Vitamin_B3: "Vitamin B3 (Niacin): 4.6 Mg",
  Vitamin_B5: "Vitamin B5 (Pantothenic Acid): 2.85 Mg",
  Vitamin_B6: "Vitamin B6: 0.55 Mg",
  Vitamin_B8: "Vitamin B8 (Biotin): 55.2 Mg",
  Vitamin_B9: "Vitamin B9 (Folic Acid): 184 Mg",
  Vitamin_B12: "Vitamin B12: 1.47 Mg",

  MineralsLabel: "Minerals:",
  Mineral_Iron: "Iron: 9.7 Mg",
  Mineral_Zinc: "Zinc: 10.1 Mg",
  Mineral_Copper: "Copper: 1.29 Mg",
  Mineral_Iodine: "Iodine: 82.8 Mg",
  Mineral_Selenium: "Selenium: 18.4 Mg",
  Mineral_Calcium: "Calcium: 276 Mg",
  Mineral_Phosphorus: "Phosphorus: 276 Mg",
  Mineral_Potassium: "Potassium: 1012 Mg",
  Mineral_Magnesium: "Magnesium: 73.6 Mg",
  Mineral_Manganese: "Manganese: 1.1 Mg",
  Mineral_Chloride: "Chloride: 920 Mg"
};


(async () => {
  for (const lang of languages) {
    const outputDir = path.join(__dirname, `../public/locales/${lang}`);
    const filePath = path.join(outputDir, "translation.json");

    // ✅ Load existing translations
    let existingTranslations = {};
    if (await fs.pathExists(filePath)) {
      existingTranslations = await fs.readJson(filePath);
    }

    // 🔄 Translate only missing keys
    for (const key in sourceText) {
      if (!existingTranslations[key]) {
        try {
          const text = sourceText[key];
          if (lang === "en") {
            existingTranslations[key] = text;
          } else {
            const res = await translate(text, { to: lang });
            console.log(`"${text}" → "${res.text}" in [${lang}]`);
            existingTranslations[key] = res.text;
          }
        } catch (error) {
          console.error(`❌ Error translating to ${lang}:`, error.message);
          existingTranslations[key] = sourceText[key]; // fallback
        }
      }
    }

    // ✅ Save merged result
    await fs.ensureDir(outputDir);
    await fs.writeJson(filePath, existingTranslations, { spaces: 2 });

    console.log(`✅ Updated translation saved: ${lang}`);
  }
})();
