import HeadInfo from "../components/HeadInfo";
import { useRef as useRef, useState } from "react"
import Link from "next/link";
import SubTitle from "../components/SubTitle"
import CopyAlert from "../components/CopyAlert"
import CopyAlert_re from "../components/CopyAlert_re";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineLink, AiFillGithub } from 'react-icons/ai'
import { MdContentCopy } from 'react-icons/md'
import { BsFillFilePersonFill } from 'react-icons/bs'
import { IoIosMail } from 'react-icons/io'
import { GiSmartphone } from 'react-icons/gi'
import { HiOutlineHome } from 'react-icons/hi'

const Contact = () => {

    const [modal1, setModal1] = useState(null);
    const [modal2, setModal2] = useState(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);


    const copyEmail = () => {
        emailRef.current.select();
        document.execCommand('copy');
        openModal1();
    }

    const copyPhone = () => {
        phoneRef.current.select();
        document.execCommand('copy');
        openModal2();
    }

    const openModal1 = () => { 
        if(modal1 !== 'copy-modal'){
            setModal1('copy-modal'); 
            setTimeout(()=>{ setModal1(null); }, 1000)
        }
    }
    const openModal2 = () => { 
        if(modal2 !== 'copy-modal'){
            setModal2('copy-modal'); 
            setTimeout(()=>{ setModal2(null); }, 1000)
        }
    }

    return(
        <> 
            <HeadInfo title='Contact'/>
            <SubTitle txt={'Contact'} />
            <div className="contact-wrap pt-28">
                <h3 className="text-5xl font-bold">
                    방문해 주셔서 감사합니다.
                </h3>
                <ul className="mt-10">
                    <li className="py-0.5 text-lg">
                        <BsFillFilePersonFill className="inline-block text-2xl mr-1.5"/>
                        이준희(Lee JunHee)
                    </li>
                    <li className="py-0.5 text-lg">
                        <IoIosMail className="inline-block text-2xl mr-1.5"/>
                        macjjuni@gmail.com
                        <button onClick={copyEmail} className="inline-block text-xl ml-1.5">
                            <MdContentCopy className="inline-block m-0"/>
                        </button>
                    </li>
                    <li className="py-0.5 text-lg">
                        <GiSmartphone className="inline-block text-2xl mr-1.5"/>
                        +82) 010-5183-1652
                        <button onClick={copyPhone} className="inlone-block text-xl ml-1.5">
                            <MdContentCopy className="inline-block m-0"/>
                        </button>
                    </li>
                    <li className="py-0.5 text-lg align-middle">
                        <HiOutlineHome className="inline-block text-2xl mr-1.5"/>
                        Tistory Blog 
                        <Link href='https://juni-official.tistory.com/' target='_blank' passHref>
                            <a className="inlone-block text-2xl ml-1">
                                <AiOutlineLink className="inline-block m-0"/>
                            </a>
                        </Link>
                    </li>
                    <li className="py-0.5 text-lg align-middle">
                        <AiFillGithub className="inline-block text-2xl mr-1.5"/>
                        GitHub 
                        <Link href='https://github.com/junheeleeme' target='_blank' >
                            <a className="inlone-block text-2xl ml-1">
                                <AiOutlineLink className="inline-block m-0"/>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="absolute left-[300%] overflow-hidden w-1 h-1">
                <input type="text" ref={phoneRef} defaultValue="010-5183-1652" readOnly/>
                <input type="text" ref={emailRef} defaultValue="macjjuni@gmail.com" readOnly/>
            </div>
            <AnimatePresence>
                {modal1 && (
                    <motion.div layoutId='copy-modal' initial={ani.init} animate={ani.ani} exit={ ani.exit } transition={{ ease : "easeInOut", duration: 0.3 }}
                    className='block fixed bottom-[0] left-[0]] w-full text-center transition-[transform] z-[7777]'>
                        <CopyAlert/>
                    </motion.div>
                    )
                }
            </AnimatePresence>
            <AnimatePresence>
                {modal2 && (
                    <motion.div layoutId='copy-modal' initial={ani.init} animate={ani.ani} exit={ ani.exit } transition={{ ease : "easeInOut", duration: 0.3 }}
                    className='block fixed w-full text-center transition-[transform] z-[7777]'>
                        <CopyAlert_re/>
                    </motion.div>
                    )
                }
            </AnimatePresence>
        </>
    )
}


const ani = {
    init : {
        bottom: '-100px', left: '0',
        opacity: 0,
    },
    ani : {
        bottom: '20px', left: '0',
        opacity: 1,
    },
    exit : {
        bottom: '-100px', left: '0',
        opacity: 0,
    }
}


export default Contact