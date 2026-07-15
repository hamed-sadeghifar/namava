import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
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
const SpcialForNamava = () => {
  const [page, setPage] = useState(0);
  const [flag, setFlag] = useState(false);
  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10];
  const totalPages = Math.ceil(images.length / 6);
  return (
    <section
      className="spcial mt-16 mb-5 relative overflow-hidden"
      onMouseEnter={() => setFlag(true)}
      onMouseLeave={() => setFlag(false)}
    >
      <button
        className="transition-opacity cursor-pointer absolute text-white bg-linear-to-r from-black/80 via-black/40 to-black/0 left-0 bottom-0 opacity-0 z-10 py-51 px-1"
        style={flag && page < totalPages - 1 ? { opacity: 1 } : { opacity: 0 }}
        onClick={() =>
          setPage((prev) => (page < totalPages - 1 ? prev + 1 : prev))
        }
      >
        <FaAngleLeft className="text-2xl" />
      </button>
      <button
        className="transition-opacity cursor-pointer absolute text-white bg-linear-to-l from-black/80 via-black/40 to-black/0 right-0 bottom-0 opacity-0 z-10 py-51 px-1"
        style={flag && page !== 0 ? { opacity: 1 } : { opacity: 0 }}
        onClick={() => setPage((prev) => (page > 0 ? prev - 1 : prev))}
      >
        <FaAngleRight className="text-2xl" />
      </button>
      <div
        className="mx-10"
        style={{
          transform: `translateX(${page * 1300}px)`,
          transition: "transform 1s ease-in 0.1s",
        }}
      >
        <div className="transition flex items-center  text-gray-200 w-50 mb-5 hover:text-blue-300  cursor-pointer">
          <h3 className="text-lg font-semibold">اختصاصی نماوا</h3>
          <FaAngleLeft className="pr-5 text-xl font-semibold w-8" />
        </div>
        <div className="flex gap-x-4">
          {specialArray.map((spicial, index) => (
            <div className="text-gray-300 text-sm font-medium" key={index}>
              <div className="relative w-50 rounded-md overflow-hidden cursor-pointer">
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
export default SpcialForNamava;
