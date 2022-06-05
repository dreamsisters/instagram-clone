import { Nav, MenuItem, UserProfile, UserProfileCard, MenuList } from './styles';
import React, { Dispatch, FC, SetStateAction, useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuModal from '@components/MenuModal';
import { Logo } from '@components/Logo';
import { MdSearch, MdNotificationsNone as NoticeIcon, MdOutlineApps, MdInsertPhoto } from 'react-icons/md';
import { FiSend } from 'react-icons/fi';

interface IProps {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  navState: string;
}

const DefaultNav = ({ isLoggedIn, setIsLoggedIn, navState }: IProps) => {
  //props 조건 별 nav 구분

  //프로필 Menu Modal
  const [showNotice, setNotice] = useState(false);
  const [showMoreIcon, setMoreIcon] = useState(false);
  const [showProfileMenu, setProfileMenu] = useState(false);

  //modal Inner style
  const noticeModal = useMemo(() => ({ top: -5, right: 150, width: '260px' }), []);
  const moreIconModal = useMemo(() => ({ top: -5, right: 100, width: '260px' }), []);
  const profileModal = useMemo(() => ({ top: -5, right: 5, width: '260px' }), []);

  //User Profile Modal
  const onCloseModal = useCallback(() => {}, []);

  //알림 목록
  const toggleNotice = useCallback(() => {
    setNotice(!showNotice);
    setMoreIcon(false);
    setProfileMenu(false);
    console.log(showNotice);
  }, [showNotice]);

  // const closeNotice = useCallback(() => {
  //   setShoUserProfileMenu(false);
  // }, []);

  //아이콘 메뉴
  const toggleMoreIcon = useCallback(() => {
    setNotice(false);
    setMoreIcon(!showMoreIcon);
    setProfileMenu(false);
    console.log(showMoreIcon);
  }, [showMoreIcon]);
  // const closeMoreIcon = useCallback(() => {
  //   setShoUserProfileMenu(false);
  // }, []);

  //프로필 메뉴
  const toggleProfile = useCallback(() => {
    setNotice(false);
    setMoreIcon(false);
    setProfileMenu(!showProfileMenu);
    console.log(showProfileMenu);
  }, [showProfileMenu]);
  // const closeProfile = useCallback(() => {
  //   setShoUserProfileMenu(false);
  // }, []);

  return (
    <Nav>
      <div className={'inner'}>
        <div className="col logo">
          <Logo />
        </div>
        <div className="col search-box">
          <input type={'text'}></input>
          <Link to="/search">
            <MdSearch className="navIcon" />
          </Link>
        </div>
        <ul className="col menu">
          {/* icon */}
          <div className="iconBox">
            <MenuItem>
              <NoticeIcon onClick={toggleNotice} className="mdIcon notice" />
              <MenuModal style={noticeModal} show={showNotice}>
                <MenuList>
                  <li>알림 목록 생성</li>
                </MenuList>
              </MenuModal>
            </MenuItem>
            <MenuItem>
              <Link to="/directs">
                <FiSend className="fiIcon directs" />
              </Link>
            </MenuItem>
            <MenuItem>
              <MdOutlineApps onClick={toggleMoreIcon} className="mdIcon moreIcon" />
              <MenuModal style={moreIconModal} show={showMoreIcon}>
                <MenuList>
                  <li>마켓</li>
                  <li>새 게시물 작성</li>
                  <li>라이브 방송</li>
                </MenuList>
              </MenuModal>
            </MenuItem>
            <UserProfile onClick={toggleProfile}>아무개</UserProfile>
          </div>
        </ul>
      </div>
      <MenuModal style={profileModal} show={showProfileMenu}>
        <UserProfileCard>
          <div className={'user-avartar'}></div>
          <div className={'user-desc'}>
            <span className={'user-nickname'}>아무개</span>
            <span className={'user-auth'}>amugae@gmail.com</span>
          </div>
        </UserProfileCard>
        <MenuList>
          <li>내 프로필</li>
          <li>보관함</li>
          <li>위시리스트</li>
          <li>계정 설정</li>
          <li className={'logout-button'}>로그아웃</li>
        </MenuList>
      </MenuModal>
    </Nav>
  );
};

export default DefaultNav;
