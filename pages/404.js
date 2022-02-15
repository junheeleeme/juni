import HeadInfo from "../components/HeadInfo"
import Link from "next/link"

const Notfound = () => {

    return(
        <>
            <HeadInfo title='404'></HeadInfo>
            <div className="404-wrap text-center">
                
                <h2 className="err-msg text-3xl font-bold">
                    404 - Page Not Found
                </h2>
                
                <div className="btn-wrap mt-14">
                    <Link href='/' passHref>
                        <a className="px-8 py-2 rounded-md border border-gray-500 hover:bg-gray-300 hover:border-gray-300 transition duration-500">
                            Go Home
                        </a>
                    </Link>
                </div>
            </div>
        </>
    )
}


export default Notfound