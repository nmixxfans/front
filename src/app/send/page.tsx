import send from "../css/send.module.css";

export default function Send(){
    return(
        <section className={send.section}>
            <div className={send.container}>
                <div className={send.titleBox}>
                    <div className={send.title}>건의</div>
                </div>
                <div className={send.contentBox}>
                    <div className={send.noticeBox}>
                        <div className={send.notice}>
                            
                        </div>
                    </div>
                    <div className={send.sendBox}>
                        <div className={send.categoryBox}>

                        </div>
                        <div className={send.content}>
                            <textarea>

                            </textarea>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}