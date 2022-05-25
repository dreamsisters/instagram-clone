import React, { FC } from 'react';
import { ModalContent, Button, FormContainer } from './styles';
import CloseMessageModal from '@components/CloseMessageModal';

interface IProps {
  onCloseModal: () => void;
  show: boolean;
  subject: string;
  content: string;
  accept: string;
  refuse: string;
}

const ProfileEditFormModal: FC<IProps> = ({ onCloseModal, show, subject, content, accept, refuse }) => {
  return (
    <CloseMessageModal
      onCloseModal={onCloseModal}
      show={show}
      subject={subject}
      content={content}
      accept={accept}
      refuse={refuse}
    >
      <ModalContent>
        <h1>프로필 편집하기</h1>
        <FormContainer>
          <div className={'user-profile-avartar'}>
            <div className={'img'}></div>
            <div className={'file-uploader'}>
              <label>
                프로필 사진 바꾸기
                <input type={'file'} />
              </label>
            </div>
          </div>
          <form className={'user-profile-desc'}>
            <label>
              <span>이름</span>
              <input type={'text'} />
            </label>
            <label>
              <span>사용자 이름</span>
              <input type={'text'} />
            </label>
            <label>
              <span>웹사이트</span>
              <input type={'text'} />
            </label>
            <label>
              <span>소개</span>
              <textarea />
            </label>
            <label>
              <span>이메일</span>
              <input type={'text'} />
            </label>
            <label>
              <span>전화번호</span>
              <input type={'text'} />
            </label>
            <label>
              <span>성별</span>
              <input type={'text'} />
            </label>
            <Button type={'submit'} disabled={true}>
              저장하기
            </Button>
          </form>
        </FormContainer>
      </ModalContent>
    </CloseMessageModal>
  );
};

export default ProfileEditFormModal;
