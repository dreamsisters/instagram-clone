import { Nav, MenuItem, UserProfile, UserProfileCard, MenuList } from './styles';
import React, { Dispatch, FC, SetStateAction, useCallback, useMemo, useState } from 'react';
import Menu from '@components/Menu';
import Logo from '@components/Logo';
import { Link } from 'react-router-dom';
import { MdSearch, MdNotificationsNone, MdOutlineApps, MdInsertPhoto } from 'react-icons/md';
import { FiSend } from 'react-icons/fi';
// icon list
// MdAccountCircle
// MdCheckCircleOutline
// MdDeleteOutline
// MdFavoriteBorder
// MdFavorite
// MdHighlightOff
// MdLogout
// MdPermIdentity
// MdPeopleAlt
// MdShare
// MdOutlineHome
// MdQuestionAnswer
// MdOutlineShoppingBag
// MdOutlineShoppingCart
// MdOutlineStore
// MdSupervisorAccount
// MdClear
// MdArrowBackIosNew
// MdArrowForwardIos
// MdAssignmentInd
// MdBookmarkBorder
// MdBookmark

interface IProps {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const Navigation = ({ isLoggedIn, setIsLoggedIn }: IProps) => {
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
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="col search-box">
          <input type={'text'}></input>
          <a href="/">
            <MdSearch className="navIcon" />
          </a>
        </div>
        <ul className="col menu">
          {/* icon */}
          <div className="iconBox">
            <MenuItem>
              <MdNotificationsNone className="mdIcon" />
            </MenuItem>
            <MenuItem>
              <FiSend className="fiIcon" />
            </MenuItem>
            <MenuItem>
              <MdOutlineApps className="mdIcon" />
            </MenuItem>
            <UserProfile onClick={onClickUserProfile}>아무개</UserProfile>
          </div>
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
