import React, { useRef } from 'react'
import "../assets/css/key.css"

export default function Key({note, color = 'white'}) {
    const audioRef = useRef(null);

    let noteToPlay = new Audio();
    
    const playNote = (note) => {
        noteToPlay.src = `./resources/keys/${note}.wav`;
        noteToPlay.play();
    }

    const stopNote = () => {
        noteToPlay.pause();
    }
    
    return (
        <div className={color} onMouseDown={() => playNote(note)} onMouseUp={() => stopNote()}>
            &nbsp;
            <audio ref={audioRef} src="#" type="audio/mpeg"/>
        </div>
    )
}
