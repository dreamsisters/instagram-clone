import type { Identifier, XYCoord } from 'dnd-core';
import React, { useEffect, useRef, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { Imagewrapper, DragImg, CloseIcon, DropLeft, DropRight } from './styled';
import { MdOutlineClear as Clear } from 'react-icons/md';

interface IProps {
  propsId: number;
  file: any; //file.name, url, date(key value)
  propsIndex: number;
  deleteFile: (e: any) => void;
  moveItem: (fileId: number, hoverIndex: number) => void;
  someDragging: boolean;
  setSomeDragging: React.Dispatch<React.SetStateAction<boolean>>;
}

interface DragItem {
  propsIndex: number;
  propsId: number;
  type: string;
}

const ImgItem = ({ propsId, file, propsIndex, deleteFile, moveItem, someDragging, setSomeDragging }: IProps) => {
  // console.log('index', index);
  // const ref = useRef<HTMLDivElement>(null);

  // const [{ handlerId }, drop] = useDrop<DragItem, void, { handlerId: Identifier | null }>({
  //   accept: 'ITEM',
  //   // canDrop: () => false,
  //   collect(monitor: any) {
  //     return { handlerId: monitor.getHandlerId() };
  //   },
  //   hover(file: DragItem, monitor) {
  //     if (!ref.current) {
  //       return;
  //     }

  //     const dragIndex = file.index;
  //     const hoverIndex = index;

  //     if (dragIndex === hoverIndex) {
  //       return;
  //     }

  //     const hoverBoundingRect = ref.current?.getBoundingClientRect();
  //     const hoverMiddleX = (hoverBoundingRect.left - hoverBoundingRect.right) / 2;

  //     const clientOffset = monitor.getClientOffset();
  //     const hoverClientX = (clientOffset as XYCoord).x - hoverBoundingRect.right;

  //     if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
  //       return;
  //     }

  //     if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
  //       return;
  //     }

  //     moveItem(id, dragIndex, hoverIndex);
  //     file.index = hoverIndex;
  //   },
  // });
  console.log(propsId, propsIndex);
  const [{ isDragging }, dragRef, previewRef] = useDrag(() => ({
    type: 'ITEM',
    item: { propsId, propsIndex }, //props로 받아온 id, index
    collect: (monitor) => ({
      isDragging: monitor.isDragging(), //현재 dragging 중인지 리턴해줌
    }),
    end: (item, monitor) => {
      const { propsId, propsIndex } = item;
      const didDrop = monitor.didDrop();
      if (!didDrop) {
        //drop 가능한 영역이 아닐 경우
        console.log('did drop');
        moveItem(propsId, propsIndex); //원래 위치로 이동
      }
    },
  }));

  const [, dropLeft] = useDrop(
    () => ({
      accept: 'ITEM',
      // canDrop: () => true,
      hover: (item: DragItem) => {
        // console.log(item);
        // console.log('hover Item', item.propsId, item.propsIndex);
        // console.log('props Item', propsId, propsIndex);
        if (item.propsId !== propsId) {
          moveItem(item.propsIndex, propsIndex);
        }
      },
    }),
    [moveItem],
  );

  const [, dropRight] = useDrop(
    () => ({
      accept: 'ITEM',
      // canDrop: () => true,
      hover(item: DragItem) {
        console.log('!== test', item.propsId, propsIndex + 1);

        if (item.propsId !== propsId) {
          item.propsIndex !== propsId + 1 && moveItem(item.propsId, propsId + 1);
        }
      },
    }),
    [moveItem],
  );

  // const [someDragging, setSomeDragging] = useState(false);

  useEffect(() => {
    isDragging ? setSomeDragging(true) : setSomeDragging(false);
  }, [isDragging, setSomeDragging]);

  // drag(drop(ref));
  return (
    <Imagewrapper ref={previewRef} style={{ opacity: isDragging ? '0.3' : '1' }}>
      <DragImg ref={dragRef} src={file.url} alt={file.name} />
      <CloseIcon onClick={deleteFile} data-key={file.date}>
        <Clear className="mdIcon" />
      </CloseIcon>
      <DropLeft ref={dropLeft} style={{ zIndex: someDragging ? 30 : 0 }} className={'drop'} />
      <DropRight ref={dropRight} style={{ zIndex: someDragging ? 30 : 0 }} className={'drop'} />
    </Imagewrapper>
  );
};

export default ImgItem;
