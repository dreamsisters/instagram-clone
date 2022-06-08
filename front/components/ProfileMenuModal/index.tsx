import React from 'react';
import { Link } from 'react-router-dom';
import { UserProfile } from './styled';
import { MenuList } from '../DefaultNav/styles';

const ProfileMenuModal = () => {
  return (
    <>
      <UserProfile>
        <Link to="/" className={'user-avartar'}></Link>
        <Link to="/" className={'user-desc'}>
          <span className={'user-nickname'}>아무개</span>
          <span className={'user-auth'}>amugae@gmail.com</span>
        </Link>
      </UserProfile>
      <MenuList>
        <Link to="/">내 프로필</Link>
        <Link to="/">보관함</Link>
        <a href="/market">위시리스트</a>
        <Link to="/">계정 설정</Link>
        <button className={'logout-button'}>로그아웃</button>
      </MenuList>
    </>
  );
};

export default ProfileMenuModal;
