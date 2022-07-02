import React, { useEffect, useState } from 'react';
import { Base, PostContainer } from './styles';
import { IPath } from '@typings/db';
import PostItem from '@components/PostItem';

//메인 post 나열 페이지
const Home = ({ setPath }: IPath) => {
  // const [isLoggedIn, setLoggedInUser] = useState(false);

  useEffect(() => {
    // console.log(location.pathname);
    setPath(location.pathname);
  });
  return (
    <Base>
      <h1>Home</h1>
      <div className={'content'}>
        <div>Story Area</div>
        <PostContainer>{/* <PostItem /> */}</PostContainer>
      </div>
    </Base>
  );
};

export default Home;
