import Link from "next/link"
import LazyImage from "./LazyImage"

const PortfolioItems = ({post}) => {
    return(
        <article className="portfolio-item relative w-full rounded-lg overflow-hidden sm:hover:scale-[1.02] duration-[300] ease-linear transition-[transform] shadow-md">
            <Link href={`/portfolio/${post.node.postId}`} scroll={false} passHref>
            <a className="">
                <LazyImage src={post.node.featuredImage.node.mediaItemUrl}
                    alt={post.node.featuredImage.node.altText === '' ? 'thumbnail_image' : post.node.featuredImage.node.altText}/>

                <div className="item-cover absolute top-0 left-0 w-full h-full ">
                    <h3 className="absolute font-bold bottom-0 left-0 w-full pl-5 pb-5 text-2xl text-white">
                        {post.node.title}
                    </h3>
                </div>
            </a>
            </Link>
        </article>  
    )
}

export default PortfolioItems