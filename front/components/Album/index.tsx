import React, { FC, useEffect, useState, useCallback, useRef, useMemo, Children, useTransition } from 'react';
import {
  TagAlert,
  ModalHeader,
  HeaderP,
  ModalInput,
  UserList,
  TagItem,
  ImgWrapper,
  Images,
  ProcessDot,
  Dot,
} from './styled';
import { LeftArrow, RightArrow } from '@components/ArrowBtn';
import SmallModal from '@components/SmallModal';
import Profile from '@components/Profile';
import { MdOutlineClear as Clear } from 'react-icons/md';

interface IProps {
  children?: React.ReactNode;
  name?: string; //버튼 옆 이름 선택사항
  type: string;
  imgList: Array<string | number>;
  setTagUser?: React.Dispatch<React.SetStateAction<object[]>>;
}

const Album: FC<IProps> = ({ imgList, type, setTagUser }) => {
  //carousel state
  const [albumStep, setAlbumStep] = useState(1);
  //step이 '1' 증감 할 때마다 '330px' 이동
  const [transform, setTransform] = useState(0);
  //tag alert show state
  const [tagAlert, setTagAlert] = useState(false);
  //tag modal show state
  const [searchModal, setSearchModal] = useState(false);

  //Drag & Drop 실행 시, step 초기화
  useEffect(() => {
    setAlbumStep(1);
    setTransform(0);
  }, [imgList]);

  //album 타입이 post create일 경우 tag alert 표시
  useEffect(() => {
    if (type == 'create') {
      setTagAlert(true);
      console.log('tag', tagAlert);
    }
  }, [type]);
  //tag alert animation 끝나면 z-index 변경
  const animationEnd = (e: any) => {
    setTagAlert(false);
    console.log('animation end');
  };

  //carousel width
  // const widthRef = useRef<any>(0);
  // const [albumWidth, setAlbumWidth] = useState(0);

  // useEffect(() => {
  //   setAlbumWidth(widthRef.current?.offsetWidth);
  // }, [imgList]);
  // console.log('album width', albumWidth);

  let albumLength = imgList.length;

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

  const searchModalStyle = {
    top: `50%`,
    left: `45%`,
    width: '230px',
    padding: '7px',
  };

  //클릭한 이미지가 바뀌면 내용도 초기화 됨
  let tagTarget: any = [];
  // const [tagUsers, setTagUsers] = useState(tagTarget);

  //object array {}
  let userTag: Array<{ fileDate: number; tagUsers: Array<string> }> = [];
  // console.log(userTag!);

  const [targetID, setTargetID] = useState(0);
  //add userTag
  const imageRef = useRef(null);
  const onSearchModal = (e: any) => {
    //클릭한 이미지 id 값
    setTargetID(Number(e.target.id));
    // const imgId = Number(e.target.id);
    //target user
    // let tagTarget = {};
    //open modal
    setSearchModal(!searchModal);
  };

  const renderItem = (file: any) => {
    userTag.push({ fileDate: file.date, tagUsers: [] });
    return (
      <Images
        ref={imageRef}
        onClick={onSearchModal}
        key={file.date}
        id={file.date}
        url={file.url}
        className="item"
        move={transform}
      ></Images>
    );
  };

  const renderDot = useCallback(
    (albumStep: any, i: number) => {
      return <Dot key={i + 1} step={albumStep} index={i + 1} />;
    },
    [albumStep],
  );

  let dummyUser = [
    { nickName: 'dummy1', email: '123@456.com' },
    { nickName: 'dummy2', email: '789@012.com' },
  ];

  // console.log(searchModal);
  const renderUser = useCallback(
    (user: { nickName: string; email: string }, i: number, e: any, targetID: any, userTag: any) => {
      //태그된 user list(각 이미지에 할당 후, 초기화 되어야 함)
      // let tagTarget: Array<object> = [];
      const onTarget = () => {
        console.log(targetID);
        // tagTarget.push(user);
        // setTagUsers(user);
        console.log(userTag);

        userTag.map((file: any) => {
          console.log('map');
          if (file.fileDate === targetID) {
            console.log('correct user');
            file.tagUsers.push(user.nickName);
          }
        });
        setSearchModal(false);
      };

      return (
        <TagItem key={i} type="button" onClick={onTarget}>
          {user.nickName}
          {/* <Profile /> */}
        </TagItem>
      );
    },
    [],
  );

  //태그 유저 list 수정
  // const renderTag = useCallback(() => {
  //   setTagUser!(tagTarget);
  // }, [tagTarget]);

  return (
    <>
      <ImgWrapper type={type}>
        <SmallModal id="step3Album" show={searchModal} style={searchModalStyle} setState={setSearchModal}>
          <ModalHeader>
            <HeaderP>사용자 검색</HeaderP>
            <Clear className="mdIcon" onClick={onSearchModal} />
          </ModalHeader>
          <ModalInput type="text" />
          <UserList>{dummyUser.map((user, i, e) => renderUser(user, i, e, targetID, userTag))}</UserList>
        </SmallModal>
        <TagAlert onAnimationEnd={animationEnd} show={tagAlert}>
          사진을 눌러 태그하세요
        </TagAlert>
        <LeftArrow
          stepObj={albumObj}
          length={albumLength}
          setStep={setAlbumStep}
          move={transform}
          setMove={setTransform}
          width={type}
        />
        <RightArrow
          stepObj={albumObj}
          length={albumLength}
          setStep={setAlbumStep}
          move={transform}
          setMove={setTransform}
          width={type}
        />
        <div className="carousel">{imgList.map((file) => renderItem(file))}</div>
        <ProcessDot length={albumLength}>{imgList.map((img, i) => renderDot(albumStep, i))}</ProcessDot>
      </ImgWrapper>
    </>
  );
};

export default Album;
