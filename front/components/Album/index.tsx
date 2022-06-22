import React, { FC, useEffect, useState, useCallback } from 'react';
import { ImgWrapper, Images, ProcessDot, Dot } from './styled';
import { LeftArrow, RightArrow } from '@components/ArrowBtn';

interface IProps {
  children?: React.ReactNode;
  name?: string; //버튼 옆 이름 선택사항
  imgList: Array<string | number>;
}

const Album: FC<IProps> = ({ imgList }) => {
  //carousel state
  const [albumStep, setAlbumStep] = useState(1);
  //step이 '1' 증감 할 때마다 '330px' 이동
  const [transform, setTransform] = useState(0);

  //이미지 리스트에 변동이 생기면 step 초기화
  useEffect(() => {
    setAlbumStep(1);
    setTransform(0);
  }, [imgList]);

  let albumLength = imgList.length;
  // const [length, setLength] = useState(albumLength);
  console.log(imgList);
  console.log(albumLength);

  const albumObj = {
    stepType: 'albumStep',
    value: albumStep,
    length: imgList.length,
  };

  //image mapping
  let urlList: Array<any> = [];
  const [url, setUrl] = useState(urlList);
  useEffect(() => {
    imgList.map((file: any) => {
      urlList.push(file.url);
    });
    setUrl(urlList);
  }, [imgList]);
  // console.log(imgList);

  const renderItem = useCallback(
    (file: any) => {
      // console.log(file);
      return <Images key={file.date} url={file.url} className="item" move={transform} />;
    },
    [transform],
  );

  const renderDot = useCallback(
    (albumStep: any, i: number) => {
      return <Dot key={i + 1} step={albumStep} index={i + 1} />;
    },
    [albumStep],
  );

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
      <ProcessDot length={albumLength}>{imgList.map((img, i) => renderDot(albumStep, i))}</ProcessDot>
    </ImgWrapper>
  );
};

export default Album;
