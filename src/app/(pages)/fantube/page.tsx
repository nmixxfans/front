"use client"

import { DefaultContainer } from "@/shared/ui/DefaultContainer";
import { FantubeManagementBox } from "@/features/channel";

export default function Fantube() {

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
        {/* <KorFantube /> */}
      </DefaultContainer>
    </section>
  )
}
