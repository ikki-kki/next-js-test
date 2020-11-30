import Document, { Html, Head, Main, NextScript } from "next/document";

//소스코드에 들어가보면 단순한 코드만있는게 아니라 지저분하다. 그걸 막기 위해 _document 파일로 정리한다.
//이미 사용하고있는 Document 클래스 컴포넌트를 활용하기 위해 class 사용.
//얘는 root파일로 생각해야함
//구글 애널리틱스가 스크랩 하는것도 이 파일! 더러워지지 않게 조심하기
//얘는 컴포넌트가 아니라 root document라서 자바스크립트의 역할을 하진 않고 랜더링해주는~ 루트통로가 된다
export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta property="custom" content="yolo" />
          <body>
            <Main />
          </body>
          <NextScript />
        </Head>
      </Html>
    );
  }
}
