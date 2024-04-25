// 토큰 인증 서버 컴포넌트로 다시 만들기

async function getData(){
    try {
        if (!accessToken) {
          console.log("refresh 실행");
          const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/auth/refresh`, {
            method: "POST",
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
            },
          })
  
          const data = await res.json();
          if(data.result){
            console.log(data.access_token);
            setAccessToken(data.access_token);
          }
        }
  
        if (accessToken) {
          console.log("인증 실행")
          const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/auth/authenticate`, {
            method: "POST",
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ access_token: accessToken })
          })
  
          const data = await res.json();
  
          if(data.result){
            if(data.user.block){
              alert("차단된 사용자입니다.");
              return;
            }
            setUser({
              id:data.user.id,
              userid:data.user.userid,
              block:data.user.block,
              nick:data.user.profile[0].nick,
              grade:data.user.profile[0].grade
            })
          }
        }
      }
      catch (err) {
        console.log(err);
      }
}

export default function Token() {

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [user, setUser] = useRecoilState(userState);

  const handleAccessToken = async () => {
    try {
      if (!accessToken) {
        console.log("refresh 실행");
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/auth/refresh`, {
          method: "POST",
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        const data = await res.json();
        if(data.result){
          console.log(data.access_token);
          setAccessToken(data.access_token);
        }
      }

      if (accessToken) {
        console.log("인증 실행")
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/auth/authenticate`, {
          method: "POST",
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ access_token: accessToken })
        })

        const data = await res.json();

        if(data.result){
          if(data.user.block){
            alert("차단된 사용자입니다.");
            return;
          }
          setUser({
            id:data.user.id,
            userid:data.user.userid,
            block:data.user.block,
            nick:data.user.profile[0].nick,
            grade:data.user.profile[0].grade
          })
        }
      }
    }
    catch (err) {
      console.log(err);
    }


  }

  useEffect(() => {
    handleAccessToken();
  }, [accessToken])

  return <></>
}