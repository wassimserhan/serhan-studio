import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Serhan - Web Design and Development</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.logo}>
          <h1>Serhan</h1>

          {/* <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div> */}
        </div>

        <p className={styles.headline}>
          Web design & development, specializing in custom Wordpress & Shopify
          theme design.
          <br />
          As well as Javascript, CSS, HTML5, Headless CMS, NextJS, React and
          many other things in between.
        </p>
        <h2 className={styles.subheadline}>Selected work:</h2>

        <div className={styles.grid}>
          <a
            href="https://goodsamfoods.com/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>GoodSAM</h2>
            <p className={inter.className}>Shopify Theme Customization</p>
          </a>

          <a
            href="https://globalfood.wsj.com/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>WSJ Global Food Forum</h2>
            <p className={inter.className}>Custom WordPress</p>
          </a>

          <a
            href="https://wsjpro.com/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>WSJ Pro</h2>
            <p className={inter.className}>Custom WordPress</p>
          </a>

          <a
            href="https://students.wsj.com/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>WSJ Students</h2>
            <p className={inter.className}>Custom WordPress</p>
          </a>
          <a
            href="https://samirasowan.com/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>eCommerce Site</h2>
            <p className={inter.className}>Next.js & Snipcart</p>
          </a>
          <a
            href="https://wassimserhan.com/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>Photography Site</h2>
            <p className={inter.className}>Next.js</p>
          </a>
        </div>

        <article className={styles.footer}>
          <FontAwesomeIcon icon="fa-brands fa-twitter" />
          <a className={styles.email} href="mailto:wserhan@gmail.com">
            wserhan@gmail.com
          </a>
        </article>
      </main>
    </>
  );
}
