import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getImages } from '@services/index';
import { sliderImages } from '@common/content';
import styles from '@styles/Carousel.module.css';
import useDeviceSize from '@hooks/useDeviceSize';
import Toaster from '../Toasts';

/**
 * It's a React component that renders a carousel of images
 * @param event - The event object
 */
function Carousel({ currentBreed }: cat.CarouselProps): JSX.Element {
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
      <div
        className={styles.container}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.carousel}>
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
        <div className={styles.dotted}>
          {images.map((img, index) => {
            return (
              <div
                key={img.id}
                className={index === currentImage ? styles.primary : styles.secondary}
                onClick={() => {
                  setCurrentSlide(index);
                }}
                aria-hidden="true"
              />
            );
          })}
        </div>
        <button type="button" className={styles.back} onClick={prevSlide}>
          <span className={styles.arrow}>&#10094;</span>
        </button>
        <button type="button" className={styles.next} onClick={nextSlide}>
          <span className={styles.arrow}>&#10095;</span>
        </button>
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
