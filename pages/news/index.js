// ourdomain.com/news
import React from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>News page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs_is_a_great_fragment">
            click to see article
          </Link>
          NextJS is a great article
        </li>
      </ul>
      <ul>
        <li>something else</li>
      </ul>
    </>
  );
}

export default NewsPage;
