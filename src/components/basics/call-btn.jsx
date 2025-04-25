import { Link } from "react-router-dom";


export default function CallBtn() {
    return(
        <>
        <Link to='#' className="call-btn">
            <div className="call-btn-icon">
                <i className="fa-solid fa-phone-volume"></i>
            </div>
            <div className="call-btn-text">
                <h4>CALL US!</h4>
                <h2>206-919-6886</h2>
            </div>
        </Link>
        </>
    )
}