import { CloseMessage, CreateModal } from './styles';
import React, { FC, CSSProperties, useCallback, useState, useMemo } from 'react';
import Modal from '@components/Modal';

interface IProps {
  children: React.ReactNode;
  onCloseModal: () => void;
  show: boolean;
  subject: string;
  content?: string;
  accept?: string | null | undefined;
  refuse?: string | null | undefined;
  style?: CSSProperties;
}

const CloseMessageModal: FC<IProps> = ({ children, onCloseModal, show, subject, content, accept, refuse }) => {
  const [showMessage, setShowMessage] = useState(false);

  const onClickMessage = useCallback(() => {
    setShowMessage((prev) => !prev);
  }, []);

  const onClickCloseAll = useCallback(() => {
    onCloseModal();
    setShowMessage(false);
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
    []
  );

  if (!show) return null;

  return (
    <CreateModal onClick={onClickMessage}>
      <div className={'inner'} onClick={stopPropagation}>
        {children}
      </div>
      <Modal style={style} show={showMessage}>
        <CloseMessage>
          <div className={'title'}>
            <h2 className={'subject'}>{subject}</h2>
            <p className={'content'}>{content}</p>
          </div>
          <button className={'delete'} onClick={onClickCloseAll}>
            {accept}
          </button>
          <button className={'cancel'} onClick={onClickMessage}>
            {refuse}
          </button>
        </CloseMessage>
      </Modal>
    </CreateModal>
  );
};

export default CloseMessageModal;
