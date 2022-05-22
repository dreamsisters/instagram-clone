import Navigation from '@components/Navigation';
import { Base } from './styles';
import React, { useState } from 'react';

const dummy = {
  name: '아무개',
  nickname: '아무개',
  email: 'amugae@gmail.com',
  gender: 'm',
  birth: '991010',
};

const Home = () => {
  const [isLoggedIn, setLoggedInUser] = useState(false);

  return (
    <Base>
      <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setLoggedInUser} />
      <div className={'content'}>
        <div>홈</div>
      </div>
    </Base>
  );
};

export default Home;
