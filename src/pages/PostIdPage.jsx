import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({});
    const [image, setImage] = useState();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        PostService.getById(params.id).then(res => setPost(res.data.recipe))
    }, [])

    console.log(post);

    return (
        post
            ? <div>
                <p>{post.label}</p>
                <img src={post.image} width={100} height={100}/>
            </div>
            : <p>Loading...</p>
    );
};

export default PostIdPage;
