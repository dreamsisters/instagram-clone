import React, { useState } from 'react';
import { Base, PostContainer } from './styles';
import Navigation from '@components/DefaultNav';
import PostItem from '@components/PostItem';
import PostModal from '@components/PostModal';

const dummy = {
  name: '아무개',
  nickname: '아무개',
  email: 'amugae@gmail.com',
  gender: 'm',
  birth: '991010',
};

//메인 post 나열 페이지
const Home = () => {
  const [isLoggedIn, setLoggedInUser] = useState(false);

  return (
    <Base>
      <div className={'content'}>
        <div>Story Area</div>
        <PostContainer>{/* <PostItem /> */}</PostContainer>

        {/* <PostModal isClose={false} /> */}
      </div>
    </Base>
  );
};

export default Home;
