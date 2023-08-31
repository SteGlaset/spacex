import React from 'react';
import Button from '../UI/Button/Button';
import { useDispatch } from 'react-redux';
import { missionsApi } from '../../api/missionsApi';

interface SortButtonProps {
  onSort: () => void;
}

const SortButton: React.FC<SortButtonProps> = ({ onSort }) => {
  const dispatch = useDispatch();
  const handleSort = () => {
    dispatch(missionsApi.util.resetApiState());
    onSort();
  };

  return <Button onClick={handleSort}>Sort by Year</Button>;
};

export default SortButton;
