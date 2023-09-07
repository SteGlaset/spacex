import React from 'react';
import useIntersectedRef from '../../hooks/useIntersectedRef';

interface IntersectionObserverTriggerBoxProps {
  onIntersect: () => void;
}

const IntersectionObserverTriggerBox = ({
  onIntersect,
}: IntersectionObserverTriggerBoxProps) => {
  const boxRef = useIntersectedRef(onIntersect);

  return <div ref={boxRef}></div>;
};

export default IntersectionObserverTriggerBox;
