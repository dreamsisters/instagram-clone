import FullModalPortal from '@components/FullModalPortal';
import styled, { CreateStyled } from '@emotion/styled/types/base';
import React, { CSSProperties, FC, useCallback, useState } from 'react';
import { ModalOverlay, ModalWrapper, ModalInner } from './styled';

interface IProps {
  children: React.ReactNode;
  show: boolean;
  style?: CSSProperties;
  onClick?: () => void;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  moreIcon?: boolean;
  setMoreIcon: React.Dispatch<React.SetStateAction<boolean>>;
}

const FullModal: FC<IProps> = ({ children, show, style, setState, moreIcon, setMoreIcon }) => {
  const openModal = useCallback(
    (e: any) => {
      e.stopPropagation();

      if (e.target == e.currentTarget) {
        setState(!show);
        setMoreIcon(false);
      } else {
        return null;
      }
    },
    [show],
  );

  return (
    <FullModalPortal>
      <ModalOverlay id="fullModal" show={show}>
        <ModalWrapper onClick={openModal}>
          <ModalInner style={style}>{children}</ModalInner>
        </ModalWrapper>
      </ModalOverlay>
    </FullModalPortal>
  );
};

export default FullModal;
