import React from "react";
import Link from "next/link";
import styles from "./header.module.css";
import Searchbar from "../Search/Searchbar";


function header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <span>Blog</span>
      </Link>
      <Searchbar />
      <Link href="/create">
        <button className={styles.createButton}>Create</button>
      </Link>
     
    </header>
  );
}

export default header;
