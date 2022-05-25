import CloseMessageModal from '@components/CloseMessageModal';
import { FC, useCallback, useMemo, useRef, useState } from 'react';
import { ModalContent, Form, ContentsSection } from './styles';
import Modal from '@components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '@components/Navigation';
import { addPost, dummyPost } from '@reducers/post';

interface IProps {
  onCloseModal: () => void;
  show: boolean;
  subject: string;
  content: string;
  accept: string;
  refuse: string;
}

const PostFormModal: FC<IProps> = ({ onCloseModal, show, subject, content, accept, refuse }) => {
  const { mainPosts, imagePath } = useSelector((state: IState) => state.post);

  const style = useMemo(() => ({ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }), []);
  const [images, setImages] = useState(null);
  const [showUploadImageFormModal, setShowUploadImageFormModal] = useState(true);
  const [showFinalUploadImagesModal, setShowFinalUploadImagesModal] = useState(false);
  const [showUploadContentModal, setShowUploadContentModal] = useState(false);
  const dispatch = useDispatch();
  const [contentData, setContentData] = useState('');
  const imageInputRef = useRef<HTMLInputElement>(null);

  const onClickImageUploadButton = useCallback(() => {
    imageInputRef.current?.click();
  }, [imageInputRef.current]);

  const onChangeImageFile = useCallback((e: any) => {
    setShowUploadImageFormModal(false);
    setShowFinalUploadImagesModal(true);
  }, []);

  const onClickBackToSquareOne = useCallback(() => {
    setShowUploadImageFormModal(true);
    setShowFinalUploadImagesModal(false);
  }, []);

  const onClickGoToUploadContentModal = useCallback(() => {
    setShowFinalUploadImagesModal(false);
    setShowUploadContentModal(true);
  }, []);

  const onClickBackToFinalUploadImagesModal = useCallback(() => {
    setShowUploadContentModal(false);
    setShowFinalUploadImagesModal(true);
  }, []);

  const onSubmit = useCallback((e: any) => {
    e.preventDefault();
    dispatch(addPost(dummyPost));
  }, []);

  return (
    <>
      {showUploadImageFormModal && (
        <Modal style={style} show={show} onCloseModal={onCloseModal}>
          <ModalContent>
            <h1>
              <span>새 게시물 만들기</span>
              <span className={'dir-button right-button'} onClick={onCloseModal}>
                취소
              </span>
            </h1>
            <Form>
              <div className={'image-upload-form'}>
                <p>사진과 동영상을 여기에 끌어다 놓으세요</p>
                <input type={'file'} onChange={onChangeImageFile} hidden ref={imageInputRef} />
                <div className="upload-button" onClick={onClickImageUploadButton}>
                  컴퓨터에서 선택
                </div>
              </div>
            </Form>
          </ModalContent>
        </Modal>
      )}
      {showFinalUploadImagesModal && (
        <CloseMessageModal
          onCloseModal={onCloseModal}
          show={show}
          subject={subject}
          content={content}
          accept={accept}
          refuse={refuse}
        >
          {/*<CloseMessageModal onCloseModal={onClickPrevButton} show={true} subject={'테스트'}>*/}
          <ModalContent>
            <h1>
              <span className={'dir-button left-button'} onClick={onClickBackToSquareOne}>
                이전
              </span>
              <span>사진 업로드</span>
              <span className={'dir-button right-button'} onClick={onClickGoToUploadContentModal}>
                다음
              </span>
            </h1>
            <Form></Form>
          </ModalContent>
          {/*</CloseMessageModal>*/}
        </CloseMessageModal>
      )}
      {showUploadContentModal && (
        <CloseMessageModal
          onCloseModal={onCloseModal}
          show={show}
          subject={subject}
          content={content}
          accept={accept}
          refuse={refuse}
        >
          <ModalContent>
            <h1>
              <span className={'dir-button left-button'} onClick={onClickBackToFinalUploadImagesModal}>
                이전
              </span>
              <span>새 게시물 만들기</span>
            </h1>
            <Form onSubmit={onSubmit}>
              <button type={'submit'} className={'dir-button right-button'}>
                공유하기
              </button>
              <section className={'images-section'}>
                {/* 메인 이미지 */}
                <div>
                  {imagePath.map((v) => (
                    <img src={v} style={{ width: '730', height: '730px' }} alt={v} />
                  ))}
                </div>
                {/* 이미지 미리보기 */}
              </section>
              <ContentsSection className={'contents-section'}>
                {/* user-profile */}
                <div className={'user-profile'}>
                  <div className={'user-avartar'}></div>
                  <span>username</span>
                </div>
                {/* content */}
                <div className={'textarea'}>
                  <textarea placeholder={'문구 입력...'} />
                </div>
                {/* hashtag */}
                <div className={'hashtags'}>
                  <input type={'text'} placeholder={'태그 추가'} />
                </div>
                {/* location */}
                <div className={'location'}>
                  <input type={'text'} placeholder={'위치 추가'} />
                </div>
                {/* 고급 설정 - 이 게시물의 좋아요 수 및 조회수 숨기기, 댓글 해제 기능*/}
                <div className={'optional-settings'}>
                  <span>고급 설정</span>
                </div>
              </ContentsSection>
            </Form>
          </ModalContent>
        </CloseMessageModal>
      )}
    </>
  );
};

export default PostFormModal;
