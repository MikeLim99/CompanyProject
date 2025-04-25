import React from "react";
import '../../assets/css/href.css';
import { Link } from "react-router-dom";

export default function Href({ label, to, className, onclick }) {
    return (
        <Link to={to} className='href' onClick={ onclick }>
            {label}
        </Link>
    );
}