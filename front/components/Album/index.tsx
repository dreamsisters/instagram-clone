import React, { FC, useEffect, useState, useCallback } from 'react';
import { ImgWrapper, Images, ProcessDot } from './styled';
import { LeftArrow, RightArrow } from '@components/ArrowBtn';
import ReactDOM from 'react-dom';

interface IProps {
  children?: React.ReactNode;
  name?: string; //버튼 옆 이름 선택사항
  imgList: Array<string | number>;
}

const Album: FC<IProps> = ({ imgList }) => {
  //carousel state
  const [albumStep, setAlbumStep] = useState(1);
  const albumLength = imgList.length;

  const albumObj = {
    stepType: 'albumStep',
    value: albumStep,
  };

  //step이 '1' 증감 할 때마다 '330px' 이동
  const [transform, setTransform] = useState(0);
  console.log(transform);
  // const prevImg = useCallback(() => {
  //   console.log('prev');
  //   setTransform('330px');
  // }, []);

  // const nextImg = useCallback(() => {
  //   console.log('next');
  //   setTransform('-330px');
  // }, []);

  //image mapping
  let urlList: Array<any> = [];
  const [url, setUrl] = useState(urlList);
  useEffect(() => {
    imgList.map((file: any) => {
      urlList.push(file.url);
    });
    setUrl(urlList);
  }, [url]);
  // console.log(imgList);

  const renderItem = useCallback(
    (file: any) => {
      // console.log(file);
      return <Images key={file.date} url={file.url} className="item" move={transform} />;
    },
    [transform],
  );

  // const renderDot = useCallback((file: any) => {
  //   console.log(file);
  //   return <Images key={file.date} url={file.url} className="item" />;
  // }, []);

  return (
    <ImgWrapper>
      <LeftArrow
        stepObj={albumObj}
        length={albumLength}
        setStep={setAlbumStep}
        move={transform}
        setMove={setTransform}
      />
      <RightArrow
        stepObj={albumObj}
        length={albumLength}
        setStep={setAlbumStep}
        move={transform}
        setMove={setTransform}
      />
      <div className="carousel">{imgList.map((file) => renderItem(file))}</div>
      {/* <ProcessDot>{imgList.map((file) => renderDot(file))}</ProcessDot> */}
    </ImgWrapper>
  );
};

export default Album;
