import { FaAngleLeft } from "react-icons/fa";
import pic1 from "../../assets/channel/pic1.jpg";
import pic2 from "../../assets/channel/pic1-768.jpg";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";

const Channel = () => {
  const [opacity, setOpacity] = useState(false);

  return (
    <section className="channel xl:mx-10 md:mx-8 mx-6 mt-10 mb-5">
      <div className="transition flex items-center  text-gray-200 w-30 mb-5 hover:text-blue-300  cursor-pointer">
        <h3 className="text-lg font-semibold">کانال</h3>
        <FaAngleLeft className="pr-5 text-xl font-semibold w-8" />
      </div>
      <div
        className="cursor-pointer relative xl:w-[calc((100%-4rem)/3)] w-[calc((100%-4rem)/2)] "
        onMouseEnter={() => {
          setOpacity(true);
        }}
        onMouseLeave={() => {
          setOpacity(false);
        }}
      >
        <picture>
          <source media="(min-width: 768px)" srcSet={pic1} />
          <img src={pic2} alt="pic" className=" rounded-xl" />
        </picture>
        <div
          className="transition-opacity flex justify-center items-center absolute
          bg-gray-200 w-15 h-15 rounded-full text-black bottom-15 right-50 text-2xl opacity-0"
          style={opacity ? { opacity: 1 } : { opacity: 0 }}
        >
          <FaPlay />
        </div>
        <div
          className="flex items-center absolute bottom-3 left-3 bg-black/50 rounded-xl 
          text-white font-bold md:text-xl text-sm py-1 md:px-4 px-3"
        >
          <span>۲۱:۰۰ - ۰۷:۰۰</span>
          <div className="relative flex h-3= w-3 items-center justify-center md:mr-2 mr-1">
            <span className="absolute inline-flex h-1.5 md:h-2 w-1.5 md:w-2 animate-ping rounded-full bg-red-500 opacity-75"></span>
          </div>
        </div>
      </div>
      <p className="text-white md:text-sm text-xs mt-1">کانال کودک</p>
    </section>
  );
};
export default Channel;
