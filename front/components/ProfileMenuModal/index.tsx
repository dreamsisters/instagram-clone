import React from 'react';
import { UserProfile } from './styled';
import { MenuList } from '../DefaultNav/styles';

const ProfileMenuModal = () => {
  return (
    <>
      <UserProfile>
        <div className={'user-avartar'}></div>
        <div className={'user-desc'}>
          <span className={'user-nickname'}>아무개</span>
          <span className={'user-auth'}>amugae@gmail.com</span>
        </div>
      </UserProfile>
      <MenuList>
        <li>내 프로필</li>
        <li>보관함</li>
        <li>위시리스트</li>
        <li>계정 설정</li>
        <li className={'logout-button'}>로그아웃</li>
      </MenuList>
    </>
  );
};

export default ProfileMenuModal;
