import { useRouter } from "next/router"
import { AnimatePresence, motion } from "framer-motion"
import Header from "../components/Header";
import dynamic from "next/dynamic"
import Footer from '../components/Footer'

const NoSsrVoxel = dynamic(import('../components/Voxel'), {
    ssr : false
})

const Layout = ({ children }) => {

    const router = useRouter();


    return(
        <div className="block min-h-[100vh] bg-slate-100 dark:bg-slate-800 transition-[background] duration-1000" > 
            <div className="wrap relative max-w-screen-md min-h-[100vh] mx-auto pb-14 dark:text-white">

            <Header/>
            <NoSsrVoxel/>
            <AnimatePresence exitBeforeEnter>  
                <motion.main key={router.route} transition={{ ease : "easeInOut", duration: 0.3 }}
                    initial={animate.initial} animate={animate.animate} exit={animate.exit} 
                    className='px-3 pt-0 sm:pt-1.5 pb-4 md:px-2 md:pb-2 overflow-hidden'>

                    {children}
                    
                </motion.main>
            </AnimatePresence>
            <Footer />
            </div>
        </div>
    )
}

const animate = {
    initial :{ //none use
        transform : `translateY(30px)`,
        opacity : 0,
    },
    animate : {
        transform : `translateY(0px)`,
        opacity: 1,
    },
    exit : {
        transform : `translateY(30px)`,
        opacity: 0,
    }
}

export default Layout