import React from 'react';
import { useGetMissionsQuery } from '../../api/missionsApi';
import MissionItem from '../MissionItem/MissionItem';
import { MissionDoc } from '../../types/missions';
import Masonry from 'react-layout-masonry';
import cl from './MissionList.module.scss';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import IntersectionObserverTriggerBox from '../IntersectionObserverTriggerBox/IntersectionObserverTriggerBox';
import useGetNextPage from '../../hooks/useGetNextPage';

const MissionList = () => {
  const payload = useSelector((state: RootState) => state.payload);
  const { data: missions, isLoading, isError } = useGetMissionsQuery(payload);
  const getNextPage = useGetNextPage();

  if (isLoading) {
    return <div>Loading missions...</div>;
  }

  if (isError) {
    return <div>Error fetching missions.</div>;
  }

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
      {missions?.docs.length && (
        <IntersectionObserverTriggerBox onIntersect={getNextPage} />
      )}
    </Masonry>
  );
};

export default MissionList;
