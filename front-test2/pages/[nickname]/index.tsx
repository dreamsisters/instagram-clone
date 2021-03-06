import { NextPage } from 'next';
import {
  Base,
  ProfileSummary,
  Subjects,
  Subject,
  SettingsModalContent,
  FollowListModalContent,
  Section,
} from './styles';
import { useCallback, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import Menu from '@components/Menu';
import Modal from '@components/Modal';
import ProfileEditFormModal from '@components/ProfileEditFormModal';
import CloseMessageModal from '@components/CloseMessageModal';
import PostCard from '@components/PostCard';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '@components/Navigation';

const Profile: NextPage = () => {
  const Router = useRouter();
  const dispatch = useDispatch();
  const { me } = useSelector((state: IState) => state.user);
  const [showProfileEditForm, setShowProfileEditForm] = useState(false);
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [showFollowerListModal, setShowFollowerListModal] = useState(false);
  const [showFollowingListModal, setShowFollowingListModal] = useState(false);
  const onCloseModal = useCallback(() => {
    setShowSettingsMenu(false);
    setShowProfileEditForm(false);
    setShowFollowerListModal(false);
    setShowFollowingListModal(false);
  }, []);

  const onClickProfileEditForm = useCallback(() => {
    setShowProfileEditForm((prev) => !prev);
  }, []);

  const onClickSettings = useCallback(() => {
    setShowSettingsMenu((prev) => !prev);
  }, []);
  const onClickFollowerList = useCallback(() => {
    setShowFollowerListModal((prev) => !prev);
  }, []);
  const onClickFollowingList = useCallback(() => {
    setShowFollowingListModal((prev) => !prev);
  }, []);

  const style = useMemo(() => ({ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }), []);
  return (
    <>
      <Base>
        <ProfileSummary>
          <div className={'user-profile-avartar'}>
            <div>{me?.nickname || me?.email}</div>
          </div>
          <div className={'user-profile-desc'}>
            <div className={'header'}>
              <h3>{me?.nickname || me?.email}</h3>
              {/* ????????? */}
              <div className={'profile-util-button edit-button'} onClick={onClickProfileEditForm}>
                ????????? ??????
              </div>
              <div className={'settings-button'} onClick={onClickSettings}>
                ??????
              </div>
              {/* ????????? ?????? ?????? ?????? */}
              {/*<div className={'profile-util-button edit-button'} onClick={onClickProfileEditForm}>*/}
              {/*  ?????????*/}
              {/*</div>*/}
              {/*<div className={'settings-button'} onClick={onClickProfileEditForm}>*/}
              {/*  ??????*/}
              {/*</div>*/}
              {/* ????????? ??? ?????? */}
              {/*<div className={'profile-util-button edit-button'} onClick={onClickProfileEditForm}>*/}
              {/*  ?????????*/}
              {/*</div>*/}
              {/*<div className={'profile-util-button edit-button'} onClick={onClickProfileEditForm}>*/}
              {/*  ????????? ??????*/}
              {/*</div>*/}
              {/*<div className={'settings-button'} onClick={onClickProfileEditForm}>*/}
              {/*  ??????*/}
              {/*</div>*/}
            </div>
            <ul className={'statics'}>
              <li>
                <span>?????????</span>
                <span className={'counts'}>0</span>
              </li>
              <li className={'show-follow-modal'} onClick={onClickFollowingList}>
                <span>?????????</span>
                <span className={'counts'}>0</span>
              </li>
              <li className={'show-follow-modal'} onClick={onClickFollowerList}>
                <span>?????????</span>
                <span className={'counts'}>0</span>
              </li>
            </ul>
            <p className={'user-profile-name'}>{me?.nickname || me?.nickname}</p>
          </div>
        </ProfileSummary>
        <Subjects>
          <Subject onClick={() => Router.push(`${me?.nickname || me?.email}`)} active={Router.route === `/[nickname]`}>
            ?????????
          </Subject>
          <Subject
            onClick={() => Router.push(`${me?.nickname || me?.email}/saved`)}
            active={Router.route === `/[nickname]/saved`}
          >
            ?????????
          </Subject>
          <Subject
            onClick={() => Router.push(`${me?.nickname || me?.email}/tagged`)}
            active={Router.route === `/[nickname]/tagged`}
          >
            ?????????
          </Subject>
          <Subject
            onClick={() => Router.push(`${me?.nickname || me?.email}/market`)}
            active={Router.route === `/[nickname]/market`}
          >
            ?????? ???????????????
          </Subject>
        </Subjects>
        {/* ????????? ?????? */}
        <Section>
          <ul></ul>
        </Section>
        {/* ????????? ?????? */}
        {/* ????????? ?????? */}
        {/* ??????????????? ?????? */}

        {/* ????????? ?????? ?????? */}
        <ProfileEditFormModal
          show={showProfileEditForm}
          onCloseModal={onCloseModal}
          subject={'????????? ????????? ??????????????????????'}
          content={'?????? ????????? ?????? ????????? ???????????? ????????????.'}
          accept={'??????'}
          refuse={'??????'}
        />

        {/* ????????? ?????? ??????*/}
        <Modal style={style} show={showSettingsMenu} onCloseModal={onCloseModal}>
          <SettingsModalContent>
            <li>???????????? ??????</li>
            <li>QR ??????</li>
            <li>??? ??? ????????????</li>
            <li>??????</li>
            <li>???????????? ??? ??????</li>
            <li>????????? ??????</li>
            <li>Instagram?????? ?????? ?????????</li>
            <li>?????? ??????</li>
            <li>????????????</li>
          </SettingsModalContent>
        </Modal>
        {/* ????????? ?????? */}
        <Modal style={style} show={showFollowingListModal} onCloseModal={onCloseModal}>
          <FollowListModalContent>
            <h3>?????????</h3>
          </FollowListModalContent>
        </Modal>
        {/* ????????? ?????? */}
        <Modal style={style} show={showFollowerListModal} onCloseModal={onCloseModal}>
          <FollowListModalContent>
            <h3>?????????</h3>
          </FollowListModalContent>
        </Modal>
      </Base>
    </>
  );
};

export default Profile;
