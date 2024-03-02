import loading from "./asset/css/loading.module.css";

export default function Loading(){
    return(
        <section className={loading.section}>
            <div className={loading.container}>
                <div className={loading.bar}></div>
                <div className={loading.bar2}></div>
            </div>
        </section>
    )
}