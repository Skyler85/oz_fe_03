// TODO 네비게이션 바에 홈으로 이동하는 링크('/')와 포스트 목록으로 이동하는 링크('/posts')를 구현하세요

import Link from 'next/link'
import classes from '@/styles/Header.module.css'
import PostsList from '@/pages/posts'

const Header = () => {
  return (
    <nav className={classes.nav}>
      <Link className={classes.link} href='/'>홈</Link> &nbsp;&nbsp;
      <Link className={classes.link} href='/posts'>포스트목록</Link>
    </nav>
  )
}

export default Header