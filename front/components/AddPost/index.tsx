import React, { FC, useEffect, useState } from 'react';
import { Header, AddPostStep, Step, Form, PostPreview, ImgPreview, PostText } from './styled';
import { LeftArrow, RightArrow } from '@components/ArrowBtn';
import AlbumDND from '@components/AlbumDND';
import {
  MdOutlineShoppingBag as Shop,
  MdOutlineClear as Clear,
  MdOutlineAddPhotoAlternate as AddPostIcon,
} from 'react-icons/md';
interface IFormValues {}

interface IProps {
  show?: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

let dt = new DataTransfer(); //CRUD 위해 사용

const AddPost: FC<IProps> = ({ setState }) => {
  //post show state
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  //step state
  const [postStep, setPostStep] = useState(1);
  const stepLength = 3;

  const stepObj = {
    stepType: 'postStep',
    value: postStep,
  };

  //close AddPost Modal
  const onClear = () => {
    //선택한 사진 or 작성한 내용이 있을 경우
    if (postStep == 2 || postStep == 3) {
      //내용 삭제 여부 confirm
      if (confirm('작성중인 내용이 사라집니다.')) {
        //'확인' 선택 시 Modal Close & step 원위치
        setPostStep(1);
        setState(false);
      }
    } else {
      setState(false);
    }
  };

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

  //input state
  let files: any = {};
  const [inputFile, setFile] = useState(files);

  const selectFile = (e: any) => {
    let Files = e.target.files;
    const fileArr = Object.values(Files);
    fileArr.map((file: any) => {
      //선택한 파일들을 dt item으로 추가
      dt.items.add(file);
    });
    //기존 file Obj + add file Obj = 새로운 state 지정
    let newFileObj = Object.assign({}, inputFile, dt.files);
    setFile(newFileObj);
    //최초 input change가 일어나면 step2로 이동
    setPostStep(2);
  };

  const deleteFile = () => {};

  return (
    <>
      <Header>
        <h3>게시물 작성</h3>
        <Clear className="mdIcon" onClick={onClear} />
      </Header>
      <AddPostStep>
        {/* input 파일 선택 */}
        <Step id="step1" show={step1}>
          <Form encType="multipart/form-data">
            <AddPostIcon className="mdIcon" />
            <label htmlFor="fileInput">
              파일 선택하기
              <input onChange={selectFile} id="fileInput" type="file" multiple />
            </label>
          </Form>
        </Step>
        {/* 파일 미리보기 & 순서 변경 */}
        <Step id="step2" show={step2}>
          <LeftArrow name={'이전'} stepObj={stepObj} setStep={setPostStep} />
          <ImgPreview id="preview">
            {/* <img src={readerFile} /> */}
            <AlbumDND fileObj={inputFile} selectFile={selectFile} deleteFile={deleteFile} />
          </ImgPreview>
          <RightArrow name={'다음'} stepObj={stepObj} setStep={setPostStep} length={stepLength} />
        </Step>
        {/* 태그 추가 & text & data submit */}
        <Step className="step3" show={step3}>
          <div>
            <LeftArrow name={'이전'} stepObj={stepObj} setStep={setPostStep} />
            <Form>
              <PostPreview>
                {/* <Album fileList={fileList} /> */}
                <PostText></PostText>
              </PostPreview>
              <button>submit</button>
            </Form>
          </div>
        </Step>
      </AddPostStep>
    </>
  );
};

export default AddPost;
