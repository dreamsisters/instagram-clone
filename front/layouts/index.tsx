import React, { useCallback, useEffect, useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import DefaultNav from '@components/DefaultNav';
// import MarketNav from '@components/MarketNav';
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
  const { data: userData, error, mutate } = useSWR('/api/user/me', fetcher);
  // const [userData, setUserData] = useState(true);

  //현재 페이지 경로(각 route 별 path)
  const [path, setPath] = useState('/');
  // console.log(path);

  //login 상태에 따른 페이지 제한
  useEffect(() => {
    //logout 페이지 제한
    if (userData === false) {
      console.log('state : logout');
      // console.log(path);
      if (path === '/market' || path === '/directs' || path === '/setting' || path === '/search') {
        if (window.confirm('로그인이 필요한 서비스입니다. [ 확인 시 로그인 페이지로 이동 ]')) {
          window.location.replace('/sign_in');
        } else {
          window.location.replace('/');
        }
      }
    }
    //login 페이지 제한
    if (userData) {
      console.log('state : login');
      if (path.includes('/sign')) {
        alert('접근할 수 없는 페이지입니다.');
        window.location.replace('/');
      }
    }
  }, [userData, path]);

  const navigation = useCallback(() => {
    console.log('userdata', Boolean(userData));
    if (userData === false) {
      //sign page
      if (path.includes('/sign')) {
        console.log('sign');
        return null;
      } else {
        console.log('unknown');
        return <UnknownNav />;
      }
    } else if (userData) {
      console.log('default');
      return <DefaultNav path={path} isLogin={userData} />;
    }
  }, [userData, path]);

  return (
    <>
      {navigation()}
      <Switch>
        <Route exact path="/" render={() => <Home setPath={setPath} />} />
        <Route path="/search" render={() => <Search setPath={setPath} />} />
        <Route path="/directs" render={() => <Directs setPath={setPath} />} />
        <Route path="/market" render={() => <Market setPath={setPath} />} />
        {/* <Route path="/setting" render={()=> <Setting setPath={setPath} />} /> */}
        <Route path="/sign_in" render={() => <SignIn setPath={setPath} />} />
        <Route path="/sign_up" render={() => <SignUp setPath={setPath} />} />
      </Switch>
    </>
  );
};

export default App;
