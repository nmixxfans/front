'use client'

import { useRef, useState } from "react";
import ContentEditable from "react-contenteditable";

export default function Editor() {
    const [state, setState] = useState({ html: "", tagName: "div" });
    const ref = useRef<HTMLDivElement>(null);

    return(
        <>
            <ContentEditable
                innerRef={ref}
                html={state.html}
                disabled={false}
                onChange={(e) => setState((prev) => ({ ...prev, html: e.target.value }))}
            />
        </>
    )
}