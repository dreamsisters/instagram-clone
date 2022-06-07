import React, { FC } from 'react';
import ReactDOM from 'react-dom';

interface IProps {
  children: React.ReactNode;
}

const ModalPortal: FC<IProps> = ({ children }) => {
  // ! -> 절대 비어있지 않음을 명시하는 ts 연산자
  const modalElement = document.getElementById('modal')!;
  return ReactDOM.createPortal(children, modalElement);
};

export default ModalPortal;
