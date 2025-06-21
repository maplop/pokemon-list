import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroCarousel = () => {
  const imgList = Array.from({ length: 9 }, (_, i) => i + 1);

  // Tipamos correctamente los refs con HTMLElement | null
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const [, setInit] = useState(false);

  // Evitamos el problema con refs nulos en el primer render
  const [swiperReady, setSwiperReady] = useState(false);
  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <div className="flex flex-1 h-[calc(100vh-125px)] relative">
      <div className="absolute z-50 top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white text-center px-4 bg-black/40">
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
          Explora el mundo Pokémon
        </h1>
        <p className="mt-4 text-lg md:text-xl drop-shadow-md">
          Atrapa a tu favorito entre cientos de criaturas
        </p>
        <a href="/pokemons/1" className="mt-6">
          <button className="px-6 py-2 bg-yellow-400 hover:bg-yellow-300 text-black rounded-lg font-semibold shadow-md cursor-pointer">
            Empezar aventura
          </button>
        </a>
      </div>

      <button
        ref={prevRef}
        type="button"
        className="absolute top-[-50px] sm:top-0 start-[-10px] sm:start-0 z-50 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <IoIosArrowRoundBack />
        </span>
      </button>

      {swiperReady && (
        <Swiper
          cssMode={true}
          modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{ clickable: true }}
          mousewheel
          keyboard
          loop={true}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          onInit={() => setInit(true)}
          className="flex justify-center items-center rounded-xl overflow-hidden"
          style={
            {
              "--swiper-pagination-color": "#f8bf3a",
              "--swiper-pagination-bullet-inactive-color": "#999999",
            } as React.CSSProperties
          }
        >
          {imgList.map((img) => (
            <SwiperSlide key={img}>
              <img
                src={`/imgs/pokemons/${img}.jpg`}
                alt={`Pokemon ${img}`}
                className="w-full h-full object-cover object-center"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <button
        ref={nextRef}
        type="button"
        className="absolute top-[-50px] sm:top-0 end-[-10px] sm:end-0 z-50 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <IoIosArrowRoundForward />
        </span>
      </button>
    </div>
  );
};

export default HeroCarousel;
