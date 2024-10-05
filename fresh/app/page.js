import Link from "next/link"

export default function Home() {
  let name = 'hyeon'
  let link = 'http://google.com'
  return (
    <div>
      <h4 style={{color:'skyblue', fontSize:'30px'}}>프레싱</h4>
      <p className="title=sub">by {name}</p>
      <a href={link}>링크</a>
    </div>
  );
}
