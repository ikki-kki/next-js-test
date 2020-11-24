//라우터에서 해당 [id]를 체크해서 라우팅 한다

//라우터를 정의
// import { useRouter } from "next/router";
//해당 함수를 정의하면 라우터에 엑세스 할 수 있다
// const router = useRouter();
//쿼리스트링 가져오기
// const { id } = router.query;
import Header from "../../../components/headers";

const Post = ({ title, body }) => {
  return (
    <>
      <Header />
      <h1>{title}</h1>
      <h2>{body}</h2>
    </>
  );
};

Post.getInitialProps = async ({ query }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${query.id}`,
  );
  const post = res.json();

  return post;
};

export default Post;
