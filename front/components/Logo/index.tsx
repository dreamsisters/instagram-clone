import React from 'react';
import { TxtLogo } from './styles';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/">
      <TxtLogo>instagram</TxtLogo>
    </Link>
  );
};

export const MarketLogo = () => {
  return (
    <Link to="/market">
      <TxtLogo>Market</TxtLogo>
    </Link>
  );
};
