import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({label: '', ingredients: []})


    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({label: '', ingredients: []})
    }

    return (
        <form>
            <MyInput
                value={post.label}
                onChange={e => setPost({...post, label: e.target.value})}
                type="text"
                placeholder="Name of the recipe"
            />
            <MyInput
                value={[post.ingredients]}
                onChange={e => setPost({...post, ingredients: [e.target.value]})}
                type="text"
                placeholder="Description"
            />
            <MyButton onClick={addNewPost}>Add receip</MyButton>
        </form>
    );
};

export default PostForm;
