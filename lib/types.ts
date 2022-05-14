export type Article = {
    content?: string,
    frontmatter: {
        slug: string,
        description: string,
        publishedAt: string,
        readingTime: string,
        coverImage: string,
        categories: string[]
    }
}