import axios from "axios"
import cheerio from 'cheerio'

export default async function handler(req, res) {

    if(req.method === 'POST'){
        try{
            const html = await axios.get("https://juni-official.tistory.com/");
            const $ = cheerio.load(html.data);
            const $post = $('.article-wrap');
            const postList = [];

            for(let i=1 ; i<4 ; i++){
                postList.push({
                title : $post.find(`.postArt:nth-child(${i}) > .post-link > .postSub > h3`).text().trim(),
                thumb : $post.find(`.postArt:nth-child(${i}) > .post-link > .thumbnail-wrap > img`).attr('data-src'),
                link : $post.find(`.postArt:nth-child(${i}) > a`).attr('href'),
                cate : $post.find(`.postArt:nth-child(${i}) > .post-link > .postSub .postCate`).text(),
                date : $post.find(`.postArt:nth-child(${i}) > .post-link > .postSub .postDate`).text(),
                })
            }
            res.status(200).send(postList);

        } catch(err){
            res.status(200).send(null);
            console.log(err);
        }
    }else{
        res.status(404).send({error : 'Not Found'});
    }
    
}