import React, {useState, useContext} from 'react';
import {ChallengeContext} from './ChallegeContext';

const AddChallenge = () => {
    const [title, setTitle] = useState('');
    const [brief, setBrief] = useState('');
    const [description, setDescription] = useState('');
    const [challenges, setChallenges] = useContext(ChallengeContext);

    const updateTitle = (e) =>  {
        setTitle(e.target.value);
    };
    const updateBrief = (e) =>  {
        setBrief(e.target.value);
    };
    const updateDescription = (e) =>  {
        setDescription(e.target.value);
    };

    const addChallenge = e => {
        e.preventDefault();
        setChallenges(prevChallenges => [...prevChallenges, {title: title, brief: brief, description: description}])
    };
    
    return (
        <form onSubmit={addChallenge}>
            <input type='text' name='title' value={title} onChange={updateTitle}/>
            <input type='text' name='brief' value={brief} onChange={updateBrief}/>
            <input type='text' name='description' value={description} onChange={updateDescription}/>
            <button>Submit</button>
        </form>
    )
}

export default AddChallenge;