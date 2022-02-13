import { useRouter } from "next/router"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import ModalNav from "./ModalNav"
import { FiSun, FiMoon } from 'react-icons/fi'

const Header = () => {

    const menu = [
        { title : 'Home', path : '/' },
        { title : 'Skill', path : '/skill' },
        { title : 'Portfolio', path : '/portfolio' },
        { title : 'Contact', path : '/contact' },
    ];

    const { events, pathname } = useRouter();
    const [modal, setModal] = useState(null);    

    useEffect(()=> {
        //페이지 이동 체크
        events.on('routeChangeStart', ()=> {
            setModal(null);
        });
    }, []);

    //토글 모달
    const toggleModal = (e) => {
        if(modal === null){ setModal('menu-modal'); }
        else{ setModal(null); }
    }
    //모달 닫기
    const closeModal = () => { setModal(null); }
    //Dark Mode
    const toggleTheme = () => {
        if(localStorage.getItem('theme')==='light'){
            localStorage.theme = 'dark';
            document.documentElement.classList.add('dark')
        }else{
            localStorage.theme = 'light';
            document.documentElement.classList.remove('dark')
        }        
    }

    return(
    <>
        <header className="header fixed top-0 left-0 w-full h-16 dark:text-white backdrop-blur-sm z-[100] z-[9999]">
            <div className="header-wrap max-w-screen-md h-full mx-auto px-3 flex justify-between items-center">

                {/* 로고 */}
                <h1 className="header-logo px-1 hover:rotate-[7deg] transition-[transform] duration-300 ease-in-out">
                    <Link  href='/' scroll={true} passHref>
                        <a className="font-[Bazzi] text-4xl">
                            &#60;꾸&#47;&#62;
                        </a>
                    </Link>
                </h1>

                {/* 헤더 메뉴 */}
                <nav className="hidden sm:flex justify-center items-center m-0">
                    <ul className="nav flex justify-center items-center text-xl">
                        {
                            menu.map((m, idx)=>
                            <li key={m.title + idx }>
                                <Link href={m.path} passHref>
                                    <a className={`nav-item relative py-1 px-0.5 mx-4 ${m.path === pathname ? 'active' : ''}`}>
                                        {m.title}
                                    </a>
                                </Link>
                            </li>
                            )
                        }
                    </ul>
                    <button onClick={toggleTheme} className="flex justify-center items-center w-[41px] h-[41px] ml-3 text-white  text-2xl bg-lime-300 dark:bg-purple-700 rounded-sm shadow-sm transition duration-500 ease-in-out">
                            <FiSun className="i dark:hidden m-0"/>
                            <FiMoon className=" hidden dark:block"/>
                    </button>
                </nav>

                <div className="mobile-btn-wrap block sm:hidden flex justify-center items-center m-0">

                    <button onClick={toggleTheme} className="flex justify-center items-center w-[41px] h-[41px] text-white  text-2xl bg-lime-300 dark:bg-purple-700 rounded-sm shadow-sm transition duration-500 ease-in-out">
                        <FiSun className="i dark:hidden m-0"/>
                        <FiMoon className=" hidden dark:block"/>
                    </button>
                    
                    <button onClick={toggleModal} className={`modal block relative w-[41px] h-[41px] p-2 mx-1.5 rounded-sm z-[9999] transition duration-500 ease-in-out ${modal && 'bg-[rgba(0,0,0,0.5)] dark:bg-[rgba(255,255,255,0.44)]'}`}>
                        <span className={`modal menu-bar1 absolute top-[3px] left-[3px] block w-[16px] h-[16px] rounded-[1px] transition duration-300 ease-in-out ${!modal ? 'bg-black dark:bg-white' : 'bg-white dark:bg-black'}`}/>
                        <span className={`modal menu-bar2 absolute top-[3px] right-[3px] block w-[16px] h-[16px] rounded-[1px] transition duration-300 ease-in-out ${!modal ? 'bg-black dark:bg-white' : 'bg-white dark:bg-black'}`}/>
                        <span className={`modal menu-bar3 absolute bottom-[3px] right-[3px] block w-[16px] h-[16px] rounded-[1px] transition duration-300 ease-in-out ${!modal ? 'bg-black dark:bg-white' : 'bg-white dark:bg-black'}`}/>
                        <span className={`modal menu-bar4 absolute bottom-[3px] left-[3px] block w-[16px] h-[16px] rounded-[1px] transition duration-300 ease-in-out ${!modal ? 'bg-black dark:bg-white' : 'bg-white dark:bg-black'}`}/>
                    </button>
                    
                </div>

            </div>

        </header>
        <AnimatePresence exitBeforeEnter={true}>
            {modal && (
                <motion.nav layoutId='menu-modal' initial={ani.init} animate={ani.ani} exit={ ani.exit } transition={{ ease : "easeInOut", duration: 0.44 }}
                className='mobile-menu block fixed w-[220px] rounded-md overflow-hidden z-[8888]'>
                    <ModalNav menu={menu} pathname={pathname} toggleModal={toggleModal} closeModal={closeModal}/>
                </motion.nav>
                )
            }
        </AnimatePresence>
    </>
    )

}

const ani = {
    init : {
        top : '-300px', right: '500px',
        transform: 'rotate(-720deg)',
        opacity: 0,
    },
    ani : {
        top : '5rem', right: '16px',
        transform: 'rotate(0deg)',
        opacity: 1,
    },
    exit : {
        top : '500px', right: '500px',
        transform: 'rotate(720deg)',
        opacity: 0,
    }
}

export default Header