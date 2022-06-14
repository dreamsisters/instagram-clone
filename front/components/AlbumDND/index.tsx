import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
// import { DndProvider, useDrag, useDrop } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
import { DragWrapper, DragBox, DragImg, Imagewrapper, CloseIcon } from './styled';
import Album from '@components/Album';
import { IoAddSharp as PlusIcon } from 'react-icons/io5';
import { MdOutlineClear as Clear } from 'react-icons/md';

interface IProps {
  fileObj: FileList;
  selectFile: (e: any) => void;
  deleteFile: (e: any) => void;
}
const AlbumDND: FC<IProps> = ({ fileObj, selectFile, deleteFile }) => {
  // console.log('file List', fileObj);

  //최종 name, url 값이 들어갈 state
  let ImgList: Array<any> = [];
  const [albumList, setAlbumFile] = useState(ImgList);

  //최초 렌더링
  useEffect(() => {
    const fileArr = Object.values(fileObj);
    //props로 받은 file data에 map 사용하기 위해 형 변환
    fileArr.map((file) => {
      ImgList.push({
        key: file.name,
        name: file.name,
        url: URL.createObjectURL(file),
      });
      // console.log(ImgList);
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
        {/* <DndProvider backend={HTML5Backend}> */}
        <DragBox>{Image}</DragBox>
        {/* </DndProvider> */}
        <input onChange={selectFile} id="addFile" type="file" multiple />
        <label htmlFor="addFile">
          <PlusIcon className="plusIcon" />
        </label>
      </DragWrapper>
    </>
  );
};

export default AlbumDND;
