import React, { useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { Imagewrapper, DragImg, CloseIcon, DropLeft, DropRight } from './styled';
import { MdOutlineClear as Clear } from 'react-icons/md';

interface IProps {
  propsId: number; //index
  file: any; //file.name, url, date(key value)
  propsIndex: number;
  deleteFile: (e: any) => void;
  moveItem: (dragIndex: number, dragObj: object, hoverIndex: number) => void;
  someDragging: boolean;
  setSomeDragging: React.Dispatch<React.SetStateAction<boolean>>;
}

interface DragItem {
  propsIndex: number;
  propsId: number;
  dragObj: object;
}

const ImgItem = ({ propsId, file, propsIndex, deleteFile, moveItem, someDragging, setSomeDragging }: IProps) => {
  const dragObj = {
    name: file.name,
    url: file.url,
    date: file.date,
  };

  console.log('file index : ', propsIndex, file.name);

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

  //     const dragIndex = propsIndex;
  //     const hoverIndex = item.propsIndex;

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
  const [{ isDragging }, dragRef, previewRef] = useDrag(
    () => ({
      type: 'ITEM',
      item: { propsId, propsIndex, dragObj }, //props로 받아온 id, index
      collect: (monitor) => ({
        isDragging: monitor.isDragging(), //현재 dragging 중인지 리턴해줌
      }),
      end: (item, monitor) => {
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          // console.log(dragObj.name, item.propsIndex);
          //drop 가능한 영역이 아닐 경우
          console.log('did drop');
          moveItem(propsIndex, dragObj, propsIndex); //원래 위치로 이동
        }
      },
    }),
    [propsId, propsIndex],
  );

  const [, dropLeft] = useDrop(
    () => ({
      accept: 'ITEM',
      // canDrop: () => true,
      hover: (item: DragItem) => {
        // console.log(item.dragObj);
        // console.log('drag Item', item.propsId, item.propsIndex);
        // console.log('hover Item', propsId, propsIndex);

        if (item.propsId !== propsId) {
          moveItem(item.propsIndex, item.dragObj, propsIndex);
          console.log('drag index', item.propsIndex, 'left hover, to', propsIndex);
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
        // console.log('!== test', item.propsId, propsIndex + 1);

        if (item.propsId !== propsId) {
          item.propsIndex !== propsIndex + 1 && moveItem(item.propsIndex, item.dragObj, propsIndex + 1);
          console.log('drag index ', item.propsIndex, 'right hover, to ', propsIndex + 1);
        }
      },
    }),
    [moveItem],
  );

  useEffect(() => {
    isDragging ? setSomeDragging(true) : setSomeDragging(false);
  }, [isDragging, setSomeDragging]);
  return (
    <Imagewrapper ref={dragRef} style={{ opacity: isDragging ? '0.3' : '1' }}>
      <DragImg src={file.url} alt={file.name} />
      <CloseIcon onClick={deleteFile} data-key={file.date}>
        <Clear className="mdIcon" />
      </CloseIcon>
      <DropLeft ref={dropLeft} style={{ zIndex: someDragging ? 30 : 0 }} className={'drop'} />
      <DropRight ref={dropRight} style={{ zIndex: someDragging ? 30 : 0 }} className={'drop'} />
    </Imagewrapper>
  );
};

export default ImgItem;
