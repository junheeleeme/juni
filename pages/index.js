import axios from "axios"
import HeadInfo from "../components/HeadInfo"
import Link from "next/link"
import BlogPost from "../components/BlogPost"

export default function Home({posts}) {

  return (
    <>
      <HeadInfo title='Home' />
      <h2 className="home-title py-2 text-[1.5em] text-white text-center bg-[rgba(0,0,0,0.3)] rounded-md">
        안녕하세요.👋 이것저것 만들기 좋아하는 개발자입니다.
      </h2>

      <div className="home-intro flex flex-wrap justify-around items-center mt-5 mb-10">
        <ul className="list-disc my-4 md:my-6 pl-6 text-lg sm:text-xl tracking-wide">
          <li className="py-2 tracking-tighter">웹을 구현하고 더 나은 품질과 사용자 편의성을 추구합니다.</li>
          <li className="py-2 tracking-tighter">프론트엔드 뿐만 아니라 백엔드 분야에도 관심있습니다.</li>
          <li className="py-2 tracking-tighter">공부한 내용을 블로그에 기록하는 습관을 가지고 있습니다.</li>
        </ul>
        <div className="intro-image w-[240px] h-[240px] sm:w-[180px] sm:h-[180px] mx-3 my-3 overflow-hidden">
          <img src='/image/profile.png' width="100%" height='100%' className="rounded-full"/>
        </div>
      </div>

      <h3 className="text-xl font-bold py-2 mb-6">최근 포스트</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-4 py-4 px-4 sm:px-0">
      {
        posts &&
        posts.map((p, idx)=> <BlogPost key={p.title + idx} post={p}/>)
      }
        <Link href='https://juni-official.tistory.com/' passHref>
          <a target='_blank' className="more-btn flex sm:flex md:hidden justify-center items-center w-full h-full rounded-md border-2
          text-gray-400 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500 hover:bg-gray-300 dark:hover:bg-gray-500 hover:text-white dark:hover:text-white transition">
            <span className="relative top-[1px] leading-9 h-9 text-[1.1rem] sm:text-[1.2rem]">더보기</span>
          </a>
        </Link>

      </div>
      <div className="md:block more-btn-wrap sm:mt-6 sm:mb-4 ">
        <Link href='https://juni-official.tistory.com/' passHref>
          <a target='_blank' className="more-btn hidden sm:hidden md:block text-center
          border-gray-300 rounded-md border-2 border-gray-300 hover:border-gray-300 text-gray-400 hover:text-white dark:text-gray-300 hover:bg-gray-300 transition">
            <span className="relative top-[1px] leading-9 h-9 text-[1.1rem]">더보기</span>
          </a>
        </Link>
      </div>

    </>
  )
}

export const getStaticProps = async() => {
    try{
      const res = await axios({ url : `http://localhost:${process.env.PORT}/api/blog/posts`, method : 'POST' });
      if(res.status === 200){
        return{
          props : { posts : res.data },
          revalidate: 3600
        }
      }else{
        return{ props : { posts : null } }
      } 
    }catch(err){
      console.log(err);
      return{
        props : { posts : null }
      }
    }
    
    
}