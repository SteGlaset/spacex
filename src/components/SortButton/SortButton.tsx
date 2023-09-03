import React from 'react';
import Button from '../UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { missionsApi } from '../../api/missionsApi';
import { sort } from '../../redux/payload/payloadSlice';
import { RootState } from '../../redux/store';

const SortButton = () => {
  const dispatch = useDispatch();
  const sortState = useSelector(
    (state: RootState) => state.payload.options.sort
  );

  const handleSort = () => {
    dispatch(missionsApi.util.resetApiState());
    dispatch(
      sort({
        flight_number: sortState?.flight_number === 'desc' ? 'asc' : 'desc',
      })
    );
  };

  return <Button onClick={handleSort}>Sort by Year</Button>;
};

export default SortButton;
