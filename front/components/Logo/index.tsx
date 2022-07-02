import React, { useEffect, useState } from 'react';
import { TxtLogo } from './styles';
import { Link } from 'react-router-dom';

interface IProps {
  path: string;
}

export const Logo = ({ path }: IProps) => {
  useEffect(() => {
    console.log(path);
  }, [path]);
  const [logo, setLogo] = useState('instagram');
  const [url, setUrl] = useState('/');

  useEffect(() => {
    if (path == '/market') {
      setLogo('Market');
      setUrl('/market');
    } else {
      setLogo('instagram');
      setUrl('/');
    }
  });

  return (
    <Link to={url} className="linkA">
      <TxtLogo>{logo}</TxtLogo>
    </Link>
  );
};

// export const MarketLogo = () => {
//   return (
//     <Link to="/market">
//       <TxtLogo>Market</TxtLogo>
//     </Link>
//   );
// };
