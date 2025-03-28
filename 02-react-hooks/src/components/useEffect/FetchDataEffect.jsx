import { useEffect } from "react";
import { useState } from "react";

const FetchDataEffect = () => {
  const [posts, setPosts] = useState([]);

  // `useEffect` is a Hook, so you can only call it at the top level of your component.
  // For conditional rendering, you can put the condition inside the `useEffect` function.
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
