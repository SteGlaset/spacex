import React, { useState } from 'react';
import { MissionDoc } from '../../types/missions';
import cl from './MissionItem.module.scss';
import clsx from 'clsx';

const MissionItem = ({ mission }: { mission: MissionDoc }) => {
  const { name, static_fire_date_utc, details, links, rocket } = mission;
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div
      className={clsx({
        [cl.missionCard]: true,
        ['hidden']: !isImageLoaded,
      })}
    >
      <div className={cl.imageBox}>
        <img
          className={cl.missionCardImg}
          src={links.flickr.original[0]}
          alt={rocket.name}
          onLoad={() => setIsImageLoaded(true)}
        />
      </div>
      <div className={cl.textBox}>
        <h3 className={cl.missionCardTitle}>{name}</h3>
        <p className={cl.missionCardLaunchDate}>
          Launch Date: {new Date(static_fire_date_utc).toLocaleDateString()}
        </p>
        <p className={cl.missionCardDetails}>{details}</p>
      </div>
    </div>
  );
};

export default MissionItem;
