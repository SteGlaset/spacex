import React from 'react';
import SortButton from '../SortButton/SortButton';
import cl from './MissionsHead.module.scss';
import Search from '../Search/Search';

const MissionsHead = () => {
  return (
    <div className={cl.head}>
      <div className={cl.rightBlock}>
        <SortButton />
        <Search />
      </div>
      <h2 className={cl.title}>Missions</h2>
    </div>
  );
};

export default MissionsHead;
