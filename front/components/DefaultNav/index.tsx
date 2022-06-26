import { Nav, NavIcon, UserIcon, MenuList } from './styles';
import React, { Dispatch, FC, SetStateAction, useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuModal from '@components/MenuModal';
import ProfileMenuModal from '@components/ProfileMenuModal';
import FullModal from '@components/FullModal';
import SmallModal from '@components/SmallModal';
import AddPost from '@components/AddPost';
import { Logo } from '@components/Logo';
import {
  MdSearch,
  MdNotificationsNone as NoticeIcon,
  MdOutlineApps as MoreIcon,
  MdOutlineAddPhotoAlternate as AddPostIcon,
  MdOutlineRecordVoiceOver as LiveChat,
  MdOutlineShoppingBag as Shop,
} from 'react-icons/md';
import { FiSend } from 'react-icons/fi';
import useSWR from 'swr';
import axios from 'axios';
import fetcher from '@utils/fetcher';

interface IProps {
  isLoggedIn: boolean;
  // setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  navState: string;
}

const DefaultNav = ({ isLoggedIn, navState }: IProps) => {
  const { data: userData, error, mutate } = useSWR('/api/users/me', fetcher);

  // console.log(userData);

  //Nav Icon Modal
  const [showNotice, setNotice] = useState(false);
  const [showMoreIcon, setMoreIcon] = useState(false);
  const [showProfileMenu, setProfileMenu] = useState(false);
  //Add Post Modal
  const [addPostModal, setAddPost] = useState(true);

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

  //게시물 작성 모달 show
  const addPost = useCallback(() => {
    setAddPost(!addPostModal);
    setMoreIcon(false);
  }, [addPostModal]);

  return (
    <Nav>
      <div className={'inner'}>
        <div className="col logo">
          <Logo path="default" />
        </div>
        <div className="col search-box">
          <input type={'text'}></input>
          <Link to="/search">
            <MdSearch className="navIcon" />
          </Link>
        </div>
        <ul className="col menu">
          <div className="iconBox">
            <NavIcon>
              <NoticeIcon onClick={onNotice} className="mdIcon notice" />
              <SmallModal setState={setNotice} show={showNotice} style={noticeStyle}>
                <MenuList>
                  <li>알림 목록 생성</li>
                </MenuList>
              </SmallModal>
            </NavIcon>
            <NavIcon>
              <Link to="/directs">
                <FiSend className="fiIcon directs" />
              </Link>
            </NavIcon>
            <NavIcon>
              <MoreIcon onClick={onMoreIcon} className="mdIcon moreIcon" />
              <SmallModal setState={setMoreIcon} show={showMoreIcon} style={moreIconStyle}>
                <MenuList>
                  <a href="/market">
                    <Shop className="mdICon" />
                    마켓
                  </a>
                  <button onClick={addPost}>
                    <AddPostIcon className="mdICon" />새 게시물 작성
                    <FullModal show={addPostModal} setState={setAddPost} setMoreIcon={setMoreIcon}>
                      <AddPost setState={setAddPost} />
                    </FullModal>
                  </button>
                  <button>
                    <LiveChat className="mdICon" />
                    라이브 방송
                  </button>
                </MenuList>
              </SmallModal>
            </NavIcon>
            <UserIcon onClick={onProfile}>아무개</UserIcon>
            <SmallModal setState={setProfileMenu} show={showProfileMenu} style={profileStyle}>
              <ProfileMenuModal />
            </SmallModal>
          </div>
        </ul>
      </div>
    </Nav>
  );
};

export default DefaultNav;
