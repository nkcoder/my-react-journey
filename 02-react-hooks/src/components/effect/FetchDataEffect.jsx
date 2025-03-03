import { useEffect } from "react";
import { useState } from "react";

const FetchDataEffect = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const data = await response.json();
      setPosts(data);
    };

    fetchData();
  });

  return (
    <section style={{ textAlign: "start" }}>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </section>
  );
};

export default FetchDataEffect;
