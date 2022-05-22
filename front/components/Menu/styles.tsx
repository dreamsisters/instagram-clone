import styled from '@emotion/styled';

export const CreateMenu = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  > div {
    z-index: 1000;
    max-width: 1200px;
    margin: auto;
    position: relative;

    > div {
      position: absolute;
      background-color: #fff;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      border-radius: 5px;
    }
  }
`;
