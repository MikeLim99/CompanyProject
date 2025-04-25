import '../../assets/css/about.css';
import profile from '../../assets/images/profile.png';

export default function About() {
    return (
        <div className="about-section">
            <div className='about-profile'>
                <img src={profile} alt="" />
                <h2>MARCI METZGER</h2>
            </div>
            <div className='about-description'>
                <h2>Managing Broker / Owner</h2>
                <p>Marci was a REALTOR, then licensed Broker, in Washington State. Having helped buyers and sellers in many markets since 1995, she is a wealth of knowledge.</p>
                <p>REALTOR FOR NEARLY 3 DECADES!</p>
            </div>
        </div>
    )
}