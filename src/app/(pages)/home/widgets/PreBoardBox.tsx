import styles from '../home-element.module.css';
import Link from 'next/link';
import { korTime } from '../../../asset/functions/utc-to-kor';

interface BoardItem{
    id:number,
    title:string,
    create_date:string,
}

interface Props{
    board:BoardItem[]
}

export default function PreBoardBox({board}:Props){
    return(
        <div className={styles.secondBoxItem}>
          <div className={styles.title} title='자유게시판'>자유게시판</div>
          <div className={[styles.secondBoxContent, styles.boxScroll].join(" ")}>
            {
              board ?
              board.map((value, index) => {
                return (
                  <div className={styles.boardItem} key={index}>
                    <div className={styles.boardTitle}>
                      <Link href={`/board/${value.id}`} className={styles.boardTitleLink}>
                        {value.title}
                      </Link>
                    </div>
                    <div className={styles.boardDate}>
                      {korTime(new Date(value.create_date))}
                    </div>
                  </div>
                )
              })
              :
              <></>
            }
          </div>
        </div>
    )
}