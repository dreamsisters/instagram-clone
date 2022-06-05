import React, { FC, useCallback, useState } from 'react';
import { Modal, ModalInner } from './styles';
import { MdClear } from 'react-icons/md';
import styled from '@emotion/styled';

interface IProps {
  children?: React.ReactNode;
  isClose: boolean;
}

const PostModal: FC<IProps> = ({ isClose }) => {
  const [close, setClose] = useState(false);

  const toggleClose = () => {
    useCallback(
      (e: any) => {
        setClose(!close);

        console.log('target', e.target);
        console.log('state', close);
      },
      [close],
    );

    // if (close == true) {

    // } else {

    // }
  };

  return (
    <Modal onClick={toggleClose}>
      <ModalInner tabIndex={-1}>
        <MdClear onClick={toggleClose} className="clearBtn" />
      </ModalInner>
    </Modal>
  );
};

export default PostModal;
