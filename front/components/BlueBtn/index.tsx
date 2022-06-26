import React, { FC } from 'react';
import { Button } from './styled';

interface IProps {
  type: any;
  text: string;
}

const BlueBtn: FC<IProps> = ({ type, text }) => {
  return <Button type={type}>{text}</Button>;
};

export default BlueBtn;
