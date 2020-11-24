import Link from "next/link";

export default () => (
  <header>
    <h1>라우팅!!!</h1>
    <ul>
      <li>
        {/* 링크안의 첫 번째 태그는 '반드시' <a>태그여야 한다 
        서버사이드에서 미리 준비가 되어있기 때문에 굉장히 빠르다. 
        */}
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link as="/post/1" href="/post/[id]">
          <a>First Post</a>
        </Link>
      </li>
      <li>
        <Link as="/post/2" href="/post/[id]">
          <a>Second Post</a>
        </Link>
      </li>
    </ul>
  </header>
);
