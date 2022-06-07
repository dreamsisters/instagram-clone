import React from 'react';
import { Button } from './styled';
import { MdKeyboardArrowLeft as LeftBtn, MdKeyboardArrowRight as RightBtn } from 'react-icons/md';

export const LeftArrow = (props: any) => {
  return (
    <Button>
      <LeftBtn className="mdArrow" />
      {props.name}
    </Button>
  );
};

export const RightArrow = (props: any) => {
  return (
    <Button>
      {props.name}
      <RightBtn className="mdArrow" />
    </Button>
  );
};
