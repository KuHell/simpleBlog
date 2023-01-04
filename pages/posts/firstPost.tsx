import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";

const firstPost = () => {
  return (
    <Layout>
      <Head>
        <title>첫번쨰 글</title>
      </Head>
      <div>firstPost</div>
    </Layout>
  );
};

export default firstPost;
