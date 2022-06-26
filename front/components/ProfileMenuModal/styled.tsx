import styled from '@emotion/styled';

export const UserProfile = styled.div`
  padding: 10px 16px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
  > .user-avartar {
    width: 43px;
    height: 43px;
    border-radius: 50%;
    background-color: #f2f2f2;
  }

  > .user-desc {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    > .user-nickname {
      font-size: 15px;
    }

    > .user-auth {
      font-size: 13px;
      color: #878787;
    }
  }
`;
