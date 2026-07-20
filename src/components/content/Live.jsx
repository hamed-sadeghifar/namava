import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { pic1, pic2, pic3, pic4, pic5 } from "../../assets/live/index";
import { useEffect, useRef, useState } from "react";

const Live = () => {
  const [hoverCart, setHoverCart] = useState(false);
  const [page, setPage] = useState(0);
  const [flag, setFlag] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const slideRef = useRef(null);

  const images = [pic1, pic2, pic3, pic4, pic5];
  const images2 = [pic2, pic3, pic4, pic5];

  const totalPages = Math.ceil(images.length / visibleCards);

  useEffect(() => {
    const updateCardSize = () => {
      if (!slideRef.current) return;
      const firstCart = slideRef.current.children[0];
      if (!firstCart) return;
      if (window.innerWidth > 1280) {
        setVisibleCards(3);
      } else {
        setVisibleCards(2);
      }
      setCardWidth(firstCart.getBoundingClientRect().width);
    };
    updateCardSize();
    window.addEventListener("resize", updateCardSize);
    return () => {
      window.removeEventListener("resize", updateCardSize);
    };
  }, []);

  return (
    <section
      className="live mt-16 mb-5 overflow-hidden xl:px-10 md:px-8 px-6"
      onMouseEnter={() => setFlag(true)}
      onMouseLeave={() => setFlag(false)}
    >
      <div className="transition flex items-center  text-gray-200 w-30 mb-5 hover:text-blue-300  cursor-pointer">
        <h3 className="text-lg font-semibold">پخش زنده</h3>
        <FaAngleLeft className="pr-5 text-xl font-semibold w-8" />
      </div>
      <div className="inner-live-sectione relative">
        <button
          className="transition-opacity cursor-pointer absolute text-white md:-left-12 -left-8 bottom-0 opacity-0 z-10 h-full px-3
          bg-linear-to-r from-black/90 via-black/40 to-black/0"
          style={
            flag && page < totalPages - 1 ? { opacity: 1 } : { opacity: 0 }
          }
          onClick={() =>
            setPage((prev) => (page < totalPages - 1 ? prev + 1 : prev))
          }
        >
          <FaAngleLeft className="text-2xl" />
        </button>
        <button
          className="transition-opacity cursor-pointer absolute text-white md:-right-12 -right-8 bottom-0 opacity-0 z-10 h-full px-3
          bg-linear-to-l from-black/90 via-black/40 to-black/0"
          style={flag && page !== 0 ? { opacity: 1 } : { opacity: 0 }}
          onClick={() => setPage((prev) => (page > 0 ? prev - 1 : prev))}
        >
          <FaAngleRight className="text-2xl" />
        </button>
        <div
          className="flex gap-4 xl:text-base md:text-sm text-xs"
          ref={slideRef}
          style={{
            transform: `translateX(${page * (cardWidth + 16) * visibleCards}px)`,
            transition: "transform 1s ease-in 0.1s",
          }}
        >
          <div
            className="text-white rounded-md bg-mist-800 overflow-hidden cursor-pointer
            xl:w-[calc((100%-15rem)/3)] md:w-[calc((100%-15rem)/2)] w-[calc((100%-1rem)/2)] shrink-0"
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
          {images2.map((image, index) => (
            <div
              className="text-white rounded-md bg-mist-800 overflow-hidden cursor-pointer
          xl:w-[calc((100%-15rem)/3)] md:w-[calc((100%-15rem)/2)] w-[calc((100%-1rem)/2)] shrink-0"
              key={index}
            >
              <img src={image} alt="pic1" className="mb-4" />
              <div className="px-4">
                <p className="my-2">فوتبال اسپانیا - آلمان</p>
                <p className="my-2">مسابقات یورو زیر ۱۹ سال - فینال</p>
                <p className="mt-2 mb-4">زمان شروع: شنبه ۲۰ تیر - ساعت ۲۱:۳۰</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Live;
