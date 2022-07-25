import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const opacity = keyframes`
  0% {opacity: 1;}
  60% {opacity: 1;}
  100% {
    opacity: 0;
    z-index: -10;
  }
`;

export const TagAlert = styled.div<{ show: boolean }>`
  display: ${(props) => (props.show ? 'block' : 'none')};
  z-index: ${(props) => (props.show ? 900 : -900)};
  position: absolute;
  width: 100%;
  height: 100%;
  padding-top: 50%;
  text-align: center;
  color: #fff;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0;
  animation: ${opacity} 1.5s ease-in;
`;
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  > .mdIcon {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;
export const HeaderP = styled.p`
  font-size: 0.9rem;
  color: #525252;
`;
export const ModalInput = styled.input`
  width: 100%;
  padding: 7px 5px;
  border: 1px solid #dfdfdf;
  border-radius: 3px;
`;
export const UserList = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
`;
export const TagItem = styled.button`
  height: 30px;
  display: flex;
  border: none;
  border-radius: 3px;
  background-color: #fff;
  &:hover {
    background-color: #ededed;
  }
  /* flex-direction: column; */
`;
export const ImgWrapper = styled.div<{ type: string }>`
  width: ${(props) => (props.type == 'create' ? `450px` : `330px`)};
  height: ${(props) => (props.type == 'create' ? `450px` : `330px`)};
  margin-bottom: ${(props) => (props.type == 'create' ? `` : `50px`)};
  border: 1px solid #dfdfdf;
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

export const Images = styled.div<{ url: any; move: number }>`
  min-width: 100%;
  height: 100%;

  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;

  transform: translateX(${(props) => props.move + 'px'});
`;

export const ProcessDot = styled.div<{ length: number }>`
  display: ${(props) => (props.length == 1 ? 'none' : 'flex')};
  position: absolute;
  left: 50%;
  bottom: 5px;
  transform: translate(-50%, -50%);
`;

export const Dot = styled.div<{ step: number; index: number }>`
  width: 8px;
  height: 8px;
  margin-right: 5px;
  border-radius: 50%;
  background-color: ${(props) => (props.step == props.index ? `#288eeccb` : `rgba(232, 232, 232, 0.6)`)};
`;
