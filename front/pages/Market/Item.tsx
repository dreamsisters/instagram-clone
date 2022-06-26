import type { Identifier, XYCoord } from 'dnd-core';
import { url } from 'inspector';
import React, { useCallback, useRef, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useForm } from 'react-hook-form';

import { ItemTypes } from './ItemTypes';

// let fileList;

export interface ItemProps {
  id: any;
  text: string;
  index: number;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

interface IFormValues {
  author: string;
  postId: string;
  FileList: FileList;
  Text: string;
  comment?: boolean;
}

export const Item = ({ id, text, index, moveItem }: ItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ handlerId }, drop] = useDrop<DragItem, void, { handlerId: Identifier | null }>({
    accept: ItemTypes.ITEM,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      //
      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  //isDragging : item drag 여부에 따라 true, false를 받음
  //drag : useRef 처럼 작동, drag될 부분(영역)에 선언
  const [{ isDragging }, drag] = useDrag({
    //어떤 type의 item을 드래깅 할지 선언
    type: ItemTypes.ITEM,
    //'ITEM'으로 type을 지정한 요소에 들어갈 정보
    //props로 받은 id와 index 전달
    item: { id, index },
    collect: (monitor: any) => ({
      //isDraging 변수가 현재 드래깅 중인지 리턴해줌
      isDragging: monitor.isDragging(),
      // end: 드래그가 끝났을 때 동작을 지정
    }),
    //[id, index, moveItem] : deps
  });

  const [url, setURL] = useState('');

  let fileList: Array<any> = [];
  let fileURL: Array<any> = [];

  const style = {
    border: '1px dashed gray',
    cursor: 'move',
    width: '200px',
    height: '100px',
    backgroundImage: 'url(' + url + ')',
  };

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: {
      author: 'author1',
      postId: '001',
      FileList: undefined,
      Text: '',
      comment: true,
    },
  });

  const { author, postId, FileList, Text, comment } = watch();

  const change = useCallback((e: any) => {
    let files = e.target.files;
    const fileArr = Object.values(files);
    fileArr.map((file: any) => {
      // fileList.push({
      //   name: file.name,
      //   url: URL.createObjectURL(file),
      //   date: file.lastModified,
      // });
      // setURL(fileList[0].url);
    });
    // console.log(url);
    console.log(files);
  }, []);

  const onSubmit = useCallback(() => {
    console.log(watch('FileList'));
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <div ref={ref} style={{ ...style, opacity }} data-handler-id={handlerId}>
        {text}
      </div>
      <input type="file" multiple {...register('FileList')} onChange={change}></input>
      <button type="submit">submit</button>
    </form>
  );
};
