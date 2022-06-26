import React, { useEffect, useState } from 'react';
import { TxtLogo } from './styles';
import { Link } from 'react-router-dom';
import { interpolateAs } from 'next/dist/shared/lib/router/router';

interface IProps {
  path: string;
}

export const Logo = ({ path }: IProps) => {
  const [url, setUrl] = useState('/');

  useEffect(() => {
    if (path == 'sign') {
      setUrl('#');
    }
  });

  return (
    <Link to={url} className="linkA">
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
