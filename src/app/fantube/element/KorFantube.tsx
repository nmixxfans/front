import fantube from "../../css/fantube.module.css"

export default function KorFantube(){

    interface ft{
        href:string,
        src:string,
        sub:string,
        name:string,
        view:string,
    }

    const fantubeData : ft[] = [
        {
            href:"https://www.youtube.com/channel/UCdklEvpqkr8_iN13ATR2TVA",
            src:"https://yt3.googleusercontent.com/uxR_Q-Ak5gWfElwktCp_qd8VoG4ZJFjs_E7mr2aOm6j7hk1XTKfCYEAUMEV-z3Nkr6Zr4Ply",
            sub:"27.1만명",
            name:"또 오해원",
            view:"564,566,589",
        },
        {
            href:"https://www.youtube.com/channel/UC2zoImrJ3Ez0G4A_r0MhmwQ",
            src:"https://yt3.googleusercontent.com/lHQsPzuZ-lasfG66wD0XJWAkUaMn1b9MisAdMaoqD0YhDaumxCOPQYCsgtL8GTCDv8xeKnxZ",
            sub:"6만명",
            name:"옌설",
            view:"15,291,327"
        },
        {
            href:"https://www.youtube.com/channel/UCTH96dOe7AMmOB3_Tet8DKg",
            src:"https://yt3.googleusercontent.com/WIaj5T4YcjacBQm8hQqCbuJ4xZN5ZIVomOlZb7ZIaIRQTOqBFRDBS19_AmsgSt4sAjXTVONgxw",
            sub:"3.7만명",
            name:"NMIXXFanTube",
            view:"129,051,002"
        },
        {
            href:"https://www.youtube.com/channel/UCL-gkvQJoHtpaQeLrWd_oZQ",
            src:"https://yt3.googleusercontent.com/9mXiHYQJdLCAeVVF_GmXKommpIH16sMlDlKoTajv0QxQ51aPGBXbk9RDoGfTrEDW5t4bKd0RLA",
            sub:"3.34만명",
            name:"왕눈이 오해원",
            view:"92,540,883"
        },
        {
            href:"https://www.youtube.com/channel/UC-v65gakyXmPTDgRtYSzRhA",
            src:"https://yt3.googleusercontent.com/0wVTUK1Vqv4pYeA94H7937uL9tAAg1iD2qEjMqI7SmDZiGX3YFk4URh63-hbUYocslFYcWtV",
            sub:"2.95만명",
            name:"지우해",
            view:"85,634,957"
        },
        {
            href:"https://www.youtube.com/channel/UCdklEvpqkr8_iN13ATR2TVA",
            src:"https://yt3.googleusercontent.com/uxR_Q-Ak5gWfElwktCp_qd8VoG4ZJFjs_E7mr2aOm6j7hk1XTKfCYEAUMEV-z3Nkr6Zr4Ply",
            sub:"27.1만명",
            name:"또 오해원",
            view:"564,566,589",
        },
        {
            href:"https://www.youtube.com/channel/UCdklEvpqkr8_iN13ATR2TVA",
            src:"https://yt3.googleusercontent.com/uxR_Q-Ak5gWfElwktCp_qd8VoG4ZJFjs_E7mr2aOm6j7hk1XTKfCYEAUMEV-z3Nkr6Zr4Ply",
            sub:"27.1만명",
            name:"또 오해원",
            view:"564,566,589",
        },{
            href:"https://www.youtube.com/channel/UCdklEvpqkr8_iN13ATR2TVA",
            src:"https://yt3.googleusercontent.com/uxR_Q-Ak5gWfElwktCp_qd8VoG4ZJFjs_E7mr2aOm6j7hk1XTKfCYEAUMEV-z3Nkr6Zr4Ply",
            sub:"27.1만명",
            name:"또 오해원",
            view:"564,566,589",
        }
    ]

    return (
        <div className={fantube.contentBox}>
            {
                fantubeData.map((value, index)=>{
                    return (
                        <div className={fantube.chanelItem} key={index}>
                            <a href={value.href} target="_blank" className={fantube.chanelLink}>
                                <img src={value.src} className={fantube.chanelImg} />
                                <div className={fantube.chanelText}>
                                    <span className={fantube.chanelName}>{value.name}</span>
                                    <span className={fantube.chanelPoint}>&nbsp;·&nbsp;</span>
                                    <span className={fantube.chanelSub}>{value.sub}</span>
                                </div>
                                <div className={fantube.chanelText}>
                                    <span className={fantube.chanelView}>{value.view}회</span>
                                </div>
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )
}