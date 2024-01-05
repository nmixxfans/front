'use client'

import { CSSProperties, useEffect, useRef, useState } from 'react';
import content from '../../css/content.module.css';

// 가로 스크롤 마우스 휠에 따라 움직이기
function useHorizontalScroll() {
    const elRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        
        const el = elRef.current;
        if (el) {
            const onWheel = (e:WheelEvent) => {
                if (e.deltaY == 0) return;
                e.preventDefault();
                el.scrollTo({
                    left: el.scrollLeft + (e.deltaY * 12),
                    behavior:'smooth'
                });
            };
            el.addEventListener("wheel", onWheel);
            return () => el.removeEventListener("wheel", onWheel);
        }
    }, []);
    return elRef;
}

type PropsType = {
    list: string[],
}

export default function IframeItem(props: PropsType) {

    const ref = useHorizontalScroll();
    
    
    // const ref2 = useRef<HTMLImageElement>(null);
    // const div = ref.current;
    // const div2 = ref2.current;
    // const refId = useRef<number | null>(null);
    // const [isDragging, setIsDragging] = useState<boolean>(false);
    // const [previousX, setPreviousX] = useState<number>(0);

    // 마우스로 움직이기
    // const tickEvent = useRef<{ start: Date; tickCnt: number }>({ start: new Date(), tickCnt: 0 });

    // const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    //     if(div2){
    //         console.log(div2)
    //         return;
    //     }else{
    //         setIsDragging(true);
    //         setPreviousX(e.clientX);
    //         tickEvent.current = { start: new Date(), tickCnt: 0 };
    //     }
        
    // };

    // const handleMouseUp = (e: React.MouseEvent<HTMLElement>) => {
    //     setIsDragging(false);
    // };

    // const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {

    //     if (!isDragging || !div || refId.current) {
    //         return;
    //     }

    //     refId.current = requestAnimationFrame(() => {
    //         const delta = previousX - e.clientX;
    //         div.scrollLeft += delta * 3;
    //         setPreviousX(e.clientX);

    //         refId.current = null;
    //         tickEvent.current.tickCnt += 1;
    //     });
    // };

    // const mouseMoveStyle: CSSProperties = {
    //     pointerEvents: "none",
    // }

    return (
        <>
            <div className={content.itemList} ref={ref}>
                {
                    props.list.map((value, index) => {
                        return (
                            <div className={content.ytWrapper} key={index} >
                                <img src={typeof value === "string" ? `https://i.ytimg.com/vi/${value}/sddefault.jpg` : value.src} className={content.yt} />
                                <div className={content.ytPlayBox} >
                                    <a className={content.ytLink} target='_blank' href={typeof value === "string" ? `https://www.youtube.com/watch?v=${value}` : `https://tv.naver.com/v/${value.href}`}>
                                        <img src='/play.png' className={content.playBtn} />
                                    </a>
                                </div>
                            </div>
                            // <iframe key={index} className={content.yt} style={isDragging ? mouseMoveStyle : { pointerEvents: "auto" }} src={value.indexOf("http") === -1 ? `https://www.youtube.com/embed/${value}` : `https://tv.naver.com/embed/${value.slice(-8)}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        )
                    })
                }
            </div>
        </>
    )
}