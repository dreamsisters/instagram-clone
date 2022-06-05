import React from 'react';
import { Item, PostPreview, PostFooter } from './styles';

interface IProps {}

const PostItem = () => {
  return (
    <Item>
      <PostPreview />
      <PostFooter />
    </Item>
  );
};

export default PostItem;
