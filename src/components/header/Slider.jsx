import SliderContent from "./SliderContent";

const Slider = ({ arraySlider, currentIndex }) => {
  return (
    <div className="relative h-full w-full">
      <div
        className="slider flex flex-col justify-center pr-10 absolute inset-0 duration-700 mt-2 mx-10 mb-10
        border-2 rounded-3xl border-white/40 overflow-hidden bg-cover h-10/12"
        style={{ backgroundImage: `url(${arraySlider[currentIndex].backImg})` }}
      >
        <SliderContent items={arraySlider[currentIndex]} />
      </div>
    </div>
  );
};
export default Slider;
