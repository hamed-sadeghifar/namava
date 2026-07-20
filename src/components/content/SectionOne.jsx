import { useLayoutEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
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
  pic13,
  pic14,
  pic15,
  pic16,
  pic17,
  pic18,
  pic19,
  pic20,
} from "../../assets/section 1/index";
const SectionOne = () => {
  const slideRef = useRef(null);

  const [page, setPage] = useState(0);
  const [flag, setFlag] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const bigImages = [
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
  ];
  const smallImages = [
    pic11,
    pic12,
    pic13,
    pic14,
    pic15,
    pic16,
    pic17,
    pic18,
    pic19,
    pic20,
  ];
  const images = window.innerWidth >= 768 ? bigImages : smallImages;
  const totalPages = Math.ceil(bigImages.length / visibleCards);

  useLayoutEffect(() => {
    const updateCardSize = () => {
      if (!slideRef.current) return;
      const firstCart = slideRef.current.children[0];
      if (!firstCart) return;
      if (window.innerWidth >= 1280) {
        setVisibleCards(3);
      } else {
        setVisibleCards(2);
      }
      setCardWidth(firstCart.getBoundingClientRect().width);
      console.log(firstCart.getBoundingClientRect().width);
    };
    updateCardSize();
    window.addEventListener("resize", updateCardSize);
    return () => {
      window.removeEventListener("resize", updateCardSize);
    };
  }, []);

  return (
    <section
      className="my-10 flex relative overflow-hidden"
      onMouseEnter={() => setFlag(true)}
      onMouseLeave={() => setFlag(false)}
    >
      <button
        className={`transition-opacity cursor-pointer absolute text-white left-0 bottom-0 opacity-0 z-10 h-full px-3`}
        style={flag && page < totalPages - 1 ? { opacity: 1 } : { opacity: 0 }}
        onClick={() =>
          setPage((prev) => (page < totalPages - 1 ? prev + 1 : prev))
        }
      >
        <FaAngleLeft className="text-2xl" />
      </button>
      <button
        className="transition-opacity cursor-pointer absolute text-white right-0 bottom-0 opacity-0 z-10 h-full px-3"
        style={flag && page !== 0 ? { opacity: 1 } : { opacity: 0 }}
        onClick={() => setPage((prev) => (page > 0 ? prev - 1 : prev))}
      >
        <FaAngleRight className="text-2xl" />
      </button>
      <div
        ref={slideRef}
        className="flex xl:mx-10 md:mx-8 mx-6"
        style={{
          transform: `translateX(${page * (cardWidth + 16) * visibleCards}px)`,
          transition: "transform 1s ease-in 0.1s",
        }}
      >
        {images.map((image, index) => (
          <div
            className="ml-4 xl:max-w-[calc((100%-2rem)/3)] max-w-[calc((100%-1rem)/2)]
            shrink-0 rounded-xl overflow-hidden cursor-pointer"
            key={index}
          >
            <img src={image} alt="pic1" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionOne;
