import {
  FaAngleLeft,
  FaAngleRight,
  FaPlay,
  FaHeart,
  FaVolumeUp,
  FaPause,
} from "react-icons/fa";
import { IoVolumeMute } from "react-icons/io5";
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
  pic11,
  pic12,
  video,
} from "../../assets/spicial/index";
import { useEffect, useRef, useState } from "react";

const Special = () => {
  const picArray = [
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
    pic11,
    pic12,
  ];

  const [hoveredCard, setHoveredCard] = useState(null);
  const [playVideo, setPlayVideo] = useState(null);
  const [mute, setMute] = useState(true);
  const [pause, setPause] = useState(false);

  const timeoutRef = useRef(null);
  const videoRefs = useRef([]);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);

    timeoutRef.current = setTimeout(() => {
      setPlayVideo(index);
      setPause(false);
    }, 100);
  };

  const handleMouseLeave = (index) => {
    clearTimeout(timeoutRef.current);

    setHoveredCard(null);
    setPlayVideo(null);

    const video = videoRefs.current[index];

    if (video) {
      video.pause();
      video.currentTime = 0;
      setMute(true);
    }
  };

  useEffect(() => {
    if (hoveredCard === null) return;

    const video = videoRefs.current[hoveredCard];

    if (!video) return;

    video.muted = mute;

    if (pause) {
      video.pause();
    } else {
      video.play().catch(() => {});
    }
  }, [mute, pause, hoveredCard]);

  const scaleOriginHandler = (index) => {
    switch (index) {
      case 0:
        return "origin-top-right";
      case 1:
      case 2:
        return "origin-top";
      case 3:
        return "origin-top-left";
      case 4:
        return "origin-right";
      case 5:
      case 6:
        return "origin-center";
      case 7:
        return "origin-left";
      case 8:
        return "origin-bottom-right -translate-y-17";
      case 9:
      case 10:
        return "origin-bottom -translate-y-17";
      case 11:
        return "origin-bottom-left -translate-y-17";
    }
  };

  return (
    <section className="special xl:mx-10 md:mx-8 mx-6 mt-10 mb-5 overflow-hidden">
      <div className="transition flex items-center  text-gray-200 w-30 mb-5 hover:text-blue-300  cursor-pointer">
        <h3 className="text-lg font-semibold">ویژه</h3>
        <FaAngleLeft className="pr-5 text-xl font-semibold w-8" />
      </div>
      <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 xl:gap-4">
        {picArray.map((pic, index) => (
          <div
            className="relative"
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div className=" rounded-lg cursor-pointer overflow-hidden">
              <img
                src={pic}
                alt={`pic${index + 1}`}
                className="w-full object-cover transition-opacity duration-700"
              />
            </div>
            {hoveredCard === index && window.innerWidth > 1280 && (
              <div
                className={` rounded-lg overflow-hidden transition-transform duration-500 ease-out
                  absolute top-0 left-0 w-full scale-150 z-40
                  ${scaleOriginHandler(index)}
            `}
              >
                <div className="relative">
                  <img
                    src={pic}
                    alt={`pic${index + 1}`}
                    className={`w-full object-cover transition-opacity duration-700
                ${playVideo === index ? "opacity-0" : "opacity-100"}`}
                  />
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={video}
                    loop
                    playsInline
                    className={`absolute inset-0 object-cover w-full h-full rounded-t-lg transition-opacity duration-700
                ${playVideo === index ? "opacity-100" : "opacity-0"}  `}
                  >
                    مرورگر شما از ویدیو پشتیبانی نمی‌کند.
                  </video>
                </div>

                <div className="bg-gray-800 rounded-b-lg">
                  <div className="overlay flex justify-between items-center px-2 py-4">
                    <div className="flex gap-2 shrink-0">
                      <div className="flex items-center text-base text-gray-300">
                        <FaAngleRight />
                      </div>
                      <div className="text-[9px]">
                        <p className="text-gray-300 text-xs mb-1.5">
                          فیلم سینمایی
                        </p>
                        <div className="flex items-center text-gray-300 gap-3">
                          <p className="px-1.5 shadow-2xs shadow-amber-500 py-0.5 bg-amber-700 rounded-xl text-black font-black">
                            +۱۰
                          </p>
                          <p>۱۴۰۵ 7.8 IMDb</p>
                          <p className="flex-1 flex">
                            <FaHeart className="ml-1" /> ۹۲٪
                          </p>
                          <p>دوبله نماوا</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div
                        className="flex justify-center items-center cursor-pointer
                  bg-gray-600 w-8 h-8 rounded-full text-white text-xs"
                        onClick={() => {
                          setPause((prev) => !prev);
                        }}
                      >
                        {pause ? <FaPause /> : <FaPlay />}
                      </div>

                      <div
                        className="flex justify-center items-center cursor-pointer
                  bg-gray-600 w-8 h-8 rounded-full text-white text-xs"
                        onClick={() => {
                          setMute((prev) => !prev);
                        }}
                      >
                        {mute ? <IoVolumeMute /> : <FaVolumeUp />}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
export default Special;
