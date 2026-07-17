import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { pic1, pic2, pic3, pic4, pic5 } from "../../assets/live/index";
import { useState } from "react";
const Live = () => {
  const [hoverCart, setHoverCart] = useState(false);
  const [page, setPage] = useState(0);
  const [flag, setFlag] = useState(false);
  const images = [pic1, pic2, pic3, pic4, pic5];
  const totalPages = Math.ceil(images.length / 3);
  return (
    <section
      className="live mt-16 mb-5 relative overflow-hidden"
      onMouseEnter={() => setFlag(true)}
      onMouseLeave={() => setFlag(false)}
    >
      <button
        className="transition-opacity cursor-pointer absolute text-white bg-linear-to-r from-black/80 via-black/40 to-black/0 left-0 bottom-0 opacity-0 z-10 py-32 px-1"
        style={flag && page < totalPages - 1 ? { opacity: 1 } : { opacity: 0 }}
        onClick={() =>
          setPage((prev) => (page < totalPages - 1 ? prev + 1 : prev))
        }
      >
        <FaAngleLeft className="text-2xl" />
      </button>
      <button
        className="transition-opacity cursor-pointer absolute text-white bg-linear-to-l from-black/80 via-black/40 to-black/0 right-0 bottom-0 opacity-0 z-10 py-32 px-1"
        style={flag && page !== 0 ? { opacity: 1 } : { opacity: 0 }}
        onClick={() => setPage((prev) => (page > 0 ? prev - 1 : prev))}
      >
        <FaAngleRight className="text-2xl" />
      </button>
      <div
        className="inner-live-sectione mx-10"
        style={{
          transform: `translateX(${page * 1200}px)`,
          transition: "transform 1s ease-in 0.1s",
        }}
      >
        <div className="transition flex items-center  text-gray-200 w-30 mb-5 hover:text-blue-300  cursor-pointer">
          <h3 className="text-lg font-semibold">پخش زنده</h3>
          <FaAngleLeft className="pr-5 text-xl font-semibold w-8" />
        </div>
        <div className="flex gap-x-4">
          <div
            className="text-white w-100 rounded-md bg-mist-800 overflow-hidden cursor-pointer shrink-0"
            onMouseEnter={() => {
              setHoverCart(true);
            }}
            onMouseLeave={() => {
              setHoverCart(false);
            }}
          >
            <div className="relative">
              <img src={pic1} alt="pic1" className="mb-4" />
              <div
                className={`absolute inset-0 bg-linear-to-t from-mist-800/90 via-mist-800/40 to-transparent 
                transition-opacity duration-200 ${hoverCart ? "opacity-100" : "opacity-0"}`}
              ></div>
            </div>
            <div className="px-4">
              <p className="my-2">فوتبال اسپانیا - آلمان</p>
              <p className="my-2">مسابقات یورو زیر ۱۹ سال - فینال</p>
              <div className="flex items-center">
                <span className="text-red-500">درحال پخش</span>
                <div className="relative flex h-3 w-3 items-center justify-center mr-2">
                  <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-red-500 opacity-75"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-white w-sm rounded-md bg-mist-800 overflow-hidden cursor-pointer shrink-0">
            <img src={pic2} alt="pic1" className="mb-4" />
            <div className="px-4">
              <p className="my-2">فوتبال اسپانیا - آلمان</p>
              <p className="my-2">مسابقات یورو زیر ۱۹ سال - فینال</p>
              <p className="mt-2 mb-4">زمان شروع: شنبه ۲۰ تیر - ساعت ۲۱:۳۰</p>
            </div>
          </div>
          <div className="text-white w-sm rounded-md bg-mist-800 overflow-hidden cursor-pointer shrink-0">
            <img src={pic3} alt="pic1" className="mb-4" />
            <div className="px-4">
              <p className="my-2">فوتبال اسپانیا - آلمان</p>
              <p className="my-2">مسابقات یورو زیر ۱۹ سال - فینال</p>
              <p className="mt-2 mb-4">زمان شروع: شنبه ۲۰ تیر - ساعت ۲۱:۳۰</p>
            </div>
          </div>
          <div className="text-white w-sm rounded-md bg-mist-800 overflow-hidden cursor-pointer shrink-0">
            <img src={pic4} alt="pic1" className="mb-4" />
            <div className="px-4">
              <p className="my-2">فوتبال اسپانیا - آلمان</p>
              <p className="my-2">مسابقات یورو زیر ۱۹ سال - فینال</p>
              <p className="mt-2 mb-4">زمان شروع: شنبه ۲۰ تیر - ساعت ۲۱:۳۰</p>
            </div>
          </div>
          <div className="text-white w-sm rounded-md bg-mist-800 overflow-hidden cursor-pointer shrink-0">
            <img src={pic5} alt="pic1" className="mb-4" />
            <div className="px-4">
              <p className="my-2">فوتبال اسپانیا - آلمان</p>
              <p className="my-2">مسابقات یورو زیر ۱۹ سال - فینال</p>
              <p className="mt-2 mb-4">زمان شروع: شنبه ۲۰ تیر - ساعت ۲۱:۳۰</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Live;
