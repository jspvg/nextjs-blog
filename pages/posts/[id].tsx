import utilStyles from '../../styles/utils.module.css';
import Date from '../../components/date';
import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from "../../lib/posts";
import { GetStaticProps, GetStaticPaths, GetStaticPaths } from 'next';

export default function Post({ 
    postData 
}: {
    postData: {
        title: string
        date: string
        contentHtml: string
    }
}) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingX1}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds(); //array of known paths returned by function
    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    //add the await keyw because of remark
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

