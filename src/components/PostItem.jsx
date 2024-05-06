import React, { useState } from 'react';
import MyButton from "./UI/button/MyButton";
import {useHistory} from 'react-router-dom';

const PostItem = ({ number, post, remove }) => {
    const router = useHistory()
    // const [description, setDescription] = useState('')
    // setDescription(props.post.ingredientLines.map((line) => console.log(line)))

    let link1 = String(post.uri)
    let id = link1.split("recipe_")[1]
    // console.log(id)

    return (
        <div className="post">
            <div className="post__content">
                <strong>{number} {post.label}</strong>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    {post.ingredients.map((item, index) =>
                        <p>
                            {item.text}
                        </p>
                    )}
                </div>
            </div>
            <div className="post__btns" 
                style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                <MyButton style = {{flex:2}} onClick={() => router.push('/posts/'+id)}>
                    Open in new page
                </MyButton>
                <MyButton style = {{flex:2}} onClick={() => remove(post)}>
                    Delete
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;
