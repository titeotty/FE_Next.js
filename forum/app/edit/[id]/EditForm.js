// "use client";

// import React from 'react';

// export default function EditForm({ initialData, postId }) {
//   async function handleSubmit(e) {
//     e.preventDefault();
//     const updatedData = {
//       title: e.target.title.value,
//       content: e.target.content.value,
//     };

//     const response = await fetch('/api/edit-post', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         id: postId,
//         ...updatedData,
//       }),
//     });

//     if (response.ok) {
//       alert("수정이 완료되었습니다.");
//     } else {
//       alert("수정에 실패했습니다.");
//     }
//   }

//   return (
//     <div className="write">
//       <h4>수정페이지</h4>
//       <form onSubmit={handleSubmit}>
//         <input name="title" defaultValue={initialData.title} />
//         <input name="content" defaultValue={initialData.content} />
//         <button type="submit">전송</button>
//       </form>
//     </div>
//   );
// }