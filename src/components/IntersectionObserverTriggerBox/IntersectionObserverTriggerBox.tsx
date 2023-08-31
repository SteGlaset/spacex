import React, { useEffect, useRef } from 'react';

interface IntersectionObserverTriggerBoxProps {
  onIntersect: () => void;
}

const IntersectionObserverTriggerBox = ({
  onIntersect,
}: IntersectionObserverTriggerBoxProps) => {
  const boxRef = useRef(null);

  const handleIntersection: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      onIntersect();
    }
  };

  const options = {
    root: null,
    rootMargin: '40%',
    threshold: 0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);
    if (boxRef.current) observer.observe(boxRef.current);

    return () => {
      if (boxRef.current) observer.unobserve(boxRef.current);
    };
  }, [boxRef, options]);

  return <div ref={boxRef}></div>;
};

export default IntersectionObserverTriggerBox;
