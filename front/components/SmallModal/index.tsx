import SmallModalPortal from '@components/SmallModalPortal';
import styled, { CreateStyled } from '@emotion/styled/types/base';
import React, { CSSProperties, FC, useCallback, useState } from 'react';
import { ModalOverlay, ModalWrapper, ModalInner } from './styled';

interface IProps {
  children: React.ReactNode;
  id?: string;
  show: boolean;
  style: CSSProperties;
  display?: CreateStyled;
  onClick?: () => void;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const SmallModal: FC<IProps> = ({ children, show, style, setState }) => {
  const openModal = useCallback(() => {
    setState(!show);
  }, [show]);

  return (
    <SmallModalPortal>
      <ModalOverlay id="smallModal" show={show} onClick={openModal}>
        <ModalWrapper>
          <ModalInner style={style}>{children}</ModalInner>
        </ModalWrapper>
      </ModalOverlay>
    </SmallModalPortal>
  );
};

export default SmallModal;
