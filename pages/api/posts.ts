import { getSortedPostsData } from "../../lib/posts";

/* posts에 작성한 .md 파일들의 값을 가져오는 API */
export default function handler(res: any) {
  const allPostsData = getSortedPostsData();
  res.status(200).json({ allPostsData });
}
