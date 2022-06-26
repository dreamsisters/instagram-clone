import React, { useState } from 'react';
import Example from './example';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';

const dummy = {
  name: '아무개',
  nickname: '아무개',
  email: 'amugae@gmail.com',
  gender: 'm',
  birth: '991010',
};

const Market = () => {
  const { data: userData, error, mutate } = useSWR('/api/users/me', fetcher);

  return (
    <DndProvider backend={HTML5Backend}>
      <Example />
    </DndProvider>
  );
};

export default Market;