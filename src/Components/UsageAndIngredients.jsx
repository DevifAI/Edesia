import { AiOutlineClose } from "react-icons/ai";
import { IoCheckmarkSharp } from "react-icons/io5";
import Icon from "./Icon";

const UsageAndIngredients = () => {
  return (
<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-10   grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12 sm:gap-x-14 lg:gap-x-20">

  {/* ===== Usage Instructions ===== */}
  <div className="flex flex-col gap-5 min-w-[16rem]">
    <div className="flex items-center gap-2 font-ptserif text-gray-800 text-[1.75rem] sm:text-3xl md:text-4xl xl:text-[2.5rem] 2xl:text-[2.rem]">
      <span className="text-[1.8rem] md:text-[2.2rem] flex items-center justify-center">
        <Icon />
      </span>
      <span>Usage Instructions:</span>
    </div>

    {[
      "Do Not Add Water",
      "Do Not Heat",
      "Squeeze & Eat",
      "Child Eats",
      "Supplement With Breastfeeding",
    ].map((text, idx) => (
      <div key={idx} className="flex items-start gap-2">
        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#E15C3E] text-white font-semibold text-sm mt-1 ml-2">
          {idx + 1}
        </div>
        <span className="flex items-center font-inter gap-1 text-base sm:text-lg md:text-xl xl:text-[1.3rem] text-gray-800">
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
  <div className="flex flex-col gap-3 min-w-[16rem]">
    <div className="flex items-center gap-2 font-ptserif text-gray-800 text-[1.75rem] sm:text-3xl md:text-4xl xl:text-[2.5rem] 2xl:text-[2.rem]">
      <span className="text-[1.8rem] md:text-[2.2rem] flex items-center justify-center">
        <Icon />
      </span>
      <span>Ingredients:</span>
    </div>

    <div className="flex flex-col gap-1 text-gray-700 font-inter text-base sm:text-lg md:text-xl xl:text-[1.3rem] leading-relaxed ml-2">
      <p>Peanut Paste, Sugar, Soy Protein Isolate,</p>
      <p>Vegetable Oils (Soybean, Canola), Skimmed</p>
      <p>Milk Powder, Whey Permeate (Milk), Palm</p>
      <p>Oil, Cocoa, Vitamins And Minerals.</p>
    </div>

    <p className="text-gray-700 font-inter text-base sm:text-lg md:text-xl xl:text-[1.3rem] ml-2">
      Contains Peanuts, Soy, And Milk.
    </p>

    <p className="text-gray-700 font-inter text-base sm:text-lg md:text-xl xl:text-[1.3rem] ml-2">
      <span className="">Storage:</span> Store At 25°C Or Below. <br />
      Avoid Prolonged Exposure To Heat.
    </p>
  </div>
</div>


  );
};

export default UsageAndIngredients;
