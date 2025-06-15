import { DefaultContainer } from '../shared/ui/DefaultContainer';
import { ItemProps } from '../shared/types/board';
import { RecentMVBox } from '@/features/home/ui/RecentMVBox';
import { BoardContainer } from '@/features/home/ui/BoardContainer';
import { VideoBox } from '@/features/home/ui/VideoBox';
import { EctContainer } from '@/features/home/ui/EtcContainer';

async function getData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/home`);
    return res.json();
  } catch {
    return []
  }
}

export const metadata = {
  title: "WE-NMIXX",
}

export default async function Home() {

  const data = await getData()

  const board: any[] = data.board;
  const notice: any[] = data.board;
  const recent: string = data.recent;
  const recentLive: string = data.recent_live;

  const noticeTestData: ItemProps[] = [
    {
      id: "1",
      title: "제목",
      date: "2025-01-01"
    },
    {
      id: "2",
      title: "제목2222제목2222제목2222제목2222제목2222제목2222제목2222제목2222제목2222제목2222",
      date: "2025-01-01"
    },
    {
      id: "2",
      title: "제목2222제목2222제목2222제목2222제목2222제목2222제목2222제목2222제목2222제목2222",
      date: "2025-01-01"
    },
    {
      id: "2",
      title: "제목2222제목2222제목2222제목2222제목2222제목2222제목2222제목2222제목2222제목2222",
      date: "2025-01-01"
    },
    {
      id: "2",
      title: "제목2222제목2222제목2222제목2222제목2222제목2222제목2222제목2222제목2222제목2222",
      date: "2025-01-01"
    },
    {
      id: "2",
      title: "제목2222제목2222제목2222제목2222제목2222제목2222제목2222제목2222제목2222제목2222",
      date: "2025-01-01"
    },
    {
      id: "2",
      title: "제목2222제목2222제목2222제목2222제목2222제목2222제목2222제목2222제목2222제목2222",
      date: "2025-01-01"
    },
    {
      id: "2",
      title: "제목2222제목2222제목2222제목2222제목2222제목2222제목2222제목2222제목2222제목2222",
      date: "2025-01-01"
    },
    {
      id: "2",
      title: "제목2222제목2222제목2222제목2222제목2222제목2222제목2222제목2222제목2222제목2222",
      date: "2025-01-01"
    },
    {
      id: "2",
      title: "제목2222제목2222제목2222제목2222제목2222제목2222제목2222제목2222제목2222제목2222",
      date: "2025-01-01"
    }
  ]

  return (
    <section>
      <DefaultContainer>
        <RecentMVBox />
        <BoardContainer notice={noticeTestData} free={noticeTestData} />
        <VideoBox recent='p1ZR1-tLR44' recentLive='6_uG3XfyMW0' />
        <EctContainer />
      </DefaultContainer>
    </section>
  )
}
