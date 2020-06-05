import React from 'react';
import ChallengeList from './ChallengeList';

const HomeTitle = () => {
    return (
        <div className='container p-5'>
            <div className='row justify-content-center'>
                <h1 className='text-body'>Design Projects</h1>
            </div>
            <div className='row justify-content-center p-2 '>
                <h6 className='text-muted'>Try to complete a challenge by uploading a design response before viewing other responses!</h6>
            </div>
            <ChallengeList />
        </div>
    );
}

export default HomeTitle;