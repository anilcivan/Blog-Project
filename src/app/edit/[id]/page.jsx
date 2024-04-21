import { redirect } from "next/navigation";
import React from "react";
import Styles from "./styles.module.css";

async function edit(formData) {
  "use server";
  const post = {
    id: formData.get("id"),
    title: formData.get("title"),
    body: formData.get("body"),
    userId: 1,
  };

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + post.id,
    {
      method: "PUT",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());

  redirect(`/edit/${response.id}?success=true`);
}

async function getPosts(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const posts = await res.json();
    return posts;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

const editPage = async ({ params,  searchParams }) => {
  const postData = await getPosts(params.id);
  

  return (
    <div>
      <h1>Edit Page</h1>

      {searchParams.success && <p>Post updated successfully</p>}

      <form action={edit} className={Styles.container} >
        <input type="hidden" value={params.id} id="id" name="id" required />

        <label htmlFor="title">Blog Title:</label>
        <input
          defaultValue={postData.title}
          type="text"
          id="title"
          name="title"
          required
        />

        <label htmlFor="body">Blog Body:</label>
        <textarea
          defaultValue={postData.body}
          id="body"
          name="body"
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default editPage;
