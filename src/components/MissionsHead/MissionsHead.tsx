import React from 'react';
import SortButton from '../SortButton/SortButton';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { sort } from '../../redux/payload/payloadSlice';
import cl from './MissionsHead.module.scss';
import { useGetMissionsQuery } from '../../api/missionsApi';

const MissionsHead = () => {
  const payload = useSelector((state: RootState) => state.payload);
  const { refetch } = useGetMissionsQuery(payload);
  const sortState = useSelector(
    (state: RootState) => state.payload.options.sort
  );
  const dispatch = useDispatch();
  const handleSort = async () => {
    dispatch(
      sort({
        flight_number: sortState?.flight_number === 'desc' ? 'asc' : 'desc',
      })
    );
    await refetch();
  };

  return (
    <div className={cl.head}>
      <div className={cl.rightBlock}>
        <SortButton onSort={handleSort} />
      </div>
      <h2 className={cl.title}>Missions</h2>
    </div>
  );
};

export default MissionsHead;
