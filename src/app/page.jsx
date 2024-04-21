import React from 'react'
import BlogCard from '@/components/BlogCard/blogCard';
import styles from "./styles.module.css";


async function getPosts(searchText) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts'+ (searchText ? `?q=${searchText}` : ''))
  let posts = await res.json()
  posts = posts.slice(0, 15);
  return posts
}

 export default async function page({searchParams}) {
  const posts = await getPosts(searchParams.q)

  return (
    <div className={styles.blogs} >
      {posts.map(post => (
         <BlogCard key={post.id} {...post} />
      ))}
     
    </div>
    
  );
}
