
import ArticleHeading from 'components/articleHeading'
import Layout from 'components/layout'
import type { Article } from 'lib/types'
import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps } from 'next/types'
import { getArticles } from 'src/utils/mdx'


export default function Home({ articles }) {
  console.log(articles)
  return (
    <Layout heading={<h1>My personal blog</h1>}>
      {
        articles.map((article, i) => (
          <ArticleHeading key={i} {...article} />
        ))
      }
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => { 
  const articles: Article[] = await getArticles()
  articles.sort((a,b) => a.publishedAt > b.publishedAt ? 1 : a.publishedAt < b.publishedAt ? -1 : 0)
  return {
    props: {
      articles: articles.reverse()
    }
  }
}