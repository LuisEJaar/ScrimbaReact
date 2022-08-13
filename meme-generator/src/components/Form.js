import React from 'react'

export default function Form () {
    return (
        <div className='form'>
            <div className='inputs'>
                <input type="text" className='lhInput' placeholder='Top Text'></input>
                <input type="text" placeholder='Bottom Text'></input>
            </div>
            <button>Get a new meme image 🖼</button>
        </div>
    )
}