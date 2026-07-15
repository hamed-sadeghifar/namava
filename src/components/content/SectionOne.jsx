import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import {
  pic1,
  pic10,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic9,
} from "../../assets/section 1/index";
import { useState } from "react";
const SectionOne = () => {
  const [page, setPage] = useState(0);
  const [flag, setFlag] = useState(false);
  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10];
  const totalPages = Math.ceil(images.length / 3);
  return (
    <section
      className="my-10 flex relative overflow-hidden"
      onMouseEnter={() => setFlag(true)}
      onMouseLeave={() => setFlag(false)}
    >
      <button
        className="transition-opacity cursor-pointer absolute text-white left-0 bottom-0 opacity-0 z-10 py-20 px-3"
        style={flag && page < totalPages - 1 ? { opacity: 1 } : { opacity: 0 }}
        onClick={() =>
          setPage((prev) => (page < totalPages - 1 ? prev + 1 : prev))
        }
      >
        <FaAngleLeft className="text-2xl" />
      </button>
      <button
        className="transition-opacity cursor-pointer absolute text-white right-0 bottom-0 opacity-0 z-10 py-20 px-3"
        style={flag && page !== 0 ? { opacity: 1 } : { opacity: 0 }}
        onClick={() => setPage((prev) => (page > 0 ? prev - 1 : prev))}
      >
        <FaAngleRight className="text-2xl" />
      </button>
      <div
        className="flex mx-10"
        style={{
          transform: `translateX(${page * 1450}px)`,
          transition: "transform 1s ease-in 0.1s",
        }}
      >
        <img
          src={pic1}
          alt="pic1"
          className="ml-4 w-117 h-44 rounded-xl cursor-pointer shrink-0"
        />
        <img
          src={pic2}
          alt="pic2"
          className="ml-4 w-117 h-44 rounded-xl cursor-pointer shrink-0"
        />
        <img
          src={pic3}
          alt="pic3"
          className="ml-4 w-117 h-44 rounded-xl cursor-pointer shrink-0"
        />
        <img
          src={pic4}
          alt="pic4"
          className="ml-4 w-117 h-44 rounded-xl cursor-pointer shrink-0"
        />
        <img
          src={pic5}
          alt="pic5"
          className="ml-4 w-117 h-44 rounded-xl cursor-pointer shrink-0"
        />
        <img
          src={pic6}
          alt="pic6"
          className="ml-4 w-117 h-44 rounded-xl cursor-pointer shrink-0"
        />
        <img
          src={pic7}
          alt="pic7"
          className="ml-4 w-117 h-44 rounded-xl cursor-pointer shrink-0"
        />
        <img
          src={pic8}
          alt="pic8"
          className="ml-4 w-117 h-44 rounded-xl cursor-pointer shrink-0"
        />
        <img
          src={pic9}
          alt="pic9"
          className="ml-4 w-117 h-44 rounded-xl cursor-pointer shrink-0"
        />
        <img
          src={pic10}
          alt="pic10"
          className="ml-4 w-117 h-44 rounded-xl cursor-pointer shrink-0"
        />
      </div>
    </section>
  );
};

export default SectionOne;
