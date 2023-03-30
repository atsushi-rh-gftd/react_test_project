import react from 'react';
import { useState } from 'react';
import './AddTaskButton.css';

function AddTaskButton (props){
    
    return (
        <>
            <div className='align'>
                <button className='button' onClick={console.log('test')}> { props.label }</button>
            </div>
        </>
    )
}

export default AddTaskButton;