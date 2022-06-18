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
  const [albumStep, setAlbumStep] = useState(1);
  const albumLength = imgList.length;
  const albumObj = {
    stepType: 'albumStep',
    value: albumStep,
  };

  // const Image = imgList.map(({ url, name }) => {
  //   return <Img key={name} src={url} alt={name} />;
  // });

  // console.log(imgList);
  let urlList: Array<any> = [];
  const [url, setUrl] = useState(urlList);
  useEffect(() => {
    imgList.map((file: any) => {
      urlList.push(file.url);
    });
    setUrl(urlList);
  }, [url]);
  // console.log(imgList);

  const renderItem = useCallback((file: any) => {
    console.log(file);
    return <Images key={file.date} url={file.url} className="item" />;
  }, []);

  // const renderDot = useCallback((file: any) => {
  //   console.log(file);
  //   return <Images key={file.date} url={file.url} className="item" />;
  // }, []);

  return (
    <ImgWrapper>
      <LeftArrow stepObj={albumObj} length={albumLength} setStep={setAlbumStep} />
      <RightArrow stepObj={albumObj} length={albumLength} setStep={setAlbumStep} />
      <div className="carousel">{imgList.map((file) => renderItem(file))}</div>
      {/* <ProcessDot>{imgList.map((file) => renderDot(file))}</ProcessDot> */}
    </ImgWrapper>
  );
};

export default Album;
