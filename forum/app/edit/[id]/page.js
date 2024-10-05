import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
  if(요청.method == 'POST'){
    console.log(요청.body)
  }
  const db = (await connectDB).db("forum")
  let result = await db.collection('post').updateOne(
    {_id : new ObjectId(props.params.id)}
  )
  return (
<div className="write">
  <form action="/api/post/edit" method="POST">
    <input name="title" defaultValue={result.title}/>
    <input name="content" defaultValue={result.content}/>
    <input name="_id" defaultValue={result._id.toString()}/>
    <button type="submit">전송</button>
  </form>
</div> 
  )
} 