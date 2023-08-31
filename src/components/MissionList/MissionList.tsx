import React from 'react';
import { useGetMissionsQuery } from '../../api/missionsApi';
import MissionItem from '../MissionItem/MissionItem';
import { MissionDoc } from '../../types/missions';
import Masonry from 'react-layout-masonry';
import cl from './MissionList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import IntersectionObserverTriggerBox from '../IntersectionObserverTriggerBox/IntersectionObserverTriggerBox';
import { setPage } from '../../redux/payload/payloadSlice';

const MissionList = () => {
  const page = useSelector((state: RootState) => state.payload.options.page);
  const dispatch = useDispatch();
  const payload = useSelector((state: RootState) => state.payload);
  const {
    data: missions,
    isLoading,
    isError,
    isFetching,
  } = useGetMissionsQuery(payload);

  if (isLoading) {
    return <div>Loading missions...</div>;
  }

  if (isError) {
    return <div>Error fetching missions.</div>;
  }

  const fetchNextPage = () => {
    if (!isFetching) {
      dispatch(setPage(page + 1));
    }
  };

  return (
    <Masonry
      className={cl.missionList}
      columns={{ 300: 1, 996: 2, 1400: 3 }}
      gap={20}
    >
      {missions &&
        missions.docs.map((doc: MissionDoc) => (
          <MissionItem key={doc.id} mission={doc} />
        ))}
      <IntersectionObserverTriggerBox onIntersect={fetchNextPage} />
    </Masonry>
  );
};

export default MissionList;
