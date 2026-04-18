import { useState } from "react";

function BlogWordCounter() {
  const [count, setCount] = useState(0);
  const [posts] = useState([
    { id: 1, content: "React is awesome" },
    { id: 2, content: "JavaScript is powerful" },
    { id: 3, content: "Rahul Chauhan makes coding easy" }
  ]);
  
  // Expensive calculation
  // let totalWords = 0;
  // for(var i=0;i<posts.length;i++){
  //   totalWords += posts[i].content.split(" ").length;
  // }
  const totalWords = posts.reduce((acc, p) => {
    console.log("Calculating-WithoutMemo...");
    return acc + p.content.split(" ").length;
  }, 0);

  return (
    <div>
        <h3>Total Words: {totalWords}</h3>
        {posts.map(post => (
            <div key={post.id}>
                <h4>{post.id}</h4>
                <p>{post.content}</p>
            </div>
        ))} 
      <p>Count: {count}</p>
      <button className="btn btn-primary btn-sm mt-2 me-2" onClick={() => setCount(count + 1)}>Increase Count</button>  
    </div>
  );
}

export default BlogWordCounter;
