import HeadInfo from '../components/HeadInfo'
import SubTitle from "../components/SubTitle"
import { SiReact, SiJavascript, SiNodedotjs, SiHtml5, SiCss3, SiJquery, SiStyledcomponents,
    SiNextdotjs, SiMongodb, SiRedux, SiAmazonaws, SiMysql, SiSvelte, SiVuedotjs, SiFlutter } from 'react-icons/si'
import { BsFillEmojiSmileFill, BsFillEmojiLaughingFill, BsFillEmojiHeartEyesFill, BsCheckCircleFill } from 'react-icons/bs'
import IconWrap from "../components/IconWrap"

const Skill = () => {

    const skills = [
        '웹표준, 웹 접근성 및 SEO를 고려한 시멘틱 마크업 작업이 가능합니다.',
        'HTML/CSS로 주어진 디자인 레이아웃에 따라 웹을 디자인할 수 있습니다.',
        'CSS Media Query를 사용하여 반응형 웹을 만들 수 있습니다.',
        'Vanila JS와 제이쿼리를 사용하여 DOM 객체를 제어할 수 있습니다.',
        'AWS EC2와 Node.js를 사용해 클라이언트와 서버를 구성 할 수 있습니다.'
    ];

    return(
    <>
    <HeadInfo title="Skill" />
        <section className="skill-wrap">
            
            <SubTitle txt={'Skill'} />
            <div className="flex justify-center items-center py-8">
                <ul className="pl-6">
                {
                    skills.map((s, idx)=> 
                        <li key={s+idx} className="relative mb-5 sm:mb-4 pl-1.5 text-lg sm:text-xl leading-8 align-middle">
                            <BsCheckCircleFill color="#3eda16" className="absolute top-1 left-[-24px] inline-block align-middle text-xl mr-1 mb-1"/>
                            {s}
                        </li>
                    )
                }
                </ul>
            </div>
            <h3 className="flex justify-start items-center text-2xl font-bold py-4">
                <BsFillEmojiSmileFill className="my-2 mr-2 ml-0"/>
                기술 스택
            </h3>
            <div className="main-skill flex justify-evenly flex-wrap items-center pb-10">
                <IconWrap txt='JavaScript'>
                    <SiJavascript color="#f7e018"/>
                </IconWrap>
                <IconWrap txt='React'>
                    <SiReact color="#61dafb"/>
                </IconWrap>
                <IconWrap txt='Next.js'>
                    <SiNextdotjs color='#000'/>
                </IconWrap>
                <IconWrap txt='Styled Components'>
                    <SiStyledcomponents color="#fe9ae4"/>
                </IconWrap>
                <IconWrap txt='Node.js'>
                    <SiNodedotjs color="#8bc500"/>
                </IconWrap>
                <IconWrap txt='HTML'>
                    <SiHtml5 color="#ff5723"/>
                </IconWrap> 
                <IconWrap txt='CSS' >
                    <SiCss3 color="#007bc9"/>
                </IconWrap>
                <IconWrap txt='JQuery'>
                    <SiJquery color="#2e68a8" />
                </IconWrap>
            </div>
        

            
            <h3 className="flex justify-start items-center text-2xl font-bold py-4">
                <BsFillEmojiLaughingFill className="my-2 mr-2 ml-0"/>
                사용해본 기술 스택
            </h3>
            <div className="main-skill flex  justify-around  flex-wrap items-center pb-10">
                <IconWrap txt='AWS EC2'>
                    <SiAmazonaws color="#ff9a02" />
                </IconWrap>
                <IconWrap txt='Redux'>
                    <SiRedux color="#764abc"/>
                </IconWrap>
                <IconWrap txt='MongoDB'>
                    <SiMongodb color="#13aa52"/>
                </IconWrap>
                <IconWrap txt='MySQL'>
                    <SiMysql color="#01618a"/>
                </IconWrap>
            </div>

            <h3 className="flex justify-start items-center text-2xl font-bold py-4">
                <BsFillEmojiHeartEyesFill className="my-2 mr-2 ml-0"/>
                관심있는 기술 스택
            </h3>

            <div className="main-skill flex justify-around flex-wrap items-center pb-14">
                <IconWrap txt='Svelte'>
                    <SiSvelte color="#ff3b00" />
                </IconWrap>
                <IconWrap txt='Vue.js'>
                    <SiVuedotjs color="#41b883"/>
                </IconWrap>
                <IconWrap txt='Flutter'>
                    <SiFlutter color="#02c7fa"/>
                </IconWrap>
            </div>
        </section>
    </>
    )
}

export default Skill