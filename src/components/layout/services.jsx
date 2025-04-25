import '../../assets/css/services.css';
import service1 from '../../assets/images/image 4.png';
import service2 from '../../assets/images/image 5.png';
import service3 from '../../assets/images/image 6.png';
export default function Services() {
    return (
        <>
        <div className="services-section">
            <h2>OUR SERVICES</h2>
            <div className='services'>
                <div className='services-header'>
                    <img src={service1} alt="" />
                    <div className="services-text">
                        <h2>Real Estate Done Right</h2>
                        <p>Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!</p>
                    </div>
                    
                </div>
                <div className='services-header'>
                    <img src={service2} alt="" />
                    <div className="services-text">
                        <h2>Commercial & Residential</h2>
                        <p>Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.</p>
                    </div>
                </div>
                <div className='services-header'>
                    <div className="services-text">
                        <img src={service3} alt="" />
                    </div>
                    <div className="services-text">
                        <h2>Rely on Expertise</h2>
                        <p>If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.</p>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}