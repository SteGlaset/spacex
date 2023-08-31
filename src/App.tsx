import React, { FC } from 'react';
import MissionList from './components/MissionList/MissionList';
import '~/styles/fonts.scss';
import '~/styles/normalize.scss';
import '~/styles/general.scss';
import Header from './components/UI/Header/Header';
import Container from './components/UI/Container/Container';
import MissionsHead from './components/MissionsHead/MissionsHead';

const App: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <MissionsHead />
        <MissionList />
      </Container>
    </>
  );
};

export default App;
