import React, { FC, ReactEventHandler } from 'react';
import { Lable } from './styles';

interface IProps {
  children?: React.ReactNode;
  isValue: boolean;
  text: string;
}

const InputLable: FC<IProps> = ({ children, isValue, text }) => {
  return <Lable isValue={isValue}>{text}</Lable>;
};

export default InputLable;
