// TODO 포스트 제목과 내용을 표시하는 기능을 구현하세요
import Posts from '@/utils/posts';
import classes from '@/styles/Post.module.css'


const Post = ({ slug }) => {
    const post = Posts().find(post => slug === post.id);
    return (
        <>            
            <div className={classes.box}>
                <h1 className={classes.title}>{post.title}</h1>
                <hr />
                <p className={classes.body}> {post.body}</p>
            </div>
        </>
    );
};

export default Post;
