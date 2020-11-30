// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

// 기존에 있던 코드

// export default (req, res) => {
//   res.statusCode = 200
//   res.json({ name: 'John Doe' })
// }

// 새로 적은 코드
// 리액트 내에서 자체적으로 api를 만들 수 있다
export default function (req: NextApiRequest, res: NextApiResponse) {
  console.log("REQUEST BODY: ", req.query);
  //it should NOT be a react component

  //setHeader을 쓰면 requestheader에 헤더를 추가할 수 있다. (Network에서 확인 가능)
  res.setHeader("X-Custom-Header", "blahblah");

  // res.send("Somting like this. ");
  // res.send("send를 쓰면 json이 아닌 것도 보낼 수 있다규! 하지만 한글은 컴파일 안된다^^...");

  // res.json({ status: "OK", num: Math.floor(Math.random() * 10) });
}

//http://localhost:3000/api/random-number

//** req.body를 콘솔에 적고 해당 post를 개발자 도구에 적으면 개발자 도구에서 POST한 소통을 할 수 있다 */
//fetch('http://localhost:3000/api/random-number', {method:'POST', body:'hello'})

// 개발자도구에서 요런 요청도 보낼 수 있다
// fetch('http://localhost:3000/api/random-number', {method:'POST',

// headers: {
//     'Content-Type': 'application/json'
// },

// body: JSON.stringify({
//     username: 'admin',
//     password: 'admin',
// })
// })
