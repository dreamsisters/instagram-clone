import update from 'immutability-helper';
import type { FC } from 'react';
import React, { useCallback, useState } from 'react';

import { Item } from './Item';

export interface Item {
  id: number;
  text: string;
}

export interface ContainerState {
  items: Item[];
}

export const Container: FC = () => {
  const [items, setItems] = useState([
    //Todo : props로 전달받은 image를 state로 선언
    { id: 1, text: 'image 1' },
    { id: 2, text: 'image 2' },
    { id: 3, text: 'image 3' },
    { id: 4, text: 'image 4' },
  ]);

  //드래그 한 item의 index를 hoverIndex 위치로 바꾸는 함수(state 변경)
  const moveItem = useCallback((dragIndex: number, hoverIndex: number) => {
    setItems((prevItems: Item[]) =>
      //배열을 직접 변경하는 게 아님
      update(prevItems, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevItems[dragIndex] as Item],
        ],
      }),
    );
    //dragIndex: 선택한 item의 index
    //hoverIndex: item의 바뀐 index
    //변경된 itemList 순서를 setState로 변경해야 함
    console.log(dragIndex, hoverIndex);
  }, []);

  //인자로 받은 item & index를 Item 컴포넌트의 props로 해서 render
  const renderItem = useCallback((item: { id: number; text: string }, index: number) => {
    return <Item key={item.id} index={index} id={item.id} text={item.text} moveItem={moveItem} />;
  }, []);

  //items 배열의 각 item을 renderItem의 인자로 전달
  return (
    <>
      <div>{items.map((item, i) => renderItem(item, i))}</div>
    </>
  );
};
