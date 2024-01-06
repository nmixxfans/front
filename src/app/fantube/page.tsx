import fantube from "../css/fantube.module.css"

export default function Fantube() {
    return (
        <section className={fantube.section}>
            <div className={fantube.container}>
                <div className={fantube.titleBox}>
                    <div className={fantube.title}>팬채널 목록</div>
                    <div className={fantube.selectBox}>
                        <div className={fantube.categoryBox}>
                            <input type="radio" id="kor" name="category" defaultChecked/>
                            <label className={fantube.categoryBtn} htmlFor="kor">국내</label>
                            <input type="radio" id="for" name="category"/>
                            <label className={fantube.categoryBtn} htmlFor="for">해외</label>
                        </div>
                        <div className={fantube.selectContentBox}>
                            <select>
                                <option value="sub">구독순</option>
                                <option value="view">조회순</option>
                                <option value="abc">사전순</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={fantube.updateDateBox}>
                    <span>최종 업데이트 : </span><span></span>
                </div>
                <div className={fantube.contentBox}>

                </div>
            </div>
        </section>
    )
}
