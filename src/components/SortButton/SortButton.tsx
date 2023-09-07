import React from 'react';
import Button from '../UI/Button/Button';
import useSort from '../../hooks/useSort';

const SortButton = () => {
  const toggleSort = useSort();

  return <Button onClick={toggleSort}>Sort by Year</Button>;
};

export default SortButton;
