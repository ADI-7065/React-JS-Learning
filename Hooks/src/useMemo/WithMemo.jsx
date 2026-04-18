import { useState,useMemo } from "react";

function BlogWordCounterrr() {
  const [count, setCount] = useState(0);
  const [posts] = useState([
    { id: 1, content: "React is awesome" },
    { id: 2, content: "JavaScript is powerful" },
    { id: 3, content: "Rahul Chauhan makes coding easy" }
  ]);
  
  // Memoize the expensive calculation
  const totalWords = useMemo(() => {
    return posts.reduce((acc, p) => {
      console.log("Calculating-WithMemo...");
      return acc + p.content.split(" ").length;
    }, 0);
  }, [posts]);

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

export default BlogWordCounterrr;
