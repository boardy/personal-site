import * as React from "react";
import {GetServerSideProps, NextPage} from "next";
import TopNav from "../../components/TopNav";
import ContentWrapper from "../../components/ContentWrapper";
import {BlogPost as BlogPostModel} from "../../models/BlogPosts";
import {sanitisePrismaObject} from "../../lib/Helpers";
import BlogPost from "../../components/BlogPost/BlogPostCard";

const BlogPosts : NextPage<{posts: BlogPostModel[]}> = ({posts}) => {
    return (
        <>
            <TopNav />
            <ContentWrapper>

                {
                    posts?.map(post => {
                        return (
                            <BlogPost {...post} />
                        )
                    })
                }

            </ContentWrapper>

        </>
    )
}

export const getServerSideProps : GetServerSideProps = async (context) => {

    const response = await fetch('https://blog.devso.io/api/posts');
    const data : BlogPostModel[] = await response.json();
    sanitisePrismaObject(data);
    data.forEach(post => {
        sanitisePrismaObject(post);
    })

    return {
        props: {
            posts: data
        }
    }
}

export default BlogPosts;