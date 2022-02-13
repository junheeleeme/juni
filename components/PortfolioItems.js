import Link from "next/link"

const PortfolioItems = ({post}) => {
    return(
        <article className="portfolio-item relative rounded-lg overflow-hidden sm:hover:scale-[1.02] duration-[300] ease-linear transition-[transform] shadow-md">
            <Link href={`/portfolio/${post.node.postId}`} scroll={false} passHref>
            <a className="">
                <img className="w-full" src={post.node.featuredImage.node.mediaItemUrl}
                    alt={post.node.featuredImage.node.altText === '' ? 'thumbnail_image' : post.node.featuredImage.node.altText}/>

                <div className="item-cover absolute top-0 left-0 w-full h-full ">
                    <p className="absolute font-bold bottom-0 left-0 w-full p-3 sm:p-5 text-2xl text-white">
                        {post.node.title}
                    </p>
                </div>
            </a>
            </Link>
        </article>  
    )
}

export default PortfolioItems