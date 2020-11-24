// _App은 페이지를 리턴해주는 역할을 해준다
// 컴포넌트와 pageProps를 내보낸다
import "./globals.css";

export default function MyApp({ Component, pageProps }) {
  // console.log("이 파일는 노드가 내보내는 파일임 가장 첫 번쨰로 내보냄");
  return <Component {...pageProps} />;
}
