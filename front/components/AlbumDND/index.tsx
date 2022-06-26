import React, { FC, useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DragWrapper } from './styled';
import Album from '@components/Album';
import DragContainer from '@components/DragContainer';
import { IoAddSharp as PlusIcon } from 'react-icons/io5';

interface IProps {
  setDT: any;
  fileObj: FileList;
  setFile: React.Dispatch<any>;
  setAlbum: React.Dispatch<React.SetStateAction<any[]>>;
  deleteFile: (e: any) => void;
}

const AlbumDND: FC<IProps> = ({ setDT, fileObj, setFile, setAlbum, deleteFile }) => {
  // console.log('file List', fileObj);

  //state 기본 값(형태) 선언
  let ImgList: Array<any> = [];
  const [albumList, setAlbumFile] = useState(ImgList);

  //props로 받아온 fileObj가 변경될 때마다 실행
  useEffect(() => {
    //map 메소드 사용하기 위해 형 변환
    const fileArr = Object.values(fileObj);
    fileArr.map((file) => {
      ImgList.push({
        name: file.name,
        url: URL.createObjectURL(file),
        date: file.lastModified,
      });
      // console.log(typeof url);
    });
    setAlbumFile(ImgList);
    setAlbum(ImgList); //step3 Album
    // window.URL.revokeObjectURL(ImgList);
  }, [fileObj]);

  return (
    <>
      <Album imgList={albumList} type="" />
      <DragWrapper>
        {/* 드래그 영역 */}
        <DndProvider backend={HTML5Backend}>
          <DragContainer
            setDT={setDT}
            setFile={setFile}
            fileObj={fileObj}
            albumList={albumList}
            deleteFile={deleteFile}
          />
        </DndProvider>
        <label htmlFor="fileInput">
          <PlusIcon className="plusIcon" />
        </label>
      </DragWrapper>
    </>
  );
};

export default AlbumDND;
