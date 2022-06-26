import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Header, AddPostStep, Step, Form, PostPreview, ImgPreview, Textarea } from './styled';
import { LeftArrow, RightArrow } from '@components/ArrowBtn';
import Album from '@components/Album';
import AlbumDND from '@components/AlbumDND';
import Profile from '@components/Profile';
import BlueBtn from '@components/BlueBtn';
import db from '../../typings/db';
import {
  MdOutlineShoppingBag as Shop,
  MdOutlineClear as Clear,
  MdOutlineAddPhotoAlternate as AddPostIcon,
  MdKeyboardArrowDown as DownICon,
  MdKeyboardArrowUp as UpIcon,
} from 'react-icons/md';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import axios from 'axios';

interface IFormValues {
  FileList: Array<object>;
  text?: Array<string>;
  tagBubble?: object;
  comment?: boolean;
}

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
  //album state
  let ImgList: Array<any> = [];
  const [album, setAlbum] = useState(ImgList);
  //options
  const [option, setOption] = useState(false);

  const stepObj = {
    stepType: 'postStep',
    value: postStep,
  };

  //input state
  let files: any = [];
  const [inputFile, setFile] = useState(files);

  //moveItem 함수에서, file index가 변경되면 업데이트
  useEffect(() => {
    dt.items.clear();
    const input = Object.values(inputFile);
    input.map((file: any) => {
      dt.items.add(file);
    });
    console.log(dt.files);
  }, [inputFile]);

  //form submit
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: {
      FileList: [],
      text: [],
      tagBubble: [],
      comment: true,
    },
  });

  const { FileList, text, tagBubble, comment } = watch();

  //close AddPost Modal
  const onClear = () => {
    //선택한 사진 or 작성한 내용이 있을 경우
    if (postStep == 2 || postStep == 3) {
      //내용 삭제 여부 confirm
      if (confirm('작성중인 내용이 사라집니다.')) {
        //'확인' 선택 시 Modal Close & step 원위치
        dt.items.clear();
        setFile(files);
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

  //파일 중복 검사
  function duplicateCheck(props: any) {
    let duplicate: boolean = false;

    const checkInput = Object.values(dt.files);
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
  const selectFile = useCallback((e: any) => {
    let Files = e.target.files;

    const fileArr = Object.values(Files);
    fileArr.map((file: any, i: number) => {
      if (duplicateCheck(file)) {
        console.log(duplicateCheck(file));
        alert(file.name + '은 이미 선택한 파일입니다.');
      } else {
        //중복여부 false인 file -> dt item으로 추가
        console.log(file.name + ' is able');
        dt.items.add(file);
      }
    });
    console.log(Files);

    const dtArr = Object.values(dt.files);
    setFile(dtArr);
    //최초 input change가 일어나면 step2로 이동
    setPostStep(2);
    e.target.value = null;
  }, []);
  // console.log(inputFile);

  //선택 파일 삭제
  const deleteFile = useCallback((e: any) => {
    console.log(inputFile);
    const target = e.currentTarget;
    const fileDate = target.getAttribute('data-key');
    const numDate = parseInt(fileDate);

    const dtFiles = Object.values(dt.files);
    //dt.files 중
    dtFiles.map((file: any, i: number) => {
      console.log(i, file);
      //선택한 사진의 Date와 일치하는 파일은
      if (numDate == file.lastModified) {
        //dt.items에서 제거
        console.log('delete', file);
        dt.items.remove(i);
        console.log(dt.files);
      }
    });
    //정리된 새로운 Files를 setState
    const newFiles = Object.values(dt.files);
    setFile(newFiles);
  }, []);

  // console.log(dt.files);

  const onSubmit = useCallback((data: IFormValues) => {
    console.log(data);

    let param = {};

    param = `
      FileList: ${dt.files}
      text: ${data.text}
      tagBubble: ${data.tagBubble}
      comment: ${data.comment}
    `;
    axios
      .post('/api/posts', param)
      .then((response) => {
        console.log('success!');
        if (response.data.status) {
          //response true면
          // setValue('author', '') 초기화 시키는 함수
        }
      })
      .catch((e) => {
        //error
        console.log(e);
      });
  }, []);

  return (
    <>
      <Header>
        <h3>게시물 작성</h3>
        <Clear className="mdIcon" onClick={onClear} />
      </Header>
      <AddPostStep>
        {/* Step1 : input 파일 선택 */}
        <Step show={step1}>
          <AddPostIcon className="mdIcon" />
          <label htmlFor="fileInput">
            파일 선택하기
            <input
              id="fileInput"
              type="file"
              // {...register('FileList')}
              onChange={selectFile}
              accept="image/jpg,image/png,image/heic,image/heif,video/mp4,video/quicktime"
              multiple
            />
          </label>
        </Step>
        {/* Step2 : 파일 미리보기 & 순서 변경 */}
        <Step className="step2" show={step2}>
          <LeftArrow name={'이전'} dt={dt} setFile={setFile} stepObj={stepObj} setStep={setPostStep} />
          <ImgPreview id="preview">
            <AlbumDND setDT={dt} fileObj={inputFile} setFile={setFile} setAlbum={setAlbum} deleteFile={deleteFile} />
          </ImgPreview>
          <RightArrow name={'다음'} stepObj={stepObj} setStep={setPostStep} length={stepLength} />
        </Step>
        {/* Step3 : 태그 추가 & text & data submit */}
        <Step className="step3" show={step3}>
          <LeftArrow name={'이전'} stepObj={stepObj} setStep={setPostStep} />
          <Form id="postForm" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            <PostPreview>
              <Album imgList={album} type="create" />
              <div className="postText">
                <Profile />
                <Textarea {...register('text')} maxLength={2200} />
                {/* <div className='postOption'>
                  <p>게시물 설정</p>
                  <button type='button' show={option}>
                    <DownICon className='mdIcon' />
                  </button>
                  <button  type='button' show={option}>
                    <UpIcon className='mdIcon'/>
                  </button>
                </div>
                <div className='options' show={option}>
                </div> */}
                <BlueBtn type="submit" text="업로드" />
              </div>
            </PostPreview>
          </Form>
        </Step>
      </AddPostStep>
      {/* <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data"> */}
      {/* <label htmlFor="input">파일 선택</label> */}
      {/* <input id="input" type="file" multiple {...register('FileList')} onChange={selectFile}></input> */}
      {/* <button type="submit">submit</button> */}
      {/* </form> */}
    </>
  );
};

export default AddPost;
