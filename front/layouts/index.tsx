import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import DefaultNav from '@components/DefaultNav';
import MarketNav from '@components/MarketNav';
import UnknownNav from '@components/UnknownNav';

const Home = loadable(() => import('@pages/Home'));
const Search = loadable(() => import('@pages/Search'));
const Directs = loadable(() => import('@pages/Directs'));
const Market = loadable(() => import('@pages/Market'));
// const Setting = loadable(() => import('@pages/Setting'));
const SignIn = loadable(() => import('@pages/SignIn'));
const SignUp = loadable(() => import('@pages/SignUp'));

const App = () => {
  const [isLoggedIn, setLoggedInUser] = useState(false);
  //현재 페이지 경로
  let path = window.location.pathname;
  console.log(path);
  //세션 & 페이지 상태
  let navState = '';
  console.log(navState);

  //세션 & 페이지 별 flag 조건
  if (path == '/sign_in' || path == '/sign_up') {
    navState = 'signPage';
  } else if (isLoggedIn == true && path == '/market') {
    navState = 'market';
  } else if (isLoggedIn == false) {
    navState = 'unknown';
  } else if (isLoggedIn == true) {
    navState = 'user';
  }

  console.log(typeof path);
  return (
    <>
      {/* 조건별 nav */}
      {navState === 'signPage' && null} {/* nav 표시 없음 */}
      {/* sign in & up 버튼 표시 */}
      {navState === 'unknown' && <UnknownNav />}
      {navState === 'user' && (
        <DefaultNav isLoggedIn={isLoggedIn} setIsLoggedIn={setLoggedInUser} navState={navState} />
      )}
      {navState === 'market' && (
        <MarketNav isLoggedIn={isLoggedIn} setIsLoggedIn={setLoggedInUser} navState={navState} />
      )}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/directs" component={Directs} />
        <Route path="/market" component={Market} />
        {/* <Route exact path="/setting" component={Setting} /> */}
        <Route path="/sign_in" component={SignIn} />
        <Route path="/sign_up" component={SignUp} />
      </Switch>
    </>
  );
};

export default App;
