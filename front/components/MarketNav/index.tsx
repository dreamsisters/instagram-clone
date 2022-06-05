import { Nav, MenuItem, UserProfile, UserProfileCard, MenuList } from '../DefaultNav/styles';
import React, { Dispatch, FC, SetStateAction, useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '@components/MenuModal';
import { MarketLogo } from '@components/Logo';
import { MdSearch, MdNotificationsNone, MdOutlineApps, MdInsertPhoto } from 'react-icons/md';
import { FiSend } from 'react-icons/fi';

interface IProps {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  navState: string;
}

const MarketNav = ({ isLoggedIn, setIsLoggedIn, navState }: IProps) => {
  //props 조건 별 nav 구분

  //프로필 Menu Modal
  const [showUserProfileMenu, setShoUserProfileMenu] = useState(false);
  const style = useMemo(() => ({ top: 48, right: 0, width: '260px' }), []);

  const onCloseModal = useCallback(() => {}, []);
  const onCloseMenu = useCallback(() => {
    // setShoUserProfileMenu(false);
  }, []);

  const onClickUserProfile = useCallback(() => {
    setShoUserProfileMenu((prev) => !prev);
  }, []);

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
          {/* icon */}
          <div className="iconBox">
            <MenuItem>
              <MdNotificationsNone className="mdIcon notification" />
            </MenuItem>
            <MenuItem>
              <Link to="/directs">
                <FiSend className="fiIcon directs" />
              </Link>
            </MenuItem>
            <MenuItem>
              <MdOutlineApps className="mdIcon moreIcon" />
            </MenuItem>
            <UserProfile onClick={onClickUserProfile}>아무개</UserProfile>
          </div>
        </ul>
      </div>
      {/* <Menu style={style} show={showUserProfileMenu} onCloseModal={onCloseMenu}>
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
      </Menu> */}
    </Nav>
  );
};

export default MarketNav;
