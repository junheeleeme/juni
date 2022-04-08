import { useState, useEffect } from "react";

const Footer = () => {

    const [_date, setDate] = useState();
    useEffect(()=>{
        setDate(new Date().getFullYear());
    }, []);

    return(
        <footer className="footer absolute bottom-0 left-0 w-full h-14 flex justify-center items-center text-gray-400 text-sm">
            {_date}. juni-official All rights reserved
        </footer>
    )
}

export default Footer