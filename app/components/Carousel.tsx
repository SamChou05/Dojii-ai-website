import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

interface CarouselProps {
  autoSlide?: boolean;
  autoSlideInterval?: number;
  slides: string[];
  setActiveSlide: React.Dispatch<React.SetStateAction<number>>;
}

const Carousel: React.FC<CarouselProps> = ({
  autoSlide = true,
  autoSlideInterval = 10000,
  slides,
  setActiveSlide,
}) => {
  const [curr, setCurr] = useState(0);
  const [progress, setProgress] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    setActiveSlide(curr);
  }, [curr, setActiveSlide]);

  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(() => {
      setProgress((progress) => {
        const newProgress = progress + 1;
        if (newProgress === 100) {
          next();
          return 0;
        }
        return newProgress;
      });
    }, autoSlideInterval / 100);
    return () => clearInterval(interval);
  }, [autoSlide, autoSlideInterval, next]);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((img, index) => (
          <img key={index} src={img} alt={`slide-${index}`} />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>
      <div className="bottom-0 left-0 right-0 flex items-center relative">
        <div className="text-white bg-black px-2">
          {curr + 1} / {slides.length}
        </div>
        <div className=" h-0.5 flex-1 relative">
          <div
            className="top-0 left-0 bg-black h-0.5"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
