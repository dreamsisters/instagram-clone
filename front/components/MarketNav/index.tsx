import { Nav, MenuIcon, UserProfile, MenuList } from '../DefaultNav/styles';
import React, { Dispatch, FC, SetStateAction, useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import SmallModal from '@components/SmallModal';
import { MarketLogo } from '@components/Logo';
import ProfileMenuModal from '@components/ProfileMenuModal';
import {
  MdOutlineHome as HomeIcon,
  MdSearch,
  MdNotificationsNone as NoticeIcon,
  MdOutlineApps as MoreIcon,
  MdOutlineAddPhotoAlternate as AddPost,
  MdOutlineRecordVoiceOver as LiveChat,
} from 'react-icons/md';
import { FiSend } from 'react-icons/fi';

interface IProps {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  navState: string;
}

const MarketNav = ({ isLoggedIn, setIsLoggedIn, navState }: IProps) => {
  //props 조건 별 nav 구분

  //Navigation Icon Modal
  const [showNotice, setNotice] = useState(false);
  const [showMoreIcon, setMoreIcon] = useState(false);
  const [showProfileMenu, setProfileMenu] = useState(false);

  const noticeStyle = {
    top: 50,
    right: 150,
    width: '260px',
  };
  const moreIconStyle = {
    top: 50,
    right: 64,
    width: '230px',
  };
  const profileStyle = {
    top: 50,
    right: 5,
    width: '260px',
  };

  //알림 목록 show
  const onNotice = useCallback(() => {
    setNotice(!showNotice);
  }, [showNotice]);

  //아이콘 메뉴 show
  const onMoreIcon = useCallback(() => {
    setMoreIcon(!showMoreIcon);
  }, [showMoreIcon]);

  //프로필 메뉴 show
  const onProfile = useCallback(() => {
    setProfileMenu(!showProfileMenu);
  }, [showProfileMenu]);

  return (
    <Nav>
      <div className={'inner'}>
        <div className="col logo">
          <MarketLogo />
        </div>
        <div className="col search-box">
          <input type={'text'}></input>
          <Link to="/search">
            <MdSearch className="navIcon" />
          </Link>
        </div>
        <ul className="col menu">
          <div className="iconBox">
            <MenuIcon>
              <NoticeIcon onClick={onNotice} className="mdIcon notice" />
              <SmallModal setState={setNotice} show={showNotice} style={noticeStyle}>
                <MenuList>
                  <li>알림 목록 생성</li>
                </MenuList>
              </SmallModal>
            </MenuIcon>
            <MenuIcon>
              <Link to="/directs">
                <FiSend className="fiIcon directs" />
              </Link>
            </MenuIcon>
            <MenuIcon>
              <MoreIcon onClick={onMoreIcon} className="mdIcon moreIcon" />
              <SmallModal setState={setMoreIcon} show={showMoreIcon} style={moreIconStyle}>
                <MenuList>
                  <a href="/">
                    <li>
                      <HomeIcon className="mdICon" />홈
                    </li>
                  </a>
                  <li>
                    <AddPost className="mdICon" />새 게시물 작성
                  </li>
                  <li>
                    <LiveChat className="mdICon" />
                    라이브 방송
                  </li>
                </MenuList>
              </SmallModal>
            </MenuIcon>
            <UserProfile onClick={onProfile}>아무개</UserProfile>
            <SmallModal setState={setProfileMenu} show={showProfileMenu} style={profileStyle}>
              <ProfileMenuModal />
            </SmallModal>
          </div>
        </ul>
      </div>
    </Nav>
  );
};

export default MarketNav;
