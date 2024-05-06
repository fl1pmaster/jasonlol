import React from 'react';
import PostItem from "./PostItem";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import { getByDisplayValue } from '@testing-library/react';

const PostList = ({posts, title, remove}) => {

    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Posts NOT found
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            <TransitionGroup>
                <div style={{flex : "2"}}>
                    {posts.map((post, index) =>
                    <CSSTransition
                        style = {{display:"flex", flex: "1"}}
                        key={index}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem remove={remove} number={index + 1} post={post} />
                    </CSSTransition>
                )}
                </div>

            </TransitionGroup>
        </div>
    );
};

export default PostList;
