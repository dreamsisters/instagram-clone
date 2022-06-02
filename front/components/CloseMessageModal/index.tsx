import { CloseMessage, CreateModal } from './styles';
import React, { FC, useCallback, useState, useMemo } from 'react';
import Modal from '@components/Modal';

interface IProps {
  children: React.ReactNode;
  // onCloseModal: () => void;
  show: boolean;
  // subject: string;
  yes?: string;
  no?: string;
}

const CloseAlertModal: FC<IProps> = ({ children, show, yes, no }) => {
  const [showAlertMessage, setShowAlertMessage] = useState(false);

  const onClickAlertMessage = useCallback(() => {
    setShowAlertMessage((prev) => !prev);
  }, []);

  const stopPropagation = useCallback((e: any) => {
    e.stopPropagation();
  }, []);

  const style = useMemo(
    () => ({
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }),
    [],
  );

  if (!show) return null;
  return (
    <CreateModal onClick={onClickAlertMessage}>
      <div className={'inner'} onClick={stopPropagation}>
        {children}
      </div>
      <Modal style={style} show={showAlertMessage}>
        <CloseMessage>
          <div className={'title'}></div>
          <button className={'delete'}>{yes}</button>
          <button className={'cancel'} onClick={onClickAlertMessage}>
            {no}
          </button>
        </CloseMessage>
      </Modal>
    </CreateModal>
  );
};

export default CloseAlertModal;
