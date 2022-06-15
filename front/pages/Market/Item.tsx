import type { Identifier, XYCoord } from 'dnd-core';
import type { FC } from 'react';
import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { ItemTypes } from './ItemTypes';

const style = {
  border: '1px dashed gray',
  cursor: 'move',
};

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

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <div ref={ref} style={{ ...style, opacity }} data-handler-id={handlerId}>
      {text}
    </div>
  );
};
