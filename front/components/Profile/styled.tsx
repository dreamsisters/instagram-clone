import styled from '@emotion/styled';

export const UserWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  > .photo {
    width: 50px;
    height: 50px;
    border: 1px solid #dfdfdf;
    border-radius: 50%;
    margin-right: 7px;
  }
  > .nameWrapper {
    display: flex;
    flex-direction: column;
    > .nickname {
      font-weight: 500;
    }
    > .name {
      font-size: 0.8rem;
      opacity: 0.7;
    }
  }
`;
