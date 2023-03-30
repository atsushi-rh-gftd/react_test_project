import react from 'react';
import './AddTaskButton02.css'
function AddTaskButton02 () 
{
    const handleClick1 = () =>{
        window.location.href = "https://www.google.com";
    };

    return (
        <>
        
            <button className='button_div'>＋ タスクを追加 </button>
            <div　className='flex_div'>
            <button  className='button_link' onClick={handleClick1}>すべて</button>
            <button  className='button_link' onClick={handleClick1}>今日</button>
            <button  className='button_link' onClick={handleClick1}>次の7日間</button>
            </div>

        </>
    )
}

export default AddTaskButton02;