import React, {useState, useContext} from 'react';
import Comment from './Comment';
import { CommentContext } from './CommentContext';

const CommentList = () => {
    const [comments, setComments] = useContext(CommentContext);

    return (
        <div>
        <div className='container p-5'>
                <div className='row justify-content-center'>
                    <h1 className='text-body'>Comments</h1>
                </div>
                <div className='row justify-content-center p-2 '>
                    <h6 className='text-muted'>Discuss your thoughts on this project!</h6>
                </div>
        </div>
        <div className='container'>
            {comments.map(comment => (
            <Comment user={comment.user} content={comment.content} heading={comment.heading} key={comment.id}/>
            ))}
        </div> 
        </div>
    );
};

export default CommentList;