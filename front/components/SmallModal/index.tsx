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

const SmallModal: FC<IProps> = ({ children, id, show, style, setState }) => {
  const openModal = useCallback(
    (e: any) => {
      if (e.target === e.currentTarget) {
        // console.log('true', e.currentTarget);
        setState(!show);
      } else {
        // console.log('false', e.target);
        e.preventDefault();
      }
    },
    [show],
  );

  return (
    <SmallModalPortal>
      <ModalOverlay id="smallModal" show={show} type={id!}>
        <ModalWrapper onClick={openModal}>
          <ModalInner style={style}>{children}</ModalInner>
        </ModalWrapper>
      </ModalOverlay>
    </SmallModalPortal>
  );
};

export default SmallModal;
