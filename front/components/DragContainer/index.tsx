import React, { FC, useCallback, useEffect, useState } from 'react';
import { DragBox } from './styled';
import ImgItem from '@components/ImgItem';

interface IProps {
  fileObj: FileList;
  albumList: Array<any>;
  deleteFile: (e: any) => void;
  setFile: React.Dispatch<any>;
}

export interface Item {
  id: number;
  index: number;
  type: string;
}

let files: Array<any> = [];
let dtFiles: Array<any> = []; //File 객체

const DragContainer = ({ fileObj, albumList, deleteFile, setFile }: IProps) => {
  const [fileList, setFileList] = useState(files);

  useEffect(() => {
    setFileList(albumList);
    files = [...albumList];
    dtFiles = Object.values(fileObj);
  }, [albumList]);

  const moveItem = useCallback((dragIndex: number, dragObj: any, hoverIndex: number) => {
    console.log('moving');
    //dt에 해당하는 dragObj
    let dtObj: File;
    dtFiles.map((file) => {
      if (file.lastModified == dragObj.date) {
        dtObj = file;
      }
    });

    //index
    const dtIindex = dtFiles.findIndex((file) => file.lastModified == dtObj.lastModified);
    const fileIndex = files.findIndex((item) => item.date == dragObj.date);

    console.log('drag =', dragIndex, 'to =', hoverIndex);
    // console.log('item.date == dragObj.date : index', fileIndex);
    dtFiles.splice(dtIindex, 1);
    dtFiles.splice(hoverIndex, 0, dtObj!); //옮길 index로 drag 중인 item을 입력
    setFile(dtFiles);
    console.log(dtFiles);

    //albumList
    // let newList = [...files]; //fileList spread한 새로운 배열 생성
    files.splice(fileIndex, 1); //drag 중인 item을 삭제하고
    files.splice(hoverIndex, 0, dragObj); //옮길 index로 drag 중인 item을 입력
    setFileList(files);
    console.log(files);
  }, []);

  const [someDragging, setSomeDragging] = useState(false);

  const renderItem = useCallback((file: any, i: number) => {
    return (
      <ImgItem
        propsId={i}
        key={file.date}
        file={file}
        propsIndex={i}
        deleteFile={deleteFile}
        moveItem={moveItem}
        someDragging={someDragging}
        setSomeDragging={setSomeDragging}
      />
    );
  }, []);

  return <DragBox>{files.map((file: any, i: number) => renderItem(file, i))}</DragBox>;
};

export default DragContainer;
