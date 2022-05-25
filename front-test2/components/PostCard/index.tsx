import React, { FC, useCallback, useState } from 'react';
import { Card, Icon, UserSection, ImageSection, ContentSection, SeeMoreContent, CommentForm, Button } from './styles';
import Image from 'next/image';
import { IUser } from '@reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '@components/Navigation';

interface IPost {
  post: {
    id: number;
    User: { id: number; nickname: string };
    content: string;
    Images: { src: string }[];
    Comments: { User: { nickname: string }; content: string }[];
    createdAt?: {};
  };
}

interface IFormValues {
  user: { nickname: string };
  content: string;
}

const PostCard: FC<IPost> = ({ post }) => {
  const dispatch = useDispatch();
  const { me } = useSelector((state: IState) => state.user);
  const id = me?.id;

  const [showSeeMore, setShowSeeMore] = useState(false);
  const [comment, setComment] = useState('');
  const onClickToggle = useCallback(() => {
    setShowSeeMore((prev) => !prev);
  }, []);

  const onChangeComment = useCallback(
    (e: any) => {
      setComment(e.target.value);
    },
    [comment]
  );

  return (
    <Card>
      <UserSection className={'user-profile'}>
        <div className={'left'}>
          <div className={'user-avartar'}></div>
          <span className={'user-nickname'}>{post.User.nickname}</span>
        </div>
        <div className={'right more-settings-button'}>{id && post.User.id === id ? '편집하기' : '설정'}</div>
      </UserSection>
      <ImageSection>
        {post?.Images.map((v, idx) => (
          <img key={idx} src={v.src} height={'470'} width={'470'} />
        ))}
        {/*<img src={post?.Images[0].src} height="470" width="470" />*/}
      </ImageSection>
      <ContentSection>
        <div className={'buttons'}>
          <div className={'col'}>
            <Icon>좋아요</Icon>
            <Icon>댓글</Icon>
            <Icon>디엠</Icon>
          </div>
          <div className={'col carousal'}>.....</div>
          <div className={'col last-col'}>
            <Icon>저장</Icon>
          </div>
        </div>
        <div className={'likes'}>
          좋아요 <span className={'counts'}>10</span>개
        </div>
        <div className={'user-nickname'}>
          아무개
          {!showSeeMore && (
            <div className={'see-more'} onClick={onClickToggle}>
              <span>...&nbsp;</span>더 보기
            </div>
          )}
        </div>
        {/* 토글 */}
        {showSeeMore && (
          <SeeMoreContent>
            <p>
              멀리 떠난 여행지에서 맛있는 음식과 멋진 풍경을 즐기며, 이 계절을 온전히 느껴보세요.
              <span className={'see-more'} onClick={onClickToggle}>
                <span>...&nbsp;</span>접기
              </span>
            </p>
          </SeeMoreContent>
        )}
        <span className={'comments'}>
          댓글 <span className={'counts'}>2</span>개 모두 보기
        </span>
        <CommentForm>
          <input type={'text'} placeholder={'댓글 달기...'} value={comment} onChange={onChangeComment} />
          <Button type={'submit'} disabled={!comment}>
            게시
          </Button>
        </CommentForm>
      </ContentSection>
    </Card>
  );
};

export default PostCard;
