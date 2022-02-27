import Link from "next/link"


const BlogPost = ({post}) => {
    return(
        <article className="blog-article mx-0 overflow-hidden rounded-md sm:hover:scale-[1.05] sm:transition-[transform] sm:duration-300 sm: ease-in-out">
            <Link href={`https://juni-official.tistory.com${post.link}`} passHref>
                <a className="" target="_blank">

                    <img src={post.thumb} alt={post.title} className="h-[300px] sm:h-[200px] w-full md:h-[135px] rounded-md"/>
                    
                    <div className="relative h-18">
                        <h3 className="text-[1.15rem] md:text-[0.95rem] leading-6 pt-1.5 pb-0.5 pl-1 text-ellipsis whitespace-nowrap overflow-hidden">
                            {post.title}
                        </h3>
                        <span className="float-left px-1 py-0.5 text-[0.8rem]">{post.cate}</span>
                        <span className="float-right px-1 py-0.5 text-[0.8rem]">{post.date}</span>
                    </div>

                </a>
            </Link>
        </article>
    )
}

export default BlogPost