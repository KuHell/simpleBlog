import fs from "fs";
import path from "path";
import matter from "gray-matter";

// process.cwd() : 가장 루트 디렉토리 위치에서 'posts'라는 디렉토리에서 file을 읽어온다
const postsDirectory = path.join(process.cwd(), "posts");

// 정렬된 data를 postsDirectory에서 가져온다
export function getSortedPostsData() {
  // fs : file을 읽어오는 NodeJS 라이브러리
  const fileNames = fs.readdirSync(postsDirectory);
  // map으로 해서 읽어온 파일의 .md를 삭제한다
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    // 여기에는 여전히 .md가 들어있다 .md 는 `id`에서만 제거했다
    const fullPath = path.join(postsDirectory, fileName);
    // 직접ㅇ utf8이라고 읽는다
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter라이브러리로 matter()안에 utf8로 읽은 값을 넣는다
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  // 정렬 데이터
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
