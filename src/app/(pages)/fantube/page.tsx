import { DefaultContainer } from "@/shared/ui/DefaultContainer";
import { FantubeContentBox, FantubeManagementBox } from "@/features/channel";
import { Country, FantubeType, Sort } from "@/features/channel/types/fanchannel";

const tempData: FantubeType[] = [
  {
    url: 'https://www.youtube.com/@ohhaewon',
    coverImg: 'https://yt3.googleusercontent.com/p93cL9ZtXzcmiTr_KW-m64b7v5ugAF_a4-EMwPM0m9tXB9zaMqB25-Ygx3JAVjgMyS6dKgLsVA=s160-c-k-c0x00ffffff-no-rj',
    sub: '60.7만명',
    name: '또 오해원',
    view: '1,558,733,646',
    updateDate: new Date('2025-06-15'),
  },
  {
    url: 'https://www.youtube.com/@nmixxfantube',
    coverImg: 'https://yt3.googleusercontent.com/1yz8p477JeFGrOxkJ8XWoO1vOzP30FWLnBmkwSsI7roQoyETVcoaYvhTthbkL6ekUSI1nWZf=s160-c-k-c0x00ffffff-no-rj',
    sub: '8.36만명',
    name: 'NMIXXFanTube',
    view: '274,883,806',
    updateDate: new Date('2025-06-15'),
  },
  {
    url: 'https://www.youtube.com/@yensull',
    coverImg: 'https://yt3.googleusercontent.com/elMThXAg2ZiCa4EWVByH2zFAuN3knlB12HQ4FSBLSYhKNv6kDkuv2CHD4Nv6cOhnu5F2ckDvtw=s160-c-k-c0x00ffffff-no-rj',
    sub: '5.88만명',
    name: '옌설',
    view: '17,859,584',
    updateDate: new Date('2025-06-15'),
  },
  {
    url: 'https://www.youtube.com/@jiwoohae',
    coverImg: 'https://yt3.googleusercontent.com/pOHA0l-hvyjgFfHcvWcaN4fZRVBgYmETTPQgxOFoXIlBtY1qhx_HBhfQVuX-yU26oV3e5Dakdg=s160-c-k-c0x00ffffff-no-rj',
    sub: '5.71만명',
    name: '지우해',
    view: '149,882,073',
    updateDate: new Date('2025-06-15'),
  }
]

async function getData(sort: Sort, country: Country, page: number) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/fantube?sort=${sort}&country=${country}&page=${page}`);
    const data = await res.json();
    return [data.fantube]
  } catch {
    return [tempData]
  }
}

export const metadata = {
  title: "팬채널",
}

interface FantubeProps {
  searchParams: {
    sort?: Sort;
    page?: number;
    country?: Country;
  };
}

export default async function Fantube({ searchParams }: FantubeProps) {

  // Search Params 가져오기
  const sort = searchParams.sort ?? "sub";
  const page = searchParams.page ?? 1;
  const country = searchParams.country ?? "ko";

  const [fantubeList] = await getData(sort, country, page);

  // const params = useSearchParams();
  // const [fantubeData, setFantubeData] = useRecoilState(fantubeState);
  // const [fetching, setFetching] = useState(false);

  // const [sort, setSort] = useState<"sub" | "name" | "view">("sub");
  // const [country, setCountry] = useState<"ko" | "wo">("ko");
  // const [page, setPage] = useState<number>(1);
  // const [end, setEnd] = useState<boolean>(false);

  // const getData = async () => {
  //   const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/fantube?sort=${sort}&country=${country}&page=${page}`);
  //   const data = await res.json();
  //   if (data.result) {
  //     if (data.fantube.length === 0) {
  //       setEnd(true);
  //     }
  //     setFantubeData((prev) => [...prev, ...data.fantube]);
  //   }
  // }

  // useEffect(() => {
  //   if (page === 0) {
  //     setPage(1);
  //   } else {
  //     if (end) {
  //       return;
  //     }
  //     getData();
  //     setFetching(false);
  //   }
  // }, [page]);


  // const fetchMore = async () => {
  //   setFetching(true);
  //   setPage(page + 1);
  // };

  // const handleScroll = () => {
  //   const scrollHeight = document.documentElement.scrollHeight;
  //   const scrollTop = document.documentElement.scrollTop;
  //   const clientHeight = document.documentElement.clientHeight;

  //   if (scrollTop + clientHeight >= scrollHeight && !fetching) {
  //     fetchMore();
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // });

  return (
    <section>
      <DefaultContainer>
        <FantubeManagementBox />
        <FantubeContentBox data={fantubeList} />
      </DefaultContainer>
    </section>
  )
}
