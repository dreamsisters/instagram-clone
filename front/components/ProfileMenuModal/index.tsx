import React from 'react';
import { Link } from 'react-router-dom';
import { UserProfile } from './styled';
import { MenuList } from '../DefaultNav/styles';

const ProfileMenuModal = () => {
  const logout = () => {
    if (confirm('로그아웃 하시겠습니까?')) {
      console.log('logout');
      // Todo 세션 로그인 정보 초기화하는 코드 추가
      window.location.replace('/');
    }
  };

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
        <a href="/market" className="borderTop">
          위시리스트
        </a>
        <Link to="/">계정 설정</Link>
        <button type="button" className="borderTop" onClick={logout}>
          로그아웃
        </button>
      </MenuList>
    </>
  );
};

export default ProfileMenuModal;
