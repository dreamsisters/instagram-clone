import { Nav, MenuItem, UserProfile, UserProfileCard, MenuList } from './styles';
import Link from 'next/link';
import { Dispatch, FC, SetStateAction, useCallback, useMemo, useState } from 'react';
import Menu from '@components/Menu';
import { useRouter } from 'next/router';
import { IUser } from '@reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, logoutAction } from '@reducers/user';
import PostFormModal from '@components/PostFormModal';
// import { IUserState } from '@reducers/user';

const dummy: IUser = {
  email: 'amugae@gmail.com',
  password: '111',
};

export interface IState {
  user: {
    isLoggedIn: boolean;
    me: IUser | null;
    signUpData: {};
    loginData: {};
  };
  post: {
    mainPosts: {
      id: number;
      User: { id: number; nickname: string };
      content: string;
      Images: { src: string }[];
      Comments: { User: { nickname: string }; content: string }[];
    }[];
    imagePath: [];
    postAdded: false;
  };
}

const Navigation = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: IState) => state?.user.isLoggedIn);
  const { me } = useSelector((state: IState) => state.user);

  const [showUserProfileMenu, setShoUserProfileMenu] = useState(false);
  const [showPostFormModal, setShowPostFormModal] = useState(false);
  const style = useMemo(() => ({ top: 48, right: 0, width: '260px' }), []);
  const router = useRouter();
  const onCloseModal = useCallback(() => {
    setShowPostFormModal(false);
  }, []);
  const onCloseMenu = useCallback(() => {
    setShoUserProfileMenu(false);
  }, []);

  const onClickUserProfile = useCallback(() => {
    setShoUserProfileMenu((prev) => !prev);
  }, []);

  const onLogout = useCallback(() => {
    // setLoggedInUser(false);
    onCloseMenu();
    dispatch(logoutAction());
    // router.push('/sign_in');
  }, []);

  const onClickPostFormModal = useCallback(() => {
    setShowPostFormModal((prev) => !prev);
  }, []);

  return (
    <Nav>
      <div className={'inner'}>
        <div className="col logo">
          <Link href={'/'}>
            <a>인스타그램</a>
          </Link>
        </div>
        <div className="col search-box">검색</div>
        <ul className="col menu">
          {/* 아아콘으로 변경*/}
          {isLoggedIn ? (
            <>
              <MenuItem onClick={onClickPostFormModal}>만들기</MenuItem>
              <MenuItem>앱</MenuItem>
              <MenuItem>디엠</MenuItem>
              <MenuItem>좋아요</MenuItem>
              <UserProfile onClick={onClickUserProfile}>{me?.email?.toUpperCase().slice(0, 1)}</UserProfile>
            </>
          ) : (
            <>
              <div className={'login-button'} onClick={() => router.push('/sign_in')}>
                로그인
              </div>
            </>
          )}
        </ul>
      </div>
      <PostFormModal
        onCloseModal={onCloseModal}
        show={showPostFormModal}
        subject={'게시물을 삭제하시겠어요?'}
        content={'지금 나가면 수정 내용이 저장되지 않습니다.'}
        accept={'삭제'}
        refuse={'취소'}
      />
      <Menu style={style} show={showUserProfileMenu} onCloseModal={onCloseMenu}>
        <UserProfileCard>
          <div className={'user-avartar'}></div>
          <div className={'user-desc'}>
            <span className={'user-nickname'}>{me?.nickname || me?.email}</span>
            <span className={'user-auth'}>{me?.email}</span>
          </div>
        </UserProfileCard>
        <MenuList>
          <li onClick={() => router.push(`/${dummy.nickname}`)}>프로필</li>
          <li>저장됨</li>
          <li>설정</li>
          <li>계정 전환</li>
          <li className={'logout-button'} onClick={onLogout}>
            로그아웃
          </li>
        </MenuList>
      </Menu>
    </Nav>
  );
};

export default Navigation;
