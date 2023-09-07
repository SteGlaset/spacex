import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { missionsApi } from '../api/missionsApi';
import { setPage, sort } from '../redux/payload/payloadSlice';

const useSort = () => {
  const dispatch = useDispatch();
  const sortState = useSelector(
    (state: RootState) => state.payload.options.sort
  );

  return () => {
    dispatch(missionsApi.util.resetApiState());
    dispatch(
      sort({
        flight_number: sortState?.flight_number === 'desc' ? 'asc' : 'desc',
      })
    );
    dispatch(setPage(1));
  };
};

export default useSort;
