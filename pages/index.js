import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout.js';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae in qui fugit maiores dolor commodi, libero aut harum soluta, voluptates eius ad consequuntur doloremque consequatur officia earum impedit dolorum ea.</p>
        <p>
          (Building this site based on{' '}
          <a href="https://nextjs.org/learn">this Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}