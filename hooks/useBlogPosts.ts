import {useEffect, useState} from "react";

export default function useBlogPosts() {

    const [postsLoading, setPostsLoading] = useState(false);
    const [postsError, setPostsError] = useState(null);
    const [posts, setPosts] = useState(null);

    const getBlogPosts = async () => {
        try
        {
            setPostsLoading(true);
            setPostsError(null);

            const response = await fetch('https://blog.devso.io/api/posts', {
                method: 'GET'
            });

            console.log("Got response", response);
        }
        catch (err)
        {
            setPostsError(err);
        }
        finally
        {
            setPostsLoading(false);
        }
    }

    useEffect(() => {
        (
            async () => {
                await getBlogPosts();
            }
        )()
    }, [])

    return {postsLoading, postsError, posts};
}