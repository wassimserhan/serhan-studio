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
        <title>Serhan Studio - Web Development</title>
        <meta name="description" content="WordPress & Shopify" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.logo}>


          <div>

            <Image
              src="/serhan_logo.png"
              alt="Serhan Logo"
              className={styles.vercelLogo}
              width={300}
              height={124}
              priority
            />

          </div>
        </div>

        <p className={styles.headline}>
          Web Development
          <br />
          WordPress | Shopify | Headless CMS

        </p>
        <h2 className={styles.subheadline}>Selected Work</h2>
        <hr className={styles.line} />

        <div className={styles.grid}>

          <a
            href="https://30fe.com/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={styles.project_name}>30 Forensic Engineering</h2>
            <p className={styles.project_tech}>Custom WordPress</p>
          </a>

          <a
            href="https://cyber.wsj.com/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={styles.project_name} >Cybersecurity Forum</h2>
            <p className={styles.project_tech}>Custom WordPress</p>
          </a>
          <a
            href="https://goodsamfoods.com/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={styles.project_name}>GoodSAM Foods</h2>
            <p className={styles.project_tech}>Shopify Theme Customization</p>
          </a>

          <a
            href="https://globalfood.wsj.com/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={styles.project_name}>Global Food Forum</h2>
            <p className={styles.project_tech}>Custom WordPress</p>
          </a>

          <a
            href="https://wsjpro.com/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={styles.project_name}>WSJ Pro</h2>
            <p className={styles.project_tech}>Custom WordPress</p>
          </a>

          <a
            href="https://education.wsj.com/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={styles.project_name}>WSJ Education</h2>
            <p className={styles.project_tech}>Custom WordPress</p>
          </a>

        </div>

        <article className={styles.footer}>
          <FontAwesomeIcon icon="fa-brands fa-twitter" />
          <a className={styles.email} href="mailto:wassim@serhan.studio">
            Contact
          </a>
        </article>
      </main>
    </>
  );
}
