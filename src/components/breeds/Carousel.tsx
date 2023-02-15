import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getImages } from '@services/index';
import { sliderImages } from '@common/content';
import style from '@styles/Carousel.module.css';
import useDeviceSize from '@/hooks/useDeviceSize';
import Toaster from '../Toasts';

function Carousel({ currentBreed }: cat.CarouselProps) {
  const [images, setImages] = useState<cat.BreedImages>(sliderImages);
  const [currentImage, setCurrentImage] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isError, setIsError] = useState<boolean>(false);
  const deviceSize = useDeviceSize(640);

  const carouselInfiniteScroll = () => {
    if (currentImage === images.length - 1) {
      return setCurrentImage(0);
    }
    return setCurrentImage(currentImage + 1);
  };

  const setCurrentSlide = (index: number) => {
    setCurrentImage(index);
  };

  const nextSlide = () => {
    const newSlide = currentImage === images.length - 1 ? 0 : currentImage + 1;
    setCurrentImage(newSlide);
  };

  const prevSlide = () => {
    const newSlide = currentImage === 0 ? images.length - 1 : currentImage - 1;
    setCurrentImage(newSlide);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused && !deviceSize) {
        carouselInfiniteScroll();
      }
    }, 5000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  useEffect(() => {
    (async () => {
      try {
        const imageUrl = await getImages(`?breed_ids=${currentBreed}&limit=8`);
        setImages(imageUrl);
        setIsError(false);
      } catch (error) {
        setImages(sliderImages);
        setIsError(true);
      }
    })();
  }, [currentBreed]);

  function handleTouchStart(event: React.TouchEvent) {
    setTouchStart(event.targetTouches[0].clientX);
  }

  function handleTouchMove(event: React.TouchEvent) {
    setTouchEnd(event.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
    if (touchStart - touchEnd > 150) {
      nextSlide();
    }
    if (touchStart - touchEnd < -150) {
      prevSlide();
    }
  }

  return (
    <>
      <div className="my-4">
        <div
          className="h-72 flex overflow-hidden relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchMove={handleTouchMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative w-full h-auto">
            {images?.map((img, index) => (
              <Image
                className={`rounded-lg ${index === currentImage ? 'block object-cover' : 'hidden'}`}
                key={img?.id}
                src={img?.url}
                alt={img?.id}
                priority={index === currentImage}
                fill
                unoptimized
              />
            ))}
          </div>
          <div className="absolute w-full flex justify-center bottom-0">
            {images.map((img, index) => {
              return (
                <div
                  key={img.id}
                  className={
                    index === currentImage
                      ? 'h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer'
                      : 'h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer'
                  }
                  onClick={() => {
                    setCurrentSlide(index);
                  }}
                  aria-hidden="true"
                />
              );
            })}
          </div>
          <button
            type="button"
            className="absolute left-0 text-1xl inset-y-1/3 text-white cursor-pointer ml-1"
            onClick={prevSlide}
            aria-hidden="true"
          >
            <span className={style.arrow}>&#10094;</span>
          </button>
          <button
            type="button"
            className="absolute right-0 text-1xl inset-y-1/3 text-white cursor-pointer mr-1"
            onClick={nextSlide}
            aria-hidden="true"
          >
            <span className={style.arrow}>&#10095;</span>
          </button>
        </div>
      </div>
      <Toaster
        toast={isError}
        setToast={setIsError}
        message="Error to fetch Slider"
        type="danger-toast"
      />
    </>
  );
}

export default Carousel;
