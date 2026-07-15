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
  const [currentIndex, setCurrentIndex] = useState(0);

  const intervalRef = useRef(null);

  const changeSlide = (direction) => {
    setCurrentIndex((prev) => {
      if (direction === "next") {
        return prev === arraySlider.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? arraySlider.length - 1 : prev - 1;
    });
  };
  const restartAutoPlay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
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
    <header className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover blur-xl scale-125"
        style={{
          backgroundImage: `url(${arraySlider[currentIndex].backImg})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/60 to-black"></div>
      <div className="inner-header relative z-10 h-screen">
        <div className="h-20">
          <Navbar />
        </div>
        <Slider arraySlider={arraySlider} currentIndex={currentIndex} />
        <button
          className="transition w-10 h-10 flex justify-center items-center rounded-full bg-black/60 
        hover:bg-white/40 cursor-pointer absolute text-white left-20 bottom-15"
          onClick={() => {
            restartAutoPlay();
            changeSlide("next");
          }}
        >
          <FaAngleLeft className="text-2xl" />
        </button>
        <button
          className="transition w-10 h-10 flex justify-center items-center rounded-full bg-black/60 
        hover:bg-white/40 cursor-pointer absolute text-white left-32 bottom-15"
          onClick={() => {
            restartAutoPlay();
            changeSlide("prev");
          }}
        >
          <FaAngleRight className="text-2xl" />
        </button>
      </div>
    </header>
  );
};
export default Header;
