import React, { useState } from 'react';
import Example from './example';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const dummy = {
  name: '아무개',
  nickname: '아무개',
  email: 'amugae@gmail.com',
  gender: 'm',
  birth: '991010',
};

const Market = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Example />
    </DndProvider>
  );
};

export default Market;
