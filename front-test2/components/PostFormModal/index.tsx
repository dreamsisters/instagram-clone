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
              <span>??? ????????? ?????????</span>
              <span className={'dir-button right-button'} onClick={onCloseModal}>
                ??????
              </span>
            </h1>
            <Form>
              <div className={'image-upload-form'}>
                <p>????????? ???????????? ????????? ????????? ????????????</p>
                <input type={'file'} onChange={onChangeImageFile} hidden ref={imageInputRef} />
                <div className="upload-button" onClick={onClickImageUploadButton}>
                  ??????????????? ??????
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
          {/*<CloseMessageModal onCloseModal={onClickPrevButton} show={true} subject={'?????????'}>*/}
          <ModalContent>
            <h1>
              <span className={'dir-button left-button'} onClick={onClickBackToSquareOne}>
                ??????
              </span>
              <span>?????? ?????????</span>
              <span className={'dir-button right-button'} onClick={onClickGoToUploadContentModal}>
                ??????
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
                ??????
              </span>
              <span>??? ????????? ?????????</span>
            </h1>
            <Form onSubmit={onSubmit}>
              <button type={'submit'} className={'dir-button right-button'}>
                ????????????
              </button>
              <section className={'images-section'}>
                {/* ?????? ????????? */}
                <div>
                  {imagePath.map((v) => (
                    <img src={v} style={{ width: '730', height: '730px' }} alt={v} />
                  ))}
                </div>
                {/* ????????? ???????????? */}
              </section>
              <ContentsSection className={'contents-section'}>
                {/* user-profile */}
                <div className={'user-profile'}>
                  <div className={'user-avartar'}></div>
                  <span>username</span>
                </div>
                {/* content */}
                <div className={'textarea'}>
                  <textarea placeholder={'?????? ??????...'} />
                </div>
                {/* hashtag */}
                <div className={'hashtags'}>
                  <input type={'text'} placeholder={'?????? ??????'} />
                </div>
                {/* location */}
                <div className={'location'}>
                  <input type={'text'} placeholder={'?????? ??????'} />
                </div>
                {/* ?????? ?????? - ??? ???????????? ????????? ??? ??? ????????? ?????????, ?????? ?????? ??????*/}
                <div className={'optional-settings'}>
                  <span>?????? ??????</span>
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
