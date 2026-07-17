import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import {
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
} from "../../assets/highlight/index";
import { useEffect, useRef, useState } from "react";
const HighLight = () => {
  const [page, setPage] = useState(0);
  const [flag, setFlag] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(5);

  const slideRef = useRef(null);

  const imgArray = [pic1, pic2, pic3, pic4, pic5, pic6, pic1];
  const totalPages = Math.ceil(imgArray.length / visibleCards);

  useEffect(() => {
    const updateCardSize = () => {
      if (!slideRef.current) return;
      const firstCart = slideRef.current.children[0];
      if (!firstCart) return;
      if (window.innerWidth >= 768) {
        setVisibleCards(5);
      } else {
        setVisibleCards(4);
      }
      setCardWidth(firstCart.offsetWidth);
    };
    updateCardSize();
    window.addEventListener("resize", updateCardSize);
    return () => {
      window.removeEventListener("resize", updateCardSize);
    };
  }, []);
  return (
    <section
      className="highlight mt-16 mb-5 overflow-hidden xl:px-10 md:px-8 px-6"
      onMouseEnter={() =>
        window.innerWidth < 1280 ? setFlag(true) : setFlag(false)
      }
      onMouseLeave={() => setFlag(false)}
    >
      <div className="transition flex items-center text-gray-200 w-30 mb-5 hover:text-blue-300  cursor-pointer">
        <h3 className="text-lg font-semibold">هایلایت</h3>
        <FaAngleLeft className="pr-5 text-xl font-semibold w-8" />
      </div>

      <div className="inner-highlight relative">
        <button
          className="transition-opacity cursor-pointer absolute text-white md:-left-12 -left-8 bottom-0 opacity-0 z-10 h-full px-3
          bg-linear-to-r from-black/90 via-black/40 to-black/0 xl:hidden"
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
          bg-linear-to-l from-black/90 via-black/40 to-black/0 xl:hidden"
          style={flag && page !== 0 ? { opacity: 1 } : { opacity: 0 }}
          onClick={() => setPage((prev) => (page > 0 ? prev - 1 : prev))}
        >
          <FaAngleRight className="text-2xl" />
        </button>
        <div
          className="flex"
          ref={slideRef}
          style={{
            transform: `translateX(${page * (cardWidth + 16) * visibleCards}px)`,
            transition: "transform 1s ease-in 0.1s",
          }}
        >
          {imgArray.map((img, index) => (
            <div
              key={index}
              className="rounded-full md:max-w-[calc((100%-4rem)/5)] max-w-[calc((100%-3.5rem)/4)] border-2 border-blue-500 ml-4 cursor-pointer overflow-hidden shrink-0 xl:shrink"
            >
              <img
                src={img}
                alt={`pic${index}`}
                className="rounded-full scale-95"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default HighLight;
