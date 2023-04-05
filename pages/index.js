import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title>หน้าแรก | SoloKope</title>
        <meta name="keywords" content="KOPE, ร้านค้า, ขายของ" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>หน้าแรกของเว็ปไซต์</h1>
        <Image src="/shopping.svg" width={400} height={400} alt="shopping" />
        <p>ยินดีต้อนรับเข้าสู่ร้านค้า</p>
        <Link href="/products" className={styles.btn}>
          ดูสินค้าทั้งหมด
        </Link>
      </div>
    </>
  );
}
