import react from 'react';
import { useState } from 'react';
import './AddTaskButton.css';

function AddTaskButton() {
    return (
        <>
            <div className='align'>
                <button className='button' onSubmit={console.log('test')}>＋ タスクを追加</button>
            </div>
        </>
    )
}

export default AddTaskButton;