import React, { useState, useEffect } from 'react';

import Card from '../card/card.component';

const Post = ({ postId }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async() => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${postId}`)
      const posts = await res.json();
      setPost(posts[0]);
    }

    fetchPost();
  })

  return (
    <Card>
      {post ? (
        <div>
          <h3> {post.title} </h3>
          <p> {post.body} </p>
        </div>
      ) : (
        <p> No post found </p>
      )}
    </Card>
  );
};

export default Post;
