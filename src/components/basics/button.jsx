import React from 'react'
import '../../assets/css/button.css'

export default function Button({ label, onClick, className }) {
    return (
        <button className={`custom-button ${className}`} onClick={onClick}>
            {label}
        </button>
    )
}