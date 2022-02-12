import { getPost } from "../../../apollo/post" 
import { getPath } from '../../../apollo/path'

import HeadInfo from "../../../components/HeadInfo"
import SubTitle from "../../../components/SubTitle"
import Link from "next/link"
import { useState } from "react"

const Index = ({post}) => {

    const [_post, setPost] = useState(()=> post);
    
    return(
        <>  
            <HeadInfo title={_post.title}/>
            <SubTitle txt={_post.title} />
            <div className="portfolio-content" dangerouslySetInnerHTML={{__html : _post.content}} />

            <h3 className="text-[1.6rem] font-bold  ">🔗 Link</h3>
            <div className="btn-wrap grid grid-cols-2 gap-3 mt-6 mb-4">
                <Link href={_post.tags.nodes[0].name} target="_blank">
                    <a target="_blank" className="visit-btn w-full py-2 sm:py-1.5 text-lg text-center text-white bg-blue-400 rounded-sm">
                        GitHub
                    </a>   
                </Link>
                <Link href={_post.tags.nodes[1].name}>
                    <a target="_blank" className="visit-btn w-full py-2 sm:py-1.5 text-lg text-center text-white bg-blue-400 rounded-sm">
                        Visit
                    </a>
                </Link>
            </div>
        </>
    )
}


export const getStaticPaths = async() => {

    const path = await getPath();

    if(path !== null ){
        const paths = path.map(p=>{
            return{
                params : { id : p.node.postId.toString() },
            }
        });
        return { paths, fallback : false }
    }else{
        return{
            notFound : true
        }
    }

}

export const getStaticProps = async({params}) => {
    const { id } = params;
    const post = await getPost(id);
    if(post !== null){ 
        return{
            props : { post }
        }
    }else{
        return{ notFound : true }
    }
}

export default Index