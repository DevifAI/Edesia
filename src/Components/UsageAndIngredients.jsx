import { AiOutlineClose } from "react-icons/ai";
import { IoCheckmarkSharp } from "react-icons/io5";
import Icon from "./Icon";
 // Replace with your actual icon import

const UsageAndIngredients = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-18 flex flex-col md:flex-row justify-between gap-10 md:gap-20 mt-8 mb-7">

      {/* ===== Usage Instructions ===== */}
      <div className="flex flex-col gap-4 flex-1 min-w-[17.5rem] pl-1">
        <div className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] flex items-start gap-2.5 font-ptserif text-gray-800">
          <span className="pt-6 sm:mt-2"><Icon /></span>
          <span className="pb-2 pt-1.5 sm:pt-3 mt-3 sm:mt-0">Usage Instructions:</span>
        </div>
        {[
          "Do Not Add Water",
          "Do Not Heat",
          "Squeeze & Eat",
          "Child Eats",
          "Supplement With Breastfeeding",
        ].map((text, idx) => (
          <div key={idx} className="text-base flex items-start gap-2 pl-1">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#E15C3E] text-white text-md font-semibold shrink-0 mt-1.5 ml-2 pt-0">
              {idx + 1}
            </div>
            <span className="flex items-center font-inter gap-1 text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem]">
              {text}
              {(idx === 0 || idx === 1) && (
                <AiOutlineClose className="text-[#E15C3E] text-lg mt-[3px]" />
              )}
              {(idx >= 2 && idx <= 4) && (
                <IoCheckmarkSharp className="text-blue-500 text-lg mt-[3px]" />
              )}
            </span>
          </div>
        ))}
      </div>

      {/* ===== Ingredients ===== */}
      <div className="flex flex-col gap-3 flex-1 min-w-[17.5rem] pl-1">
        <div className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] flex items-start gap-2 font-ptserif text-gray-800">
          <span className="pt-6 sm:mt-2"><Icon /></span>
          <span className="pt-2 sm:pt-3 mt-3 sm:mt-0">Ingredients:</span>
        </div>
        <div className="flex flex-col gap-0.5 mt-2 text-gray-700 font-inter text-[1.2rem] leading-relaxed sm:text-[1.3rem] md:text-[1.5rem]">
          <p>Peanut Paste, Sugar, Soy Protein Isolate</p>
          <p>Vegetable Oils (Soybean, Canola), Skimmed</p>
          <p>Milk Powder, Whey Permeate (Milk), Palm</p>
          <p>Oil, Cocoa, Vitamins And Minerals..</p>
        </div>
        <p className="text-gray-700 text-[1.3rem] md:text-[1.5rem] mt-0.5">
          Contains Peanuts, Soy, and Milk.
        </p>
        <p className="text-gray-700 text-[1.3rem] md:text-[1.5rem] mb-1">
          <span>Storage:</span> Store at 25°C Or Below. <br />
          Avoid <br className="sm:hidden" /> Prolonged Exposure To Heat.
        </p>
      </div>

    </div>
  );
};

export default UsageAndIngredients;
