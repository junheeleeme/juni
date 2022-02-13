import { getPosts } from '../apollo/posts'

import HeadInfo from '../components/HeadInfo'
import SubTitle from "../components/SubTitle"
import PortfolioItems from "../components/PortfolioItems"
import { useState } from "react"

const Portfolio = ({posts}) => {
    
    const [_posts, setPost] = useState(()=> posts);
    
    return(
        <>
            <SubTitle txt={'Portfolio'} />
            <HeadInfo title='Portfolio' />
            <ul className="portfolio-wrap grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-4 md:gap-10 px-6 sm:px-0 md:px-0 py-6">
            {
                _posts.map((p, idx)=> 
                    <PortfolioItems key={p.node.title+idx} post={p}/>  
                )
            }
            </ul>
        </>
    )
}

export const getStaticProps = async() => {

    const posts = await getPosts();

    if(posts !== null){
        return{
            props : { posts : posts }
        }
    }else{
        return{
            notFound : true
        }
    }
}



export default Portfolio