import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import DefaultNav from '@components/DefaultNav';
import MarketNav from '@components/MarketNav';
import UnknownNav from '@components/UnknownNav';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';

const Home = loadable(() => import('@pages/Home'));
const Search = loadable(() => import('@pages/Search'));
const Directs = loadable(() => import('@pages/Directs'));
const Market = loadable(() => import('@pages/Market'));
// const Setting = loadable(() => import('@pages/Setting'));
const SignIn = loadable(() => import('@pages/SignIn'));
const SignUp = loadable(() => import('@pages/SignUp'));

const App = () => {
  const { data: userData, error, mutate } = useSWR('/api/users/me', fetcher);

  //현재 페이지 경로
  let path = window.location.pathname;
  // console.log(path);

  //세션 & 페이지 상태
  let navState = '';
  // console.log(navState);

  //세션 & 페이지 별 flag 조건
  if (path == '/sign_in' || path == '/sign_up') {
    navState = 'signPage';
  } else if (userData == true && path == '/market') {
    navState = 'market';
  } else if (userData == false) {
    navState = 'unknown';
  } else if (userData == true) {
    navState = 'user';
  }
  // console.log(typeof path);

  return (
    <>
      {/* 조건별 nav */}
      {navState === 'signPage' && null} {/* nav 표시 없음 */}
      {/* sign in & up 버튼 표시 */}
      {navState === 'unknown' && <UnknownNav />}
      {navState === 'user' && <DefaultNav isLoggedIn={userData} navState={navState} />}
      {navState === 'market' && <MarketNav isLoggedIn={userData} navState={navState} />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/directs" component={Directs} />
        <Route path="/market" component={Market} />
        {/* <Route path="/setting" component={Setting} /> */}
        <Route path="/sign_in" component={SignIn} />
        <Route path="/sign_up" component={SignUp} />
      </Switch>
    </>
  );
};

export default App;
