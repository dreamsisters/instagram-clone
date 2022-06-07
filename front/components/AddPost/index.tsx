import React, { FC, useEffect, useState } from 'react';
import { Header, AddPostStep, Step, Form, PostPreview, ImgPreview, Images, PostText } from './styled';
import { LeftArrow, RightArrow } from '../ArrowBtn';
import {
  MdOutlineShoppingBag as Shop,
  MdOutlineClear as Clear,
  MdOutlineAddPhotoAlternate as AddPostIcon,
  MdKeyboardArrowLeft as LeftBtn,
  MdKeyboardArrowRight as RightBtn,
  //   MdAddCircleOutline as PlusIcon,
} from 'react-icons/md';
import { IoAddSharp as PlusIcon } from 'react-icons/io5';
interface IFormValues {}

interface IProps {
  show?: boolean;
}

const AddPost: FC<IProps> = () => {
  //step state
  const [step1, setStep1] = useState(false);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(true);
  //input state
  const [inputFile, setFile] = useState(false);
  let fileList = new DataTransfer();

  const fileChange = (e: any) => {
    fileList = e.target.files;
    console.log(e.target.files);
    console.log(fileList);
    //input change가 일어나면 step2로 이동
    setStep1(!step1);
    setStep2(!step2);
  };

  return (
    <>
      <Header>
        <h3>게시물 작성</h3>
        <Clear className="mdIcon" />
      </Header>
      <AddPostStep>
        <Step id="step1" show={step1}>
          <Form>
            <AddPostIcon className="mdIcon" />
            <label htmlFor="fileInput">
              파일 선택하기
              <input onChange={fileChange} id="fileInput" type="file" multiple />
            </label>
          </Form>
        </Step>

        <Step id="step2" show={step2}>
          <LeftArrow name={'이전'} />
          <ImgPreview>
            <Images>preview slider</Images>
            <div className="previewBox">
              <div className="album"></div>
              <PlusIcon className="plusIcon" />
            </div>
          </ImgPreview>
          <RightArrow name={'다음'} />
        </Step>

        <Step className="step3" show={step3}>
          <div className="step3Box">
            <LeftArrow name={'이전'} />

            <PostPreview>
              <Images></Images>
              <PostText></PostText>
            </PostPreview>
          </div>
        </Step>
      </AddPostStep>
    </>
  );
};

export default AddPost;
