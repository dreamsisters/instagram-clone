import React, { CSSProperties, FC, useCallback } from 'react';
import { CreateMenu } from './styles';

interface IProps {
  children: React.ReactNode;
  style?: CSSProperties;
  show: boolean;
  onCloseModal: () => void;
}

const Menu: FC<IProps> = ({ children, style, show, onCloseModal }) => {
  const stopPropagation = useCallback((e: any) => {
    e.stopPropagation();
  }, []);

  if (!show) return null;
  return (
    <CreateMenu onClick={onCloseModal}>
      <div onClick={stopPropagation}>
        <div style={style}>{children}</div>
      </div>
    </CreateMenu>
  );
};

export default Menu;
