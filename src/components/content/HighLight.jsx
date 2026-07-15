import { FaAngleLeft } from "react-icons/fa";
import {
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
} from "../../assets/highlight/index";
const HighLight = () => {
  const imgArray = [pic1, pic2, pic3, pic4, pic5, pic6];
  return (
    <section className="highlight mx-10">
      <div className="transition flex items-center  text-gray-200 w-30 mb-5 hover:text-blue-300  cursor-pointer">
        <h3 className="text-lg font-semibold">هایلایت</h3>
        <FaAngleLeft className="pr-5 text-xl font-semibold w-8" />
      </div>
      <div className="flex">
        {imgArray.map((img, index) => (
          <div className="rounded-full max-w-47 max-h-47 border-2 border-blue-500 ml-4 cursor-pointer overflow-hidden">
            <img
              key={index}
              src={img}
              alt={`pic${index}`}
              className="rounded-full scale-95"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
export default HighLight;
