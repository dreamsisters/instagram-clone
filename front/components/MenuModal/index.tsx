import React, { CSSProperties, FC, useCallback } from 'react';
import { ModalWrapper, ModalInner, ModalOverlay } from './styles';
import { MdClear } from 'react-icons/md';

interface IProps {
  children: React.ReactNode;
  style: CSSProperties;
  show: boolean;
}

const MenuModal: FC<IProps> = ({ children, style, show }) => {
  if (!show) {
    return null;
  }

  return (
    <ModalOverlay show={show}>
      <ModalWrapper id="ModalWrapper">
        <ModalInner style={style}>{children}</ModalInner>
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default MenuModal;
