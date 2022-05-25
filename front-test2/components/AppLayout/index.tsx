import React, { FC, useState } from 'react';
import Navigation from '@components/Navigation';
import { useSelector } from 'react-redux';
import { Main } from './styles';

interface IProps {
  children: React.ReactNode;
}

const AppLayout: FC<IProps> = ({ children }) => {
  return (
    <>
      <Navigation />
      <Main>{children}</Main>
      <footer></footer>
    </>
  );
};

export default AppLayout;
