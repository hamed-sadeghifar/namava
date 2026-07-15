import { FaAngleLeft } from "react-icons/fa";
import pic1 from "../../assets/channel/pic1.jpg";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";

const Channel = () => {
  const [opacity, setOpacity] = useState(false);
  return (
    <section className="channel mx-10 mt-10 mb-5">
      <div className="transition flex items-center  text-gray-200 w-30 mb-5 hover:text-blue-300  cursor-pointer">
        <h3 className="text-lg font-semibold">کانال</h3>
        <FaAngleLeft className="pr-5 text-xl font-semibold w-8" />
      </div>
      <div
        className="cursor-pointer relative w-md"
        onMouseEnter={() => {
          setOpacity(true);
        }}
        onMouseLeave={() => {
          setOpacity(false);
        }}
      >
        <img src={pic1} alt="pic1" className=" rounded-xl" />
        <div
          className="transition-opacity flex justify-center items-center absolute
          bg-gray-200 w-15 h-15 rounded-full text-black bottom-15 right-50 text-2xl opacity-0"
          style={opacity ? { opacity: 1 } : { opacity: 0 }}
        >
          <FaPlay />
        </div>
        <div
          className="flex items-center absolute bottom-3 left-3 bg-black/50 rounded-xl 
          text-white font-bold text-xl py-1 px-4"
        >
          <span>۲۱:۰۰ - ۰۷:۰۰</span>
          <div className="relative flex h-3 w-3 items-center justify-center mr-2">
            <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-red-500 opacity-75"></span>
          </div>
        </div>
      </div>
      <p className="text-white text-sm mt-1">کانال کودک</p>
    </section>
  );
};
export default Channel;
