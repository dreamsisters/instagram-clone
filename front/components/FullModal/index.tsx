import ModalPortal from '@components/ModalPortal';
import styled, { CreateStyled } from '@emotion/styled/types/base';
import React, { CSSProperties, FC, useCallback, useState } from 'react';
import { ModalOverlay, ModalWrapper, ModalInner } from './styled';

interface IProps {
  children: React.ReactNode;
  id?: string;
  show: boolean;
  style?: CSSProperties;
  display?: CreateStyled;
  onClick?: () => void;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const FullModal: FC<IProps> = ({ children, show, style, setState }) => {
  const openModal = useCallback(() => {
    setState(!show);
    console.log('click Overlay');
  }, [show]);

  return (
    <ModalPortal>
      <ModalOverlay show={show} onClick={openModal}>
        <ModalWrapper>
          <ModalInner style={style}>{children}</ModalInner>
        </ModalWrapper>
      </ModalOverlay>
    </ModalPortal>
  );
};

export default FullModal;
