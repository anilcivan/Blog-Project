import { redirect } from "next/navigation";
import React from "react";
import styles from "./styles.module.css";



async function create(formData) {
    'use server';
    const post = {
        title: formData.get("title"),
        body: formData.get("body"),
        userId: 1,
        
    }

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json());


    redirect(`/edit/${response.id}?success=true`);
  }

const createPage = () => {







  return (
    <div>
      <h1>Create Page</h1>

      <form action={create} className={styles.container} >
        <label htmlFor="title">Blog Title:</label>
        <input type="text" id="title" name="title" required />

        <label htmlFor="body">Blog Body:</label>
        <textarea id="body" name="body" required></textarea>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default createPage;
