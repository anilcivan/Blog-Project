import { RedirectType, redirect } from "next/navigation";
import React from "react";
import Styles from "./styles.module.css";

async function deleteAction(formData) {
  "use server";

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + formData.get("id"),
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());
    redirect(`/`,RedirectType.replace);    

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

const deletePage = async ({ params }) => {
  const postData = await getPosts(params.id);

  return (
    <div>
      <h1>Delete Page</h1>

      <form action={deleteAction} className={Styles.container}>
        <input type="hidden" value={params.id} id="id" name="id" required />

        <h1>Are you sure you want to delete this post?</h1>
        <p>{postData.title}</p>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default deletePage;
