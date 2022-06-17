import React, { FC, useCallback, useEffect, useRef, useState, useMemo } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DragWrapper, DragBox, DragImg, Imagewrapper, CloseIcon } from './styled';
import Album from '@components/Album';
import DragContainer from '@components/DragContainer';
import { IoAddSharp as PlusIcon } from 'react-icons/io5';
import { MdOutlineClear as Clear } from 'react-icons/md';
import { isIdentifier } from 'typescript';

interface IProps {
  fileObj: FileList;
  setFile: React.Dispatch<any>;
  selectFile: (e: any) => void;
  deleteFile: (e: any) => void;
}

const AlbumDND: FC<IProps> = ({ fileObj, setFile, selectFile, deleteFile }) => {
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
    // window.URL.revokeObjectURL(ImgList);
  }, [fileObj]);

  const Image = albumList.map((image) => {
    return (
      //실제 drag 되는 대상
      <Imagewrapper key={image.name}>
        <DragImg src={image.url} alt={image.name} />
        <CloseIcon onClick={deleteFile} data-key={image.name}>
          <Clear className="mdIcon" />
        </CloseIcon>
      </Imagewrapper>
    );
  });

  return (
    <>
      <Album imgList={albumList} />
      <DragWrapper>
        {/* 드래그 영역 */}
        <DndProvider backend={HTML5Backend}>
          <DragContainer setFile={setFile} fileObj={fileObj} albumList={albumList} deleteFile={deleteFile} />
        </DndProvider>
        <input onChange={selectFile} id="addFile" type="file" multiple />
        <label htmlFor="addFile">
          <PlusIcon className="plusIcon" />
        </label>
      </DragWrapper>
    </>
  );
};

export default AlbumDND;
