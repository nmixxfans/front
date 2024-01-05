'use client'

import { CSSProperties, useEffect, useRef, useState } from 'react';
import content from '../../css/content.module.css';

type PropsType = {
    list: string[],
}

export default function IframeItem(props: PropsType) {

    const ref = useRef<HTMLDivElement>(null);
    const div = ref.current;
    const refId = useRef<number | null>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [previousX, setPreviousX] = useState<number>(0);
    const [isOver, setIsOver] = useState<boolean>(false);

    const tickEvent = useRef<{ start: Date; tickCnt: number }>({ start: new Date(), tickCnt: 0 });

    const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
        setIsDragging(true);
        setPreviousX(e.clientX);
        tickEvent.current = { start: new Date(), tickCnt: 0 };
    };

    const handleMouseUp = (e: React.MouseEvent<HTMLElement>) => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {

        if (!isDragging || !div || refId.current) {
            return;
        }

        refId.current = requestAnimationFrame(() => {
            const delta = previousX - e.clientX;
            div.scrollLeft += delta;
            setPreviousX(e.clientX);

            refId.current = null;
            tickEvent.current.tickCnt += 1;
        });
    };

    const mouseMoveStyle : CSSProperties = {
        pointerEvents:"none",
    }

    return (
        <>
            <div className={content.itemList} ref={ref} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
                {
                    props.list.map((value, index) => {
                        return (
                            <iframe key={index} className={content.yt} style={isDragging? mouseMoveStyle : {pointerEvents:"auto"} } src={`https://www.youtube.com/embed/${value}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        )
                    })
                }
            </div>
        </>
    )
}