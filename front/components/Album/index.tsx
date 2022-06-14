import React, { FC, useState } from 'react';
import { ImgWrapper, Images, Img, ProcessDot } from './styled';
import { LeftArrow, RightArrow } from '@components/ArrowBtn';
import ReactDOM from 'react-dom';

interface IProps {
  children?: React.ReactNode;
  name?: string; //버튼 옆 이름 선택사항
  imgList: Array<any>;
}

const Album: FC<IProps> = ({ imgList }) => {
  const [albumStep, setAlbumStep] = useState(1);
  const albumLength = imgList.length;
  const albumObj = {
    stepType: 'albumStep',
    value: albumStep,
  };

  const Image = imgList.map(({ url, name }) => {
    return <Img key={name} src={url} alt={name} />;
  });
  return (
    <ImgWrapper>
      <LeftArrow stepObj={albumObj} length={albumLength} setStep={setAlbumStep} />
      <RightArrow stepObj={albumObj} length={albumLength} setStep={setAlbumStep} />
      <Images id="images">{Image}</Images>
      <ProcessDot />
    </ImgWrapper>
  );
};

export default Album;
