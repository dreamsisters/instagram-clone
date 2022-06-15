import React, { FC, useEffect, useRef, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const ITEM_TYPE = 'SOME_COMPONENT';

interface IDrag {
  id: any;
  index: number;
  nemo: any;
  moveNemo: any;
  someDragging: any;
  setSomeDragging: any;
}

const Nemo = ({ id, index, nemo, moveNemo, someDragging, setSomeDragging }: IDrag) => {
  const [{ isDragging }, dragRef, previewRef] = useDrag(
    () => ({
      type: ITEM_TYPE,
      item: { id, index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { id: originId, index: originIndex } = item;
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          moveNemo(originId, originIndex);
        }
      },
    }),
    [id, index, moveNemo],
  );

  const [, dropLeft] = useDrop(
    () => ({
      accept: ITEM_TYPE,
      canDrop: () => false,
      hover(item, draggedId) {
        if (draggedId !== item) {
          // orgIndex !== index + 1 && moveNemo(draggedId, index + 1);
        }
      },
    }),
    [moveNemo],
  );
  const [, dropRight] = useDrop(
    () => ({
      accept: ITEM_TYPE,
      canDrop: () => false,
      hover(item, draggedId) {
        if (draggedId !== item) {
          // orgIndex !== index + 1 && moveNemo(draggedId, index + 1);
        }
      },
    }),
    [moveNemo],
  );

  useEffect(() => {
    isDragging ? setSomeDragging(true) : setSomeDragging(false);
  }, [isDragging, setSomeDragging]);

  return (
    <div ref={previewRef}>
      <div ref={dragRef}>{nemo.nemoTitle}</div>
      <div ref={dropLeft}></div>
      <div ref={dropRight}></div>
    </div>
  );
};
