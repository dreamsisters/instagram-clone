import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navigation, { IState } from '@components/Navigation';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { redirect } from 'next/dist/server/api-utils';
import { Base, Section } from '@pages/styles';
import { useSelector } from 'react-redux';
import PostCard from '@components/PostCard';

const Home = () => {
  const { isLoggedIn } = useSelector((state: IState) => state.user);
  const { mainPosts } = useSelector((state: IState) => state.post);
  return (
    <>
      <Head>
        <title>Instagram</title>
      </Head>
      <Base>
        {/* 스토리 영역 */}
        <Section className={'stories'}></Section>
        {/* 포스트 영역 */}
        <Section className={'main-posts'}>
          {mainPosts.map((post, idx) => (
            <PostCard key={post.id} post={post} />
          ))}
        </Section>
      </Base>
    </>
  );
};

export default Home;
