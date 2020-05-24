import React, {useState, useContext} from 'react';
import Challenge from './Challenge';
import { ChallengeContext } from './ChallegeContext';

const ChallengeList = () => {
    const [challenges, setChallenges] = useContext(ChallengeContext);

    return (
        <div className='container'>
            {challenges.map(challenge => (
            <Challenge title={challenge.title} brief={challenge.brief} description={challenge.description} image={challenge.image} key={challenge.id}/>
            ))}
        </div> 
    );
};

export default ChallengeList;