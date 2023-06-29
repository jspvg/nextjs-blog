import Link from 'next/link';
import Date from '../components/date';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout.js';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts.js';

export default function Home({ allPostsData }) {
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

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className="{utilStyles.headingLg}">Blog</h2>
        <ul className="{utilStyles.list}">
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br/>
              <small className={utilStyles.lightText}>
                <Date dateString={date}/>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
  //By returning allPostsData inside the props object in getStaticProps, 
  //the blog posts will be passed to the Home component as a prop
}