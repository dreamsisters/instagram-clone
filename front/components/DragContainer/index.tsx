import React, { FC, useCallback, useEffect, useState } from 'react';
import { DragBox } from './styled';
import ImgItem from '@components/ImgItem';

import update from 'immutability-helper';

interface IProps {
  albumList: any;
  deleteFile: (e: any) => void;
}

export interface Item {
  id: number;
  index: number;
  type: string;
}

const DragContainer = ({ albumList, deleteFile }: IProps) => {
  // console.log(albumList);
  const [fileList, setFileList] = useState(albumList);

  useEffect(() => {
    setFileList(albumList);
    // console.log(fileList);
  }, [albumList]);

  const moveImg = (dragIndex: number, hoverIndex: number) => {
    console.log('drag =', dragIndex, 'to =', hoverIndex);
    const index = fileList.indexOf(dragIndex); //기존 index
    console.log(index);
  };

  const moveItem = useCallback((dragIndex: number, hoverIndex: number) => {
    console.log('drag =', dragIndex, 'to =', hoverIndex);
    // const index = idArr.indexOf(dragIndex); //기존 index
    // console.log(index);
    // console.log(albumList);
    // let newList = [...fileList]; //fileList spread한 새로운 배열 생성
    // console.log('spread', newList);
    // newList.splice(index, 1); //기존 index의 item을 삭제하고
    // console.log('delete', newList);
    // newList.splice(hoverIndex, 0, fileId); //
    // console.log('final', newList);
    // setFileList(newList);
    // setFileList((prevItems: Item[]) =>
    //   update(prevItems, {
    //     $splice: [
    //       [dragIndex, 1],
    //       [hoverIndex, 0, prevItems[dragIndex] as Item],
    //     ],
    //   }),
    // );
    // console.log('기존 위치 :', dragIndex);
    // console.log('drop 위치 :', hoverIndex);
  }, []);

  // const renderItem = albumList.map((file: any, index: number) => {
  //   return (
  //     <ImgItem id={file.date} key={file.date} file={file} index={index} deleteFile={deleteFile} moveItem={moveItem} />
  //   );
  // });
  const [someDragging, setSomeDragging] = useState(false);

  const renderItem = useCallback((file: any, i: number) => {
    return (
      <ImgItem
        propsId={i}
        key={file.date}
        file={file}
        propsIndex={i}
        deleteFile={deleteFile}
        moveItem={moveImg}
        someDragging={someDragging}
        setSomeDragging={setSomeDragging}
      />
    );
  }, []);

  return <DragBox>{fileList.map((file: any, i: number) => renderItem(file, i))}</DragBox>;
};

export default DragContainer;
