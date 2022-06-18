import React, { FC, useEffect, useRef, useState } from 'react';
import { Header, AddPostStep, Step, Form, PostPreview, ImgPreview, PostText } from './styled';
import { LeftArrow, RightArrow } from '@components/ArrowBtn';
import Album from '@components/Album';
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
  let files: any = [];
  const [inputFile, setFile] = useState(files);

  //파일 중복 검사
  function duplicateCheck(props: any) {
    let duplicate: boolean = false;

    const checkInput = Object.values(inputFile);
    // inputFile 중 인자로 받은 name과 일치하는 요소는
    checkInput.map((file: any) => {
      if (file.name == props.name) {
        //중복여부 true 반환
        duplicate = true;
      }
    });
    return duplicate;
  }

  //파일 추가 및 중복 검사
  const selectFile = (e: any) => {
    let Files = e.target.files;
    const fileArr = Object.values(Files);
    fileArr.map((file: any) => {
      if (duplicateCheck(file)) {
        console.log(duplicateCheck(file));
        alert(file.name + '은 이미 선택한 파일입니다.');
      } else {
        //중복여부 false인 file -> dt item으로 추가
        console.log(file.name + ' is able');
        dt.items.add(file);
      }
    });
    //기존 file Obj + add file Obj = 새로운 state 지정
    let newFileObj = Object.assign({}, inputFile, dt.files);
    setFile(newFileObj);
    //최초 input change가 일어나면 step2로 이동
    setPostStep(2);
  };

  //선택 파일 삭제
  //url 값이 일치하는 기준으로 delete
  const deleteFile = (e: any) => {
    //data-key 값 : file.lastModifiedDate
    let target = e.currentTarget;
    let fileDate = target.getAttribute('data-key');

    const dtFiles = Object.values(dt.files);
    //dt.files 중
    dtFiles.map((file: any) => {
      //선택한 사진의 Date와 일치하는 파일은
      if (fileDate == file.lastModified) {
        //dt.items에서 제거
        dt.items.remove(file);
      }
    });

    const inputFiles = Object.values(inputFile);
    //inputFile 중
    let newFileList: any = [];
    inputFiles.map((file: any) => {
      //선택한 사진의 Date와 일치하지 않는 요소만 배열에 추가
      if (fileDate != file.lastModified) {
        newFileList.push(file);
      }
    });
    setFile(newFileList);
  };
  // console.log('input date', inputFile);

  return (
    <>
      <Header>
        <h3>게시물 작성</h3>
        <Clear className="mdIcon" onClick={onClear} />
      </Header>
      <AddPostStep>
        {/* Step1 : input 파일 선택 */}
        <Step id="step1" show={step1}>
          <Form encType="multipart/form-data">
            <AddPostIcon className="mdIcon" />
            <label htmlFor="fileInput">
              파일 선택하기
              <input onChange={selectFile} id="fileInput" type="file" multiple />
            </label>
          </Form>
        </Step>
        {/* Step2 : 파일 미리보기 & 순서 변경 */}
        <Step id="step2" show={step2}>
          <LeftArrow name={'이전'} stepObj={stepObj} setStep={setPostStep} />
          <ImgPreview id="preview">
            <AlbumDND fileObj={inputFile} setFile={setFile} selectFile={selectFile} deleteFile={deleteFile} />
          </ImgPreview>
          <RightArrow name={'다음'} stepObj={stepObj} setStep={setPostStep} length={stepLength} />
        </Step>
        {/* Step3 : 태그 추가 & text & data submit */}
        <Step className="step3" show={step3}>
          <div>
            <LeftArrow name={'이전'} stepObj={stepObj} setStep={setPostStep} />
            <Form>
              <PostPreview>
                {/* <Album imgList={inputFile} /> */}
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
