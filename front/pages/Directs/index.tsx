import { IPath } from '@typings/db';
import React, { useEffect } from 'react';
// import { Base } from './styles';

const Directs = ({ setPath }: IPath) => {
  useEffect(() => {
    // console.log(location.pathname);
    setPath(location.pathname);
  });

  return <div>다이렉트 메세지</div>;
};

export default Directs;
