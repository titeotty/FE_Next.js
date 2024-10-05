import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database.js";

export default async function handler(요청, 응답) {
  if (요청.method == 'POST') {
    if (요청.body.title == '') {
      return 응답.status(500).json('제목 왜 안써');
    }
    try {
      let db = (await connectDB).db('forum');
      
      let result = await db.collection('post').updateOne(
        { _id: new ObjectId(요청.body.id) },
        { $set: { title: 요청.body.title, content: 요청.body.content } } 
      );

      응답.redirect(302, '/list');
    } catch (error) {
      console.log("db에러", error);
      return 응답.status(500).json('DB 에러');
    }
  }
}
