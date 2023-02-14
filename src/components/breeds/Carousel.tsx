import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getImages } from '@services/index';
import { sliderImages } from '@common/content';
import Toaster from '../Toasts';

function Carousel({ currentBreed }: cat.CarouselProps) {
  const [images, setImages] = useState<cat.BreedImages>(sliderImages);
  const [currentImage, setCurrentImage] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isError, setIsError] = useState<boolean>(false);

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
      if (!paused) {
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
          className="max-w-lg h-72 flex overflow-hidden relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchMove={handleTouchMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <i
            className="absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer"
            onClick={prevSlide}
            aria-hidden="true"
          >
            &#8249;
          </i>
          <div className="rounded-lg">
            {images?.map((img, index) => (
              <Image
                className={index === currentImage ? 'block w-full h-auto object-cover' : 'hidden'}
                key={img?.id}
                src={img?.url}
                alt={img?.id}
                width={200}
                height={200}
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
          <i
            className="absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer"
            onClick={nextSlide}
            aria-hidden="true"
          >
            &#8250;
          </i>
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
