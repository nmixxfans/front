import bw from "../../css/boardWrite.module.css";

export default function BoardWrite() {
    return (
        <section className={bw.section}>
            <div className={bw.container}>
                <div className={bw.informationBox}>
                    <div className={bw.horseHeadBox}>
                        <input type="radio" name="horseHead" id="n" />
                        <label htmlFor="n">일반</label>
                    </div>
                    <div className={bw.titleBox}>

                    </div>
                </div>
                <div className={bw.editorBox}>
                    <div className={bw.editor} contentEditable="true">
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
