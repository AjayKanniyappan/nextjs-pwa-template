import { useEffect, useState } from 'react';

/**
 * "useDeviceSize returns true if the window width is less than or equal to the size parameter."
 *
 * The function uses the useState hook to store the window width. The useEffect hook is used to update
 * the window width when the window is resized
 * @param {number} size - number - The size of the device you want to check against.
 * @returns A boolean value.
 */
function useDeviceSize(size: number): boolean {
  const [width, setWidth] = useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return width <= size;
}

export default useDeviceSize;
