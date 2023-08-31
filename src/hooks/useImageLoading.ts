import { useState } from 'react';

const useImageLoading = (src: string): boolean => {
  const [isLoaded, setIsLoaded] = useState(false);
  const image = new Image();

  image.onload = () => setIsLoaded(true);

  image.src = src;

  return isLoaded;
};

export default useImageLoading;
