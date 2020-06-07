import React, { useState } from 'react';
// import Collapse from 'react-bootstrap/Collapse'
import { Link } from 'react-router-dom';

const ProjectResponse = ({ username, likes, comments }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="card bg-light m-2" style={{ width: '18rem' }}>
                <img className="card-img-top" src={require('../../assets/placeholder.png')} alt="Card image cap" />
                <div className="card-body">
                    <div className="row">
                        <p className="card-title text-left col-sm-6">{username}</p>
                        <p className="card-text text-right col-sm-6">{likes}  {comments}</p>
                    </div>
                    <div className="row">
                        <div class="col text-center">
                            <Link to='/comments-list'>
                                <a href="#" className="btn btn-sm btn-outline-dark">Submit Feedback</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default ProjectResponse;