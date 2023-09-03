import React from 'react';
import SortButton from '../SortButton/SortButton';
import cl from './MissionsHead.module.scss';

const MissionsHead = () => {
  return (
    <div className={cl.head}>
      <div className={cl.rightBlock}>
        <SortButton />
      </div>
      <h2 className={cl.title}>Missions</h2>
    </div>
  );
};

export default MissionsHead;
