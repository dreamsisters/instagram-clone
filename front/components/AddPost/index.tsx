import React, { FC, useEffect, useState } from 'react';
import { Header, AddPostStep, Step, Form, PostPreview, ImgPreview, Images, PostText } from './styled';
import { LeftArrow, RightArrow } from '../ArrowBtn';
import {
  MdOutlineShoppingBag as Shop,
  MdOutlineClear as Clear,
  MdOutlineAddPhotoAlternate as AddPostIcon,
} from 'react-icons/md';
import { IoAddSharp as PlusIcon } from 'react-icons/io5';
interface IFormValues {}

interface IProps {
  show?: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddPost: FC<IProps> = ({ setState }) => {
  //step state
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);

  const stepLength = 3;
  const [postStep, setPostStep] = useState(1);

  //close AddPost Modal
  const onClear = () => {
    //선택한 사진 or 작성한 내용이 있을 경우
    if (postStep == 2 || postStep == 3) {
      //내용 삭제 여부 confirm
      if (confirm('작성중인 내용이 삭제됩니다.')) {
        //'확인' 선택 시 Modal Close & step 원위치
        setPostStep(1);
        setState(false);
      }
    } else {
      setState(false);
    }
  };

  const isEvent = (e: any) => {
    useEffect(() => {
      if (postStep == 1) {
        setStep1(true);
        setStep2(false);
        setStep3(false);
      }
      if (postStep == 2) {
        setStep1(false);
        setStep2(true);
        setStep3(false);
      }
      if (postStep == 3) {
        setStep1(false);
        setStep2(false);
        setStep3(true);
      }
    }, [postStep]);
  };
  //input state
  const [inputFile, setFile] = useState(false);
  let fileList = new DataTransfer();

  const fileChange = (e: any) => {
    fileList = e.target.files;
    console.log(e.target.files);
    console.log(fileList);
    //input change가 일어나면 step2로 이동
    setPostStep(2);
  };

  return (
    <>
      <Header>
        <h3>게시물 작성</h3>
        <Clear className="mdIcon" onClick={onClear} />
      </Header>
      <AddPostStep>
        {/* input 파일 선택 */}
        <Step id="step1" show={step1}>
          <LeftArrow name={'이전'} step={postStep} setStep={setPostStep} />

          <Form>
            <AddPostIcon className="mdIcon" />
            <label htmlFor="fileInput">
              파일 선택하기
              <input onChange={fileChange} id="fileInput" type="file" multiple />
            </label>
          </Form>
          <RightArrow name={'다음'} step={postStep} setStep={setPostStep} length={stepLength} />
        </Step>
        {/* 파일 미리보기 & 순서 변경 */}
        <Step id="step2" show={step2}>
          <LeftArrow name={'이전'} step={postStep} setStep={setPostStep} />
          <ImgPreview>
            <Images>preview slider</Images>
            <div className="previewBox">
              <div className="album"></div>
              <PlusIcon className="plusIcon" />
            </div>
          </ImgPreview>
          <RightArrow name={'다음'} step={postStep} setStep={setPostStep} length={stepLength} />
        </Step>
        {/* 태그 추가 & text & data submit */}
        <Step className="step3" show={step3}>
          <div>
            <LeftArrow name={'이전'} step={postStep} setStep={setPostStep} />
            <PostPreview>
              <Images></Images>
              <PostText></PostText>
            </PostPreview>
            <RightArrow name={'다음'} step={postStep} setStep={setPostStep} length={stepLength} />
          </div>
        </Step>
      </AddPostStep>
    </>
  );
};

export default AddPost;
