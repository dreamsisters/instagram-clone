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
              {/* 사용자 */}
              <div className={'profile-util-button edit-button'} onClick={onClickProfileEditForm}>
                프로필 편집
              </div>
              <div className={'settings-button'} onClick={onClickSettings}>
                설정
              </div>
              {/* 팔로우 하지 않을 경우 */}
              {/*<div className={'profile-util-button edit-button'} onClick={onClickProfileEditForm}>*/}
              {/*  팔로우*/}
              {/*</div>*/}
              {/*<div className={'settings-button'} onClick={onClickProfileEditForm}>*/}
              {/*  기타*/}
              {/*</div>*/}
              {/* 팔로우 할 경우 */}
              {/*<div className={'profile-util-button edit-button'} onClick={onClickProfileEditForm}>*/}
              {/*  메시지*/}
              {/*</div>*/}
              {/*<div className={'profile-util-button edit-button'} onClick={onClickProfileEditForm}>*/}
              {/*  팔로우 취소*/}
              {/*</div>*/}
              {/*<div className={'settings-button'} onClick={onClickProfileEditForm}>*/}
              {/*  기타*/}
              {/*</div>*/}
            </div>
            <ul className={'statics'}>
              <li>
                <span>게시물</span>
                <span className={'counts'}>0</span>
              </li>
              <li className={'show-follow-modal'} onClick={onClickFollowingList}>
                <span>팔로우</span>
                <span className={'counts'}>0</span>
              </li>
              <li className={'show-follow-modal'} onClick={onClickFollowerList}>
                <span>팔로워</span>
                <span className={'counts'}>0</span>
              </li>
            </ul>
            <p className={'user-profile-name'}>{me?.nickname || me?.nickname}</p>
          </div>
        </ProfileSummary>
        <Subjects>
          <Subject onClick={() => Router.push(`${me?.nickname || me?.email}`)} active={Router.route === `/[nickname]`}>
            게시물
          </Subject>
          <Subject
            onClick={() => Router.push(`${me?.nickname || me?.email}/saved`)}
            active={Router.route === `/[nickname]/saved`}
          >
            저장됨
          </Subject>
          <Subject
            onClick={() => Router.push(`${me?.nickname || me?.email}/tagged`)}
            active={Router.route === `/[nickname]/tagged`}
          >
            태그됨
          </Subject>
          <Subject
            onClick={() => Router.push(`${me?.nickname || me?.email}/market`)}
            active={Router.route === `/[nickname]/market`}
          >
            마켓 위시리스트
          </Subject>
        </Subjects>
        {/* 게시물 섹션 */}
        <Section>
          <ul></ul>
        </Section>
        {/* 저장됨 섹션 */}
        {/* 태그됨 섹션 */}
        {/* 위시리스트 섹션 */}

        {/* 프로필 편집 모달 */}
        <ProfileEditFormModal
          show={showProfileEditForm}
          onCloseModal={onCloseModal}
          subject={'프로필 편집을 중단하시겠어요?'}
          content={'지금 나가면 수정 내용이 저장되지 않습니다.'}
          accept={'중단'}
          refuse={'취소'}
        />

        {/* 프로필 설정 모달*/}
        <Modal style={style} show={showSettingsMenu} onCloseModal={onCloseModal}>
          <SettingsModalContent>
            <li>비밀번호 변경</li>
            <li>QR 코드</li>
            <li>앱 및 웹사이트</li>
            <li>알림</li>
            <li>개인정보 및 보완</li>
            <li>로그인 활동</li>
            <li>Instagram에서 보낸 이메일</li>
            <li>문제 신고</li>
            <li>로그아웃</li>
          </SettingsModalContent>
        </Modal>
        {/* 팔로우 모달 */}
        <Modal style={style} show={showFollowingListModal} onCloseModal={onCloseModal}>
          <FollowListModalContent>
            <h3>팔로우</h3>
          </FollowListModalContent>
        </Modal>
        {/* 팔로워 모달 */}
        <Modal style={style} show={showFollowerListModal} onCloseModal={onCloseModal}>
          <FollowListModalContent>
            <h3>팔로워</h3>
          </FollowListModalContent>
        </Modal>
      </Base>
    </>
  );
};

export default Profile;
