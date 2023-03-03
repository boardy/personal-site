import * as React from "react";
import {useRouter} from "next/router";
import {BlogPost} from "../../models/BlogPosts";


const BlogPostCard : React.FC<BlogPost> = (post) => {

    const router = useRouter();

    const substringWithoutTruncate = (content: string, largeView: boolean) => {
        const maxLength = !largeView ? 175 : 400 // maximum number of characters to extract

        //trim the string to the maximum length
        let trimmedString = content.substring(0, maxLength);

        //re-trim if we are in the middle of a word
        trimmedString = trimmedString.substring(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
        return trimmedString
    }
    const removeMd = require('remove-markdown');

    if (post.featureImage !== '')
    {
        return (
            <div onClick={() => router.push(`/posts/${post.slug}`)} className='border-b-[1px] border-gray-200 cursor-pointer w-full grid grid-cols-1 md:grid-cols-2 gap-1 h-auto max-h-[640px] max-md:h-[320px] my-4 pb-4'>
                <div className='w-full px-1 h-fit  col-span-1'>
                    <img className='h-full max-h-[320px] mx-auto my-auto object-cover' src={post.featureImage.replaceAll('/api/images', 'https://blog.devso.io/api/images')} />
                </div>
                <div className='w-full px-1 h-[320px] col-span-1'>
                    {
                        /*typeof post?.tags[0] !== typeof undefined ?
                            <Tag tag={post.tags[0].tag.tag} slug={post.tags[0].tag.slug} /> : null*/
                    }
                    <h1>{post.title}</h1>
                    <p>
                        {
                            removeMd(substringWithoutTruncate(post.content, false))
                        }...
                    </p>

                    {/*<PostMetaData {...post} />*/}
                </div>
            </div>
        )
    }
    else
    {
        return (
            <div onClick={() => router.push(`/posts/${post.slug}`)} className='border-b-[1px] border-gray-200 cursor-pointer w-full h-auto max-h-[320px] pb-8 my-8'>
                <div className='w-full h-[250px] h-full px-1'>
                    {
                        /*typeof post?.tags[0] !== typeof undefined ?
                            <Tag tag={post.tags[0].tag.tag} slug={post.tags[0].tag.slug} /> : null*/
                    }
                    <h1>{post.title}</h1>
                    <p>
                        {
                            removeMd(substringWithoutTruncate(post.content, true))
                        }...
                    </p>
                    {/*<PostMetaData {...post} />*/}
                </div>
            </div>
        )

    }

}

export default BlogPostCard;