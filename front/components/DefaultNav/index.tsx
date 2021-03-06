import { Nav, NavIcon, UserIcon, MenuList } from './styles';
import React, { Dispatch, FC, SetStateAction, useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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
  MdOutlineHome as Home,
} from 'react-icons/md';
import { FiSend } from 'react-icons/fi';
import useSWR from 'swr';
import axios from 'axios';
import fetcher from '@utils/fetcher';

interface IProps {
  // match: any;
  path: string;
  isLogin: boolean;
  // setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  navState: string;
}

const DefaultNav = ({ path, isLogin, navState }: IProps) => {
  const { data: userData, error, mutate } = useSWR('/api/users/me', fetcher);

  //market nav status
  const [home, setHome] = useState({});
  const [market, setMarket] = useState({});

  const block = { display: 'block' };
  const none = { display: 'none' };

  useEffect(() => {
    console.log(path);
    if (path === '/market') {
      setHome(block);
      setMarket(none);
    } else {
      setHome(none);
      setMarket(block);
    }
  }, [path]);

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

  //?????? ?????? show
  const onNotice = useCallback(() => {
    setNotice(!showNotice);
  }, [showNotice]);

  //????????? ?????? show
  const onMoreIcon = useCallback(() => {
    setMoreIcon(!showMoreIcon);
  }, [showMoreIcon]);

  //????????? ?????? show
  const onProfile = useCallback(() => {
    setProfileMenu(!showProfileMenu);
  }, [showProfileMenu]);

  //????????? ?????? ?????? show
  const addPost = useCallback(() => {
    setAddPost(!addPostModal);
    setMoreIcon(false);
  }, [addPostModal]);

  return (
    <Nav>
      <div className={'inner'}>
        <div className="col logo">
          <Logo path={path} />
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
                  <li>?????? ?????? ??????</li>
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
                  <Link to="/" style={home}>
                    <Home className="mdICon" />???
                  </Link>
                  <Link to="/market" style={market}>
                    <Shop className="mdICon" />
                    ??????
                  </Link>
                  <button onClick={addPost}>
                    <AddPostIcon className="mdICon" />??? ????????? ??????
                    <FullModal show={addPostModal} setState={setAddPost} setMoreIcon={setMoreIcon}>
                      <AddPost setState={setAddPost} />
                    </FullModal>
                  </button>
                  <button>
                    <LiveChat className="mdICon" />
                    ????????? ??????
                  </button>
                </MenuList>
              </SmallModal>
            </NavIcon>
            <UserIcon onClick={onProfile}>?????????</UserIcon>
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
