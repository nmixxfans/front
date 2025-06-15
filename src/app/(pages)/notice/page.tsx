import { DefaultContainer } from "@/shared/ui/DefaultContainer";
import { BoardManagement, BoardPaginationBox, BoardSearchBox, BoardTable, BoardWrapper } from "@/features/board";
import { boardType } from "@/features/board/types/table";


const tempData: boardType[] = [
  {
    id: 1,
    category: '일반',
    title: '제목 테스트',
    user_nick: '설윤아',
    content: '내용',
    view: 1,
    like: 2,
    date: new Date('2025-01-01'),
    user_id: {
      id: 1,
      profile: "설윤아",
    },
  }
]

async function getData(page: number, search: string, type: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/notice/list?page=${page}&search=${search}&type=${type}`);
    const data = await res.json();
    return [data.fixBoards, data.boards, data.totalCount]
  } catch {
    return [tempData, tempData, 100]
  }
}

export const metadata = {
  title: "공지사항",
}

interface BoardProps {
  searchParams: {
    page?: number;
    search?: string;
    type?: string;
  };
}

export default async function Notice({ searchParams }: BoardProps) {
  // Search Params 가져오기
  const page = searchParams.page ?? 1;
  const search = searchParams.search ?? "";
  const type = searchParams.type ?? "";

  const [fixs, boards, totalCount] = await getData(page, search, type);

  return (
    <section>
      <DefaultContainer>
        <BoardWrapper>
          <BoardManagement title="공지사항" url="/notice/write" />
          <BoardTable fixs={fixs} boards={boards} />
        </BoardWrapper>
        <BoardPaginationBox title="공지사항" totalCount={totalCount} />
        <BoardSearchBox title="공지사항" />
      </DefaultContainer>
    </section>
  )
}
