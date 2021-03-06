import Link from "next/link"
import { useEffect, useLayoutEffect } from "react"

const ModalNav = ({menu, pathname, closeModal}) => {

    useLayoutEffect(()=>{ //모달 외 클릭 체크 
        document.addEventListener('mousedown', clickCheck);
        window.addEventListener('resize', closeModal);
        return () => {
            document.removeEventListener("mousedown", clickCheck);
            window.removeEventListener("resize", closeModal);
        };
    }, []);

    const clickCheck = (e) =>{
        const chk_class = e.target.classList.contains('modal');
        if(chk_class === false) closeModal();
    }

    return(
    <>
        <ul className="modal text-xl bg-white dark:bg-blue-900 ">
            {
                menu.map((m, idx)=>
                <li key={m.title + idx } className="modal block m-0 w-full text-center hover:bg-slate-200 dark:hover:bg-[rgba(0,0,0,0.22)]">
                    <Link href={m.path} passHref>
                        <a className={`modal nav-item relative block py-3 text-black dark:text-white ${m.path === pathname ? 'active' : ''}`}>
                            {m.title}
                        </a>
                    </Link>
                </li>
                )
            }
        </ul>
    </>
    )
}

export default ModalNav