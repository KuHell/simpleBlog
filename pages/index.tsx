import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>
          Read this Post{" "}
          <Link href="/posts/firstPost">
            <a>첫번째 글(Link)</a>
          </Link>
        </h1>
        <h1>
          Read this Post <Link href="/posts/firstPost">첫번째 글(a Tag)</Link>
        </h1>
      </main>
      <main className={styles.main}>
        <h1>
          Read this Post <Link href="/posts/firstPost">첫번째 글(a Tag)</Link>
        </h1>
        <h1>
          Read this Post{" "}
          <Link href="/posts/firstPost">두번째 글(Link Tag)</Link>
        </h1>
      </main>
      <main className={styles.main}>
        <h1>
          Read this Post <Link href="/posts/firstPost">첫번째 글(a Tag)</Link>
        </h1>
        <h1>
          Read this Post <Link href="/posts/towPost">두번째 글(Link Tag)</Link>
        </h1>
      </main>
    </>
  );
}
