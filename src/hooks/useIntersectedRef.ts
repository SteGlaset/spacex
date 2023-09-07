import { useEffect, useRef } from 'react';
import throttle from '../helpers/throttle';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { missionsApi } from '../api/missionsApi';

const useIntersectedRef = (callback: () => void) => {
  const payload = useSelector((state: RootState) => state.payload);
  const { data } = missionsApi.endpoints.getMissions.useQueryState(payload);
  const intersectedRef = useRef(null);

  const handleIntersection: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    const throttledCallback = throttle(callback, 1000);
    if (entry.isIntersecting) {
      throttledCallback();
    }
  };

  const options = {
    root: null,
    rootMargin: '40%',
    threshold: 0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);
    if (intersectedRef.current) {
      if (data?.nextPage) {
        observer.observe(intersectedRef.current);
      } else {
        observer.unobserve(intersectedRef.current);
      }
    }
    return () => {
      if (intersectedRef.current) observer.unobserve(intersectedRef.current);
    };
  }, [intersectedRef, options]);

  return intersectedRef;
};

export default useIntersectedRef;
