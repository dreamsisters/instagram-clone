import React, { useEffect } from 'react';
import Example from './example';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import { IPath } from '@typings/db';

const Market = ({ setPath }: IPath) => {
  // const { data: userData, error, mutate } = useSWR('/api/user/me', fetcher);
  useEffect(() => {
    // console.log(location.pathname);
    setPath(location.pathname);
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <Example />
    </DndProvider>
  );
};

export default Market;
