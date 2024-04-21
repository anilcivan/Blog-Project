"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./searchbar.module.css";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const onSearch = () => {
    router.push(search ? `/?q=${search}`: '/');
  };

  return (
    <div>
      <input
      className={styles.searchbar}
        type="text"
        placeholder="Search"
        value={search}
        onKeyUp={(e) => {
            if (e.key === "Enter") {
                onSearch();
            }
        }}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className={styles.searchbtn} onClick={onSearch}>Search</button>
    </div>
  );
};

export default Searchbar;
