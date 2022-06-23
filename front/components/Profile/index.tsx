import React from 'react';
import { UserWrapper } from './styled';

const Profile = () => {
  return (
    <UserWrapper>
      <div className="photo"></div>
      <div className="nameWrapper">
        <div className="nickname">닉네임</div>
        <div className="name">이름</div>
      </div>
    </UserWrapper>
  );
};

export default Profile;
