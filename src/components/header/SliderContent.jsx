import { FaHeart, FaPlay } from "react-icons/fa";
const SliderContent = ({ items }) => {
  return (
    <>
      <img src={items.img} alt="solo" className="w-1/5 cursor-pointer" />
      <h1 className=" sm:text-xl text-base text-gray-200 md:pt-6 pt-2 md:pb-4 pb-2 cursor-pointer md:w-1/5 w-full">
        {items.title}
      </h1>
      {items.description && (
        <p className="description sm:text-lg text-sm md:pb-4 pb-1.5 text-gray-300">
          {items.description}
        </p>
      )}
      <div className="xl:flex items-center text-gray-300 text-base hidden">
        {items.age && (
          <p className="px-3 shadow-2xs shadow-amber-500 py-1 bg-amber-700 rounded-xl text-black font-black ml-6">
            {items.age}
          </p>
        )}
        {items.season && <p className="ml-6">{items.season}</p>}
        {items.year && <p className="ml-6">{items.year}</p>}
        {items.minutes && <p className="ml-6">{items.minutes}</p>}
        {items.imdb && (
          <p className="ml-6">
            {items.imdb}
            <span className="font-black ml-2">IMDb</span>
          </p>
        )}
        {items.like && (
          <p className="ml-6 flex items-center">
            <FaHeart className="ml-1" /> {items.like}
          </p>
        )}
        {items.double && (
          <p className="ml-6 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="#ffffff"
            >
              <path d="M16.097 6.244a.53.53 0 0 0-.372.153.52.52 0 0 0-.153.372v5.285a3.48 3.48 0 0 1-1.9 3.106l-.088.045a7.87 7.87 0 0 1-7.171 0l-.087-.045a3.48 3.48 0 0 1-1.9-3.107V6.768c0-.14-.055-.273-.154-.37a.53.53 0 0 0-.37-.154.52.52 0 0 0-.525.525v5.285a4.52 4.52 0 0 0 2.47 4.04l.085.043a8.89 8.89 0 0 0 3.54.964v1.212H7.848c-.14 0-.273.055-.37.154a.53.53 0 0 0-.154.37.52.52 0 0 0 .525.525h4.294a.52.52 0 0 0 .525-.525c0-.14-.055-.273-.154-.37a.53.53 0 0 0-.37-.154H10.52V17.1a8.9 8.9 0 0 0 3.54-.964l.087-.044c1.517-.775 2.47-2.336 2.467-4.04V6.768c-.001-.286-.23-.52-.516-.524zM7.244 13.9l.06.03a5.9 5.9 0 0 0 5.392 0l.06-.03a2.83 2.83 0 0 0 1.538-2.518v-7.45a2.83 2.83 0 0 0-1.538-2.518l-.06-.03a5.9 5.9 0 0 0-5.392 0l-.06.03a2.83 2.83 0 0 0-1.538 2.518v7.45a2.83 2.83 0 0 0 1.538 2.518z"></path>
            </svg>
            دوبله نماوا
          </p>
        )}
        {items.subtitle && (
          <p className="ml-6 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="ml-1"
              fill="#ffffff"
            >
              <path d="M14.216 3H6.26a3.26 3.26 0 0 0-3.26 3.26v7.957a3.26 3.26 0 0 0 3.26 3.26h7.955a3.26 3.26 0 0 0 3.26-3.26V6.262A3.26 3.26 0 0 0 14.216 3zM6.2 14.428a.9.9 0 0 1 0-1.8.9.9 0 0 1 .636 1.537.9.9 0 0 1-.637.263zm8.077 0h-5.31a.9.9 0 1 1 0-1.8h5.3a.9.9 0 1 1 0 1.8zm0-3.356H6.2a.9.9 0 0 1 0-1.8h8.076a.9.9 0 0 1 0 1.8zm0-3.222H6.2a.9.9 0 1 1 0-1.8h8.076a.9.9 0 1 1 0 1.8z"></path>
            </svg>
            زیرنویس
          </p>
        )}
      </div>
      <div className="flex">
        {items.play && (
          <button className="transition ml-4 flex items-center bg-gray-200 w-32 justify-center rounded-xl py-2 mt-2 cursor-pointer hover:bg-blue-500 hover:text-gray-200">
            <FaPlay className="ml-2" />
            ورور و پخش
          </button>
        )}
        {items.preview && (
          <button className="transition ml-4 bg-neutral-600 justify-center rounded-xl py-2 px-4 mt-2 text-lg text-white font-medium cursor-pointer hover:bg-blue-500">
            پیش نمایش
          </button>
        )}
      </div>
    </>
  );
};
export default SliderContent;
