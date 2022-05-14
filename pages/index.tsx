import { Article } from 'lib/types'
import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps } from 'next/types'
import { getArticles } from 'src/utils/mdx'

export default function Home({ articles }) {
  console.log(articles)
  return (
    <div>

    </div>
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