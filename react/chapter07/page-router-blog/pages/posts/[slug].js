// TODO Header 컴포넌트를 포함하고 각 slug에 해당하는 포스트의 제목과 내용을 표시하는 컴포넌트를 구현하세요

import Header from '@/components/Header'
import Posts from '@/utils/posts'
import { useRouter } from 'next/router'
import Post from '@/components/Post'

const DetailPost = () => {
    const router = useRouter()
    const slug = router.query.slug

  return (
    <div>
        <Header />
        <Post slug={slug}/>
    </div>
  )
}


export default DetailPost