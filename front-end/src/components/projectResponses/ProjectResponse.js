import React, {useState} from 'react';
// import Collapse from 'react-bootstrap/Collapse'
// import { Link } from 'react-router-dom';

const ProjectResponse = ({username, likes, comments}) => {
    const [open, setOpen] = useState(false);
    return (
        <>
        <div className="card bg-light m-2" style={{width: '18rem'}}>
            <img className="card-img-top" src={require('../../assets/placeholder.png')} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{username}</h5>
                <p className="card-text">{likes}</p>
                <p className="card-text">{comments}</p>
                <a href="#" className="btn btn-primary">Submit Feedback</a>
            </div>`
        </div>
        </>
        
    );
};

export default ProjectResponse;