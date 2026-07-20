import { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Navbar from "./Navbar";
import Slider from "./Slider";

import {
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  backPic1,
  backPic2,
  backPic3,
  backPic4,
  backPic5,
  backPic6,
} from "../../assets/headerSlider";

const arraySlider = [
  {
    backImg: pic1,
    img: backPic1,
    title: "جنگ ستارگان:‌ ماول – ارباب سایه ها",
    description: false,
    age: "۷+",
    season: "۱ فصل",
    year: "۲۰۲۶",
    minutes: false,
    imdb: "8.5",
    like: "۷۹٪",
    double: true,
    subtitle: true,
    play: true,
    preview: false,
  },
  {
    backImg: pic2,
    img: backPic2,
    title: "فوتبال پارادیزو",
    description: "فوتبال پارادیزو، پاتوقی برای عاشقان فوتبال",
    age: "۱۲+",
    season: "۱ فصل",
    year: "۱۴۰۵",
    minutes: false,
    imdb: false,
    like: "۵۲٪",
    double: false,
    subtitle: false,
    play: true,
    preview: true,
  },
  {
    backImg: pic3,
    img: backPic3,
    title: "درجام - فصل ۱ قسمت ۷",
    description: "پخش اختصاصی قسمت هفتم، با حضور امیر کاظمی",
    age: "۱۲+",
    season: false,
    year: "۱۴۰۵",
    minutes: "۶۶ دقیقه",
    imdb: false,
    like: "۸۹٪",
    double: false,
    subtitle: false,
    play: true,
    preview: true,
  },
  {
    backImg: pic4,
    img: backPic4,
    title: "دایناسورها",
    description: false,
    age: "۷+",
    season: "۱ فصل",
    year: "۲۰۲۶",
    minutes: false,
    imdb: "7.5",
    like: false,
    double: false,
    subtitle: true,
    play: true,
    preview: false,
  },
  {
    backImg: pic5,
    img: backPic5,
    title: "شرلوک جوان",
    description: false,
    age: "۱۵+",
    season: "۱ فصل",
    year: "۲۰۲۶",
    minutes: false,
    imdb: "7.5",
    like: "۹۳٪",
    double: true,
    subtitle: true,
    play: true,
    preview: false,
  },
  {
    backImg: pic6,
    img: backPic6,
    title: "سیلو",
    description: false,
    age: "۱۵+",
    season: "۳ فصل",
    year: "۲۰۲۳",
    minutes: false,
    imdb: "8.1",
    like: "۹۶٪",
    double: false,
    subtitle: true,
    play: true,
    preview: false,
  },
];

const Header = () => {
  // for maintaining an index of images and their movement
  const [currentIndex, setCurrentIndex] = useState(0);
  // special for moving circles under the image in small size
  const [currentSlice, setCurrentSlice] = useState(0);

  const totalArray = arraySlider.length;

  const intervalRef = useRef(null);

  const changeSlide = (direction) => {
    setCurrentIndex((prev) => {
      if (direction === "next") {
        return prev === totalArray - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? totalArray - 1 : prev - 1;
    });
  };

  const restartAutoPlay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlice((prev) => (prev + 1) % totalArray);
      changeSlide("next");
    }, 5000);
  };

  useEffect(() => {
    restartAutoPlay();
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <header className="relative w-full xl:aspect-19/9 md:aspect-17.5/9 aspect-14.5/9 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover blur-xl scale-125"
        style={{
          backgroundImage: `url(${arraySlider[currentIndex].backImg})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/60 to-black"></div>
      <div className="inner-header relative z-10 w-full">
        <div className="xl:h-20 h-15">
          <Navbar />
        </div>
        <Slider arraySlider={arraySlider} currentIndex={currentIndex} />
        <button
          className="transition w-10 h-10 md:flex justify-center items-center rounded-full bg-black/60 hidden
        hover:bg-white/40 cursor-pointer absolute text-white left-20 bottom-10"
          onClick={() => {
            restartAutoPlay();
            changeSlide("next");
          }}
        >
          <FaAngleLeft className="text-2xl" />
        </button>
        <button
          className="transition w-10 h-10 md:flex justify-center items-center rounded-full bg-black/60 hidden
        hover:bg-white/40 cursor-pointer absolute text-white left-32 bottom-10"
          onClick={() => {
            restartAutoPlay();
            changeSlide("prev");
          }}
        >
          <FaAngleRight className="text-2xl" />
        </button>
        <div className="flex gap-2 justify-center mt-5 md:hidden">
          {Array.from({ length: totalArray }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 inset-0 rounded-full transition-colors duration-500
                ${currentSlice === index ? "bg-white" : "bg-mist-500"}
                `}
            ></div>
          ))}
        </div>
      </div>
    </header>
  );
};
export default Header;
