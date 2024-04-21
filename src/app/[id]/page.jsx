import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import { notFound } from "next/navigation";
import PostButtons from "@/components/PostButton/postbuttons";



async function getPosts(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const posts = await res.json();
    return posts;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

export default async function page({ params }) {
  const { id, title, body } = await getPosts(params.id);

  if (!id) {
    return notFound();
  }

  return (
    <div className={styles.blogContainer}>
      <div className={styles.cardImage}>
        <Image
          src={`https://picsum.photos/200/300?random=+${id}`}
          alt="Blog Card İmage"
          fill
        />
      </div>
      <div className={styles.cardInfo}>
        <h1>{title}</h1>
        <p>{body}</p>
        <PostButtons />
       
      </div>
    </div>
  );
}
