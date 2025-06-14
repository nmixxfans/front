interface userBoardType {
  id: number,
  profile: string;
}

export interface boardType {
  id: number,
  category: string,
  title: string,
  user_nick: string,
  content: string,
  view: number,
  like: number,
  date: Date,
  user_id: userBoardType,
}