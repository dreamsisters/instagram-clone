import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { Nav } from '../DefaultNav/styles';
import { Logo } from '@components/Logo';
import { Link } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';

interface IProps {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  navState: string;
}

const UnknownNav = () => {
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
          <Link to="/search">
            <MdSearch className="navIcon" />
          </Link>
        </div>
        <ul className="col menu">
          {/* link 태그 사용하지 않고 href 사용한 이유 */}
          {/* 앱 상태 초기화 & 페이지 전환하기 위해 */}
          <a href="/sign_in">로그인</a>
          <a href="/sign_up">회원 가입</a>
        </ul>
      </div>
    </Nav>
  );
};

export default UnknownNav;
