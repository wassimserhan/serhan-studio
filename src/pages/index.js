import Head from 'next/head';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Lake Street Studio</title>
        <meta name="description" content="WordPress & Shopify" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://use.typekit.net/uku2yqf.css" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.logo}>


          <h1 className={styles.logoHeadline}>
            Lake Street Studio

          </h1>
        </div>

        <h1 className={styles.headline}>
          New York based web development studio that builds informational and eCommerce websites for a variety of clients.

        </h1>



        <h2 className={styles.subheadline}>SELECTED WORK</h2>
        <hr className={styles.line} />

        <div className={styles.grid}>

          <a
            href="https://30fe.com/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className={styles.project_name}>30 Forensic Engineering</h4>
            <p className={styles.project_tech}>Custom WordPress</p>
          </a>

          <a
            href="https://goodsamfoods.com/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className={styles.project_name}>GoodSAM Foods</h4>
            <p className={styles.project_tech}>Shopify Theme Customization</p>
          </a>


          <a
            href="https://wsjpro.com/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className={styles.project_name}>WSJ Pro</h4>
            <p className={styles.project_tech}>Custom WordPress</p>
          </a>

          <a
            href="https://education.wsj.com/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className={styles.project_name}>WSJ Education</h4>
            <p className={styles.project_tech}>Custom WordPress</p>
          </a>

        </div>

        <article className={styles.footer}>
          <FontAwesomeIcon icon="fa-brands fa-twitter" />
          <a className={styles.email} href="mailto:wassim@serhan.studio">
            Contact
          </a>
        </article>
      </main >
    </>
  );
}
