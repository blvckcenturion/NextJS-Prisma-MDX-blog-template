import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { sync } from 'glob'
import type { Article } from '../../lib/types'

const articlesPath: string = path.join(process.cwd(), 'data/articles')

export async function getSlug(): Promise<string[]> {
    const paths: string[] = sync(`${articlesPath}/*.mdx`)
    
    return paths.map((path: string) => { 
        const slug: string = path.split('/').pop().split('.')[0]
        return slug
    })
}

export async function getArticle(slug: string): Promise<Article> {
    const articlePath: string = path.join(articlesPath, `${slug}.mdx`)
    const source: string = fs.readFileSync(articlePath, 'utf8')
    const { data, content } = matter(source)
    const { title, publishedAt, tags, description, coverImage } = data

    return {
        title,
        content,
        slug,
        description,
        publishedAt,
        readingTime: readingTime(source).text,
        coverImage,

    }
}

export async function getArticles(): Promise<Article[]> { 
    const articles: string[] = fs.readdirSync(path.join(process.cwd(), 'data/articles'))

    return articles.reduce((acc: Article[], article: string) => { 
        const source: string = fs.readFileSync(path.join(process.cwd(), `data/articles/${article}`), 'utf8')
        const {data} = matter(source)
        const { title, publishedAt, description, coverImage } = data

        return [
            ...acc,
            {
                title,
                slug: article.replace('.mdx', ''),
                description,
                publishedAt,
                readingTime: readingTime(source).text,
                coverImage,
            }
        ]
    }, [] as Article[])
}