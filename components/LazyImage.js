import { useEffect, useRef } from "react";

const LazyImage = ({src, alt, width, height}) => {

    const imgRef = useRef(null);

    useEffect(()=> {
        const observer = new IntersectionObserver(obsHandler, { threshold : 0.5 });
        observer.observe(imgRef.current);
        return ()=> {
            observer.disconnect();
        }
    }, [])
    
    const obsHandler = ((entries, observer) => {
        const target = entries[0];
        if(target.isIntersecting){ 
            target.target.setAttribute('src', target.target.dataset.src); //LazyLoad
            target.target.onload = () => {
                // target.target.style.opacity = '1'; // 기본
                target.target.classList.remove('opacity-0'); //TailWind CSS를 사용하는 경우
                observer.unobserve(target.target);
            }
        }
    })

    return(
        <img src={'/'} ref={imgRef} data-src={src}
                alt={alt}
                className="thumb-img w-full opacity-0 inline-block transition-[opacity] duration-1000 ease-in-out" 
        width={width} height={height} />
    )
}

export default LazyImage