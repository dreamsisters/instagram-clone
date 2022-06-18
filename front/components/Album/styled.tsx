import styled from '@emotion/styled';

// export const ImgWrapper = styled.div`
export const ImgWrapper = styled.div`
  width: 330px;
  height: 330px;
  margin-bottom: 50px;
  background-color: #dfdfdf;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  > .carousel {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    > .item {
      /* transform: translateX(-330px); */
      transition: all 0.5s;
    }
  }
  > button {
    position: absolute;
    z-index: 500;
    &.left {
      left: 0;
    }
    &.right {
      right: 0;
    }
  }
`;

export const Images = styled.div<{ url: any }>`
  min-width: 330px;
  height: 100%;

  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
`;

export const ProcessDot = styled.div``;
