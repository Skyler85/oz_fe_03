import Head from "next/head";
import Header from '@/components/Header';
// TODO Header 컴포넌트를 포함하고 홈페이지의 제목을 표시하세요

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>

        <h2>블로그에 오신것을 환영합니다.</h2>
      </main>
    </>
  );
}
