import { useEffect } from "react";

export default function Home(props) {
  useEffect(() => {
    alert("hello");
  }, []);
  return <h1>Hello World</h1>;
}
