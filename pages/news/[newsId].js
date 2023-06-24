//ourdomain.com/news/something-important
import React from "react";
import { useRouter } from "next/router";

function SomethingImportant() {
  const router = useRouter();
  console.log(router.query.newsId);
  return (
    <div>
      <h1>{`something-important ${router.query.newsId}`}</h1>
    </div>
  );
}

export default SomethingImportant;
