import '../../assets/css/footer.css'

export default function Footer() {
    return (
        <div className="footer">
            <div className="links">
                <a href=""><i class="fa-brands fa-facebook"></i></a>
                <a href=""><i class="fa-brands fa-instagram"></i></a>
                <a href=""><i class="fa-brands fa-yelp"></i></a>
                <a href=""><i class="fa-brands fa-linkedin"></i></a>
            </div>
            <p>Copyright © 2023 Marci METZGER Homes - All Rights Reserved</p>
            <div className='line'></div>
            <div className='back-to-top'>
                <a href='#'>BACK TO TOP</a>
            </div>
        </div>
    )
}