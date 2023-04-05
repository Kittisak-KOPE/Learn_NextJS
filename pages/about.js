import styles from "@/styles/About.module.css";
import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>เกี่ยวกับเรา | SoloKope</title>
        <meta name="keywords" content="KOPE, ร้านค้า, ขายของ" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>เกี่ยวกับเรา</h1>
        <Image src="/about.svg" width={500} height={500} alt="about" />
      </div>
    </>
  );
}
