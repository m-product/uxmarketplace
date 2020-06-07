import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse'

const Comment = ({ user, content, heading }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className='container w-50'
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                <div className='row rounded-lg bg-light mt-3'>
                    <div className="col-auto p-3">
                        <h3>{user}</h3>
                        <p className='text-muted'>{heading}</p>
                    </div>
                </div>
            </div>
            <Collapse in={open}>
                <div className='container w-50 bg-light'>
                    <div className='row'>
                        <div className='col'>
                            <p className='text-muted' >{content}</p>
                        </div>
                    </div>
                </div>
            </Collapse>
        </>
    );
};

export default Comment;