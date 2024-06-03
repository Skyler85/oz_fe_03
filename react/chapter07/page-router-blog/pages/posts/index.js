// TODO Header 컴포넌트를 포함하고 포스트 목록을 나열하는데 포스트의 제목과 내용을 나열하고 자세히 보기 링크를 구현하세요

import Header from '@/components/Header';
import Posts from '@/utils/posts';
import classes from '@/styles/Home.module.css';
import Link from 'next/link';

const PostsList = () => {
    const posts = Posts();

    return (
        <div>
            <Header />
            {posts.map((post) => {
                return (
                    <div className={classes.box}>
                        <Link href={`/posts/${post.id}`} className={classes.title}>{post.title}</Link>
                        <p className={classes.body}>{post.body}</p>
                    </div>
                );
            }, [])}
        </div>
    );
};

export default PostsList;
