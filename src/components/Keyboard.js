import React from 'react'
import Key from '../components/Key'

import "../assets/css/keyboard.css"

export default function Keyboard() {
    let keys = [
        {note: "C", color: 'white'},
        {note: "Db", color: 'black'},
        {note: "D", color: 'white'},
        {note: "Eb", color: 'black'},
        {note: "E", color: 'white'},
        {note: "F", color: 'white'},
        {note: "Gb", color: 'black'},
        {note: "G", color: 'white'},
        {note: "Ab", color: 'black'},
        {note: "A", color: 'white'},
        {note: "Bb", color: 'black'},
        {note: "B", color: 'white'},
    ];
    
    return (
        <div className="keyboardContainer">
            {keys.map((key, i) => (
                <Key color={key.color} note={key.note} key={i} />
            ))}
        </div>
    )
}
