'use client'

import { useEffect } from "react";

export default function Content() {

    useEffect(()=>{
        document.title = "콘텐츠";
    }, [])

    return (
        <section>
            콘텐츠  
        </section>
    )
}
