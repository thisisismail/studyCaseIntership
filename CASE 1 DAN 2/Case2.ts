type IComment = {
  commentId: number;
  commentContent: string;
  replies?: IComment[];
}

const comments : IComment[] = [
  {
    commentId: 1,
    commentContent: 'Hai',
    replies: [
      {
        commentId: 11,
        commentContent: 'Hai juga',
        replies: [
          {
            commentId: 111,
            commentContent: 'Haai juga hai jugaa'
          },
          {
            commentId: 112,
            commentContent: 'Haai juga hai jugaa'
          }
        ]
      },
      {
        commentId: 12,
        commentContent: 'Hai juga',
        replies: [
          {
          commentId: 121,
          commentContent: 'Haai juga hai jugaa'
          }
        ]
      }
    ]
  },
  {
    commentId: 2,
    commentContent: 'Halooo'
  }
]

// ========================================================================
// 5. Hitung total semua komentar yang ada
// ========================================================================
// HITUNG TOTAL JUMLAH KOMENTAR
const countComments = (comments : IComment[], counter : number[]) => {
  comments.map((comment) => {
    counter.push(1);
    if(comment.replies){
      countComments(comment.replies, counter);
    }
  })
  return counter.length;
}
console.log('\n=================[5]===============');
console.log(`TOTAL KOMENTAR: ${countComments(comments, new Array())}`);
// TOTAL KOMENTAR: 7


// ####################### follow me on github thisisismail ###################