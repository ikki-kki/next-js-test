//index에서는 global css 같은 글로벌 import를 할 수 없다.
import styles from "./index.module.scss";

// function Heading(props) {
//   return (
//     <div>
//       <h1 className={styles.red}>
//         <span>I'am red</span>
//         {props.heading}
//       </h1>
//     </div>
//   );
// }

export default function Home() {
  return (
    <div>
      <h1>Here</h1>
    </div>
  );
}
