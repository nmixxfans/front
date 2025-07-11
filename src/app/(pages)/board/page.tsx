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

async function getData(page: number, category: string, search: string, type: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/board/list?page=${page}&category=${category}&search=${search}&type=${type}`);
    const data = await res.json();
    return [data.fixBoards, data.boards, data.totalCount]
  } catch {
    return [tempData, tempData, 100]
  }
}

export const metadata = {
  title: "자유게시판",
}

interface BoardProps {
  searchParams: {
    category?: string;
    page?: number;
    search?: string;
    type?: string;
  };
}

export default async function Board({ searchParams }: BoardProps) {
  // Search Params 가져오기
  const category = searchParams.category ?? "all";
  const page = searchParams.page ?? 1;
  const search = searchParams.search ?? "";
  const type = searchParams.type ?? "";

  const [fixs, boards, totalCount] = await getData(page, category, search, type);

  return (
    <section>
      <DefaultContainer>
        <BoardWrapper>
          <BoardManagement title="자유게시판" url="/board/write" />
          <BoardTable title="자유게시판" fixs={fixs} boards={boards} />
        </BoardWrapper>
        <BoardPaginationBox title="자유게시판" totalCount={totalCount} />
        <BoardSearchBox title="자유게시판" />
      </DefaultContainer>
    </section>
  )
}
