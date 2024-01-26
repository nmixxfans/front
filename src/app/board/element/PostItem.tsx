import board from '../../css/board.module.css';
import boardDataType from "../page";
import Link from "next/link";
import { korTime } from "@/app/functions/utc-to-kor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faStar,
  faCamera,
  faVideo,
  faPenToSquare,
  faClipboard,
  faFlag,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons"; //포토, 영상, 설문, 일반, 공지


interface userDataType {
    id: number,
    profile: string;
}

interface boardDataType {
    id: number,
    category: string,
    title: string,
    user_nick: string,
    content: string,
    view: number,
    like: number,
    create_date: Date,
    user_id: userDataType,
}

type Props = {
    value:boardDataType,
    index:number,
    fix:boolean,
}

export default function PostItem(props:Props) {

    const value = props.value;
    const index = props.index;
    const fix = props.fix;
    
    return (
        <div key={index} className={board.mainBox}>
            <div className={board.data1}>{value.id}</div>
            <div className={board.data2}>{value.category}</div>
            <div className={board.emoji}>
                {
                    fix ? <FontAwesomeIcon icon={faBell}></FontAwesomeIcon> : 
                    value.like >= 10 ? <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> : 
                    value.content.indexOf("<img") != -1 ? <FontAwesomeIcon icon={faCamera}></FontAwesomeIcon> :
                    <FontAwesomeIcon icon={faClipboard}></FontAwesomeIcon>
                }
            </div>
            <div className={board.contentBox}>
                <Link href={`/board/${value.id}`} className={board.content}>{value.title.length > 16 ? value.title.substring(0, 16) + "..." : value.title}</Link>
            </div>
            <div className={board.data4}>{value.user_id.profile.length > 8 ? value.user_id.profile.substring(0, 8) + "..." : value.user_id.profile}</div>
            <div className={board.data5}>{korTime(new Date(value.create_date))}</div>
            <div className={board.data6}>{value.view}</div>
            <div className={board.data7}>{value.like}</div>
        </div>
    )
}