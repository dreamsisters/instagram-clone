import React, { CSSProperties, FC, useCallback } from 'react';
import { CreateModal } from './styles';

interface IProps {
  children: React.ReactNode;
  style: CSSProperties;
  show: boolean;
  onCloseModal?: () => void;
}

const Modal: FC<IProps> = ({ children, style, show, onCloseModal }) => {
  const stopPropagation = useCallback((e: any) => {
    e.stopPropagation();
  }, []);

  if (!show) return null;

  return (
    <CreateModal onClick={onCloseModal}>
      <div onClick={stopPropagation} style={style}>
        {children}
      </div>
    </CreateModal>
  );
};

export default Modal;
