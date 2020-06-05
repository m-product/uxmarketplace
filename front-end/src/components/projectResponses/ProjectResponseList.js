import React, { useContext } from 'react';  
import '../../App.css';
import ProjectResponse from './ProjectResponse';
import { ProjectResponseContext } from './ProjectResponseContext';

const ProjectResponseList = () => {
    const [responses, setResponses] = useContext(ProjectResponseContext);
    return (
        <div>
            <div className='container p-5'>
                <div className='row justify-content-center'>
                    <h1 className='text-body'>Project Responses</h1>
                </div>
                <div className='row justify-content-center p-2 '>
                    <h6 className='text-muted'>Check out what everyone's been working on!</h6>
                </div>
            </div>
            <div className='row justify-content-center p-3'>
                    {responses.map(response => (
                    <ProjectResponse username={response.username} likes={response.likes} comments={response.comments} image={response.image} key={response.id}/>
                    ))}
            </div>
        </div> 
    );
}
export default ProjectResponseList;