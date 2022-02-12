import { useState, useEffect } from "react";

const Footer = () => {

    const [_date, setDate] = useState();
    useEffect(()=>{
        setDate(new Date().getFullYear());
    }, []);

    return(
        <footer className="footer absolute bottom-0 left-0 w-full py-1.5">
            <div className="footer-wrap text-sm text-center text-gray-400">{_date}. juni-official All rights reserved</div>
        </footer>
    )
}

export default Footer