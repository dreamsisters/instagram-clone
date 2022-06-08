import React, { FC } from 'react';
import ReactDOM from 'react-dom';

interface IProps {
  children: React.ReactNode;
}

const SmallModalPortal: FC<IProps> = ({ children }) => {
  // ! -> 절대 비어있지 않음을 명시하는 ts 연산자
  const modalElement = document.getElementById('smallModal')!;
  return ReactDOM.createPortal(children, modalElement);
};

export default SmallModalPortal;
