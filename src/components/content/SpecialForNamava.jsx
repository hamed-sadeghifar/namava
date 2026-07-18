import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import {
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic9,
  pic10,
} from "../../assets/spcial/index";

const specialArray = [
  {
    img: pic1,
    typeAndYear: "سریال-۱۴۰۵",
    like: "۸۳٪",
    genre: "کمدی-ورزشی",
    title: "درجام",
  },
  {
    img: pic2,
    typeAndYear: "سریال-۱۴۰۲",
    like: "۸۳٪",
    genre: "درام-اکشن",
    title: "هفت",
  },
  {
    img: pic3,
    typeAndYear: "سریال-۱۴۰۴",
    like: "۹۳٪",
    genre: "درام-تاریخی",
    title: "سووشون",
  },
  {
    img: pic4,
    typeAndYear: "سریال-۱۴۰۵",
    like: "۸۵٪",
    genre: "برتیرین‌ها-تاک‌شو",
    title: "سردلبران",
  },
  {
    img: pic5,
    typeAndYear: "سریال-۱۴۰۳",
    like: "۷۸٪",
    genre: "جنایی-رازآلود",
    title: "ازازیل",
  },
  {
    img: pic6,
    typeAndYear: "سریال-۱۴۰۴",
    like: "۶۷٪",
    genre: "برترین‌ها-ریلیتی‌شو",
    title: "چهره‌شو",
  },
  {
    img: pic7,
    typeAndYear: "سریال-۱۴۰۳",
    like: "۸۹٪",
    genre: "کمدی-برترین‌ها",
    title: "نیمه‌شب باامیرحسین قیاسی",
  },
  {
    img: pic8,
    typeAndYear: "سریال-۱۴۰۴",
    like: "۷۹٪",
    genre: "خانوادگی-کودک",
    title: "ماه لالا",
  },
  {
    img: pic9,
    typeAndYear: "سریال-۱۴۰۱",
    like: "۸۳٪",
    genre: "درام-برترین‌ها",
    title: "سرگیجه",
  },
  {
    img: pic10,
    typeAndYear: "سریال-۱۴۰۳",
    like: "۸۲٪",
    genre: "درام-جنایی",
    title: "بلیط یک‌طرفه",
  },
];
const SpecialForNamava = () => {
  const [page, setPage] = useState(0);
  const [flag, setFlag] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(7);

  const slideRef = useRef(null);

  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10];
  const totalPages = Math.ceil(images.length / visibleCards);

  useEffect(() => {
    const updateCardSize = () => {
      if (!slideRef.current) return;
      const firstCart = slideRef.current.children[0];
      if (!firstCart) return;
      if (window.innerWidth > 1280) {
        setVisibleCards(7);
      } else if (window.innerWidth > 768) {
        setVisibleCards(5);
      } else {
        setVisibleCards(4);
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
      className="spcial-for-namava mt-16 mb-5 overflow-hidden xl:px-10 md:px-8 px-6"
      onMouseEnter={() => setFlag(true)}
      onMouseLeave={() => setFlag(false)}
    >
      <div className="transition flex items-center  text-gray-200 w-50 mb-5 hover:text-blue-300  cursor-pointer">
        <h3 className="text-lg font-semibold">اختصاصی نماوا</h3>
        <FaAngleLeft className="pr-5 text-xl font-semibold w-8" />
      </div>
      <div className="inner-spcial-for-namava relative">
        <button
          className="transition-opacity cursor-pointer absolute text-white md:-left-12 -left-8 bottom-4 opacity-0 z-10 h-full px-3
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
          className="transition-opacity cursor-pointer absolute text-white md:-right-12 -right-8 bottom-4 opacity-0 z-10 h-full px-3
          bg-linear-to-l from-black/90 via-black/40 to-black/0"
          style={flag && page !== 0 ? { opacity: 1 } : { opacity: 0 }}
          onClick={() => setPage((prev) => (page > 0 ? prev - 1 : prev))}
        >
          <FaAngleRight className="text-2xl" />
        </button>
        <div
          className="flex gap-x-4"
          ref={slideRef}
          style={{
            transform: `translateX(${page * (cardWidth + 16) * visibleCards}px)`,
            transition: "transform 1s ease-in 0.1s",
          }}
        >
          {specialArray.map((spicial, index) => (
            <div
              className="text-gray-300 md:text-sm text-xs font-medium
              shrink-0 xl:w-[calc((100%-6rem)/7)] md:w-[calc((100%-4rem)/5)] w-[calc((100%-3rem)/4)]"
              key={index}
            >
              <div className="relative rounded-md overflow-hidden cursor-pointer">
                <img src={spicial.img} alt="pic1" />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/20 opacity-0 hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-10 right-4">
                    <p className="mb-2">{spicial.typeAndYear}</p>
                    <div className="flex items-center mb-2">
                      <FaHeart className="ml-1" />
                      <p>{spicial.like}</p>
                    </div>
                    <p className="text-base font-semibold mb-2">
                      {spicial.genre}
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-2">{spicial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SpecialForNamava;
