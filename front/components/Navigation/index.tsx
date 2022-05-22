import { Nav, MenuItem, UserProfile, UserProfileCard, MenuList } from './styles';
import React, { Dispatch, FC, SetStateAction, useCallback, useMemo, useState } from 'react';
import Menu from '@components/Menu';
import { Link } from 'react-router-dom';

interface IProps {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const Navigation = ({ isLoggedIn, setIsLoggedIn }: IProps) => {
  const [showUserProfileMenu, setShoUserProfileMenu] = useState(true);
  const style = useMemo(() => ({ top: 48, right: 0, width: '260px' }), []);

  const onCloseModal = useCallback(() => {}, []);
  const onCloseMenu = useCallback(() => {
    setShoUserProfileMenu(false);
  }, []);

  const onClickUserProfile = useCallback(() => {
    setShoUserProfileMenu((prev) => !prev);
  }, []);
  return (
    <Nav>
      <div className={'inner'}>
        <div className="col logo">
          <Link to="/">인스타그램</Link>
        </div>
        <div className="col search-box">검색</div>
        <ul className="col menu">
          {/* 아아콘으로 변경*/}
          <MenuItem>만들기</MenuItem>
          <MenuItem>앱</MenuItem>
          <MenuItem>디엠</MenuItem>
          <MenuItem>좋아요</MenuItem>
          <UserProfile onClick={onClickUserProfile}>아무개</UserProfile>
        </ul>
      </div>
      <Menu style={style} show={showUserProfileMenu} onCloseModal={onCloseMenu}>
        <UserProfileCard>
          <div className={'user-avartar'}></div>
          <div className={'user-desc'}>
            <span className={'user-nickname'}>아무개</span>
            <span className={'user-auth'}>amugae@gmail.com</span>
          </div>
        </UserProfileCard>
        <MenuList>
          <li>프로필</li>
          <li>저장됨</li>
          <li>설정</li>
          <li>계정 전환</li>
          <li className={'logout-button'}>로그아웃</li>
        </MenuList>
      </Menu>
    </Nav>
  );
};

export default Navigation;
