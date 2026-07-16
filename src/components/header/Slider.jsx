import SliderContent from "./SliderContent";

const Slider = ({ arraySlider, currentIndex }) => {
  return (
    <div className="relative w-full">
      <div
        className="slider flex flex-col justify-center pr-10 inset-0 duration-700 mx-8 xl:mx-10
        border-2 rounded-3xl border-white/40 overflow-hidden bg-cover xl:aspect-22/9 md:aspect-19.5/9 aspect-18/9"
        style={{ backgroundImage: `url(${arraySlider[currentIndex].backImg})` }}
      >
        <SliderContent items={arraySlider[currentIndex]} />
      </div>
    </div>
  );
};
export default Slider;
