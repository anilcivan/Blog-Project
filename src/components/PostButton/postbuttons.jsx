"use client";
import React from "react";
import Link from "next/link";
import styles from "./postbuttons.module.css";

import { useParams } from "next/navigation";

const PostButtons = () => {
  const params = useParams();


  if(!params.id) {
    return null;
  }

  return (
    <>
      <Link href={`/edit/${params.id}`}>
        <button className={styles.buttonEdit}>Edit</button>
      </Link>
      <Link href={`/delete/${params.id}`}>
        <button className={styles.buttonDelete}>Delete</button>
      </Link>
    </>
  );
};


export default PostButtons;