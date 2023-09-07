import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { missionsApi } from '../api/missionsApi';
import { search, setPage } from '../redux/payload/payloadSlice';
import useDidMountEffect from './useDidMountEffect';
import debounce from '../helpers/debounce';

const useSearch = (): [
  string,
  (value: ((prevState: string) => string) | string) => void,
] => {
  const [searchString, setSearchString] = useState('');
  const dispatch = useDispatch();

  const debouncedSearchWithString = useCallback(
    debounce((string: string) => {
      dispatch(missionsApi.util.resetApiState());
      dispatch(search(string));
      dispatch(setPage(1));
    }, 700),
    []
  );

  useDidMountEffect(() => {
    debouncedSearchWithString(searchString);
  }, [searchString]);

  return [searchString, setSearchString];
};

export default useSearch;
