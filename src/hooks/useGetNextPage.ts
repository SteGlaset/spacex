import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setPage } from '../redux/payload/payloadSlice';
import { missionsApi } from '../api/missionsApi';

const useGetNextPage = () => {
  const page = useSelector((state: RootState) => state.payload.options.page);
  const payload = useSelector((state: RootState) => state.payload);
  const dispatch = useDispatch();
  const { isFetching } =
    missionsApi.endpoints.getMissions.useQueryState(payload);

  return () => {
    if (!isFetching) {
      dispatch(setPage(page + 1));
      console.log(page);
    }
  };
};

export default useGetNextPage;
