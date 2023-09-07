import React from 'react';
import cl from './Header.module.scss';
import Logo from '~/assets/icons/spacex-logo.svg';
import Container from '../Container/Container';

const Header = () => {
  return (
    <header className={cl.header}>
      <Container className={cl.headerContainer}>
        <Logo className={cl.logo} />
      </Container>
    </header>
  );
};

export default Header;
