export type BlogPost = {
    id: number,
    createdAt: string,
    featureImage: string,
    metaDescription: string,
    metaKeywords: string,
    metaTitle: string,
    published: boolean,
    slug: string,
    title: string,
    authorId: number,
    author: PostAuthor
    content: string
}

export type PostAuthor = {
    id: number
    email: string,
    firstName: string,
    lastName: string,

}