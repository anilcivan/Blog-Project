import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "./blogCard.module.css";

function BlogCard(props) {
  
  return (
    <div className={styles.container}>
      <Link href={`/${props.id}`} className={styles.card}>
        <div className={styles.box}>
          <div className={styles.image}>
            <Image
              src={`https://picsum.photos/200/300?random=+${props.id}`}
              alt="Blog Card İmage"
              width={200}
              height={300}
            />
          </div>
          <div className={styles.cardBody}>
            <h2>{props.title}</h2>
            <p>{props.body}</p>


          </div>
        </div>
      </Link>
    </div>
  );
}

export default BlogCard;
