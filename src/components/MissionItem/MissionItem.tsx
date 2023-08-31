import React from 'react';
import { MissionDoc } from '../../types/missions';
import cl from './MissionItem.module.scss';
import useImageLoading from '../../hooks/useImageLoading';

const MissionItem = ({ mission }: { mission: MissionDoc }) => {
  const { name, static_fire_date_utc, details, links, rocket } = mission;
  const isImageLoaded = useImageLoading(links.flickr.original[0]);

  return (
    <>
      {isImageLoaded ? (
        <div className={cl.missionCard}>
          <div className={cl.imageBox}>
            <img
              className={cl.missionCardImg}
              src={links.flickr.original[0]}
              alt={rocket.name}
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
      ) : null}
    </>
  );
};

export default MissionItem;
