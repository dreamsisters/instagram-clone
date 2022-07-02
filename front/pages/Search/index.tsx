import { IPath } from '@typings/db';
import React, { useEffect } from 'react';
// import { Base } from './styles';

const Search = ({ setPath }: IPath) => {
  useEffect(() => {
    // console.log(location.pathname);
    setPath(location.pathname);
  });

  return <div>검색 결과</div>;
};

export default Search;
