import './footer.scss'

const Footer = () => {
  return (

    <>
    <div className='container Footer'>
        <div className="footer_wrapper">
            <div className="footer_info">
                <img src="./images/logoW.png" alt="" />
                <p>© 2023 SmartCitiesWorld</p>
                <p>Smart Cities World Ltd, Room 2.13, 27 Clements Lane, London, EC4N 7AE</p>
            </div>
            <div className="footer_nav">
                <div>
                    <a href="/about-us">About Us</a>
                    <a href="/the-team">The Team</a>
                    <a href="/contact-us">Contact us</a>
                    <a href="/special-reports">Special Reports</a>
                </div>
                <div>
                    <a href="/webinars">Webinars</a>
                    <a href="/white-papers">White paper</a>
                    <a href="/trend-reports">Trend Reports</a>
                    <a href="/podcasts">Podcasts</a>
                </div>
                <div>
                    <a href="/city-profile">City Profile</a>
                    <a href="/city-lights">City lights</a>
                    <a href="/editors-blog">Editors blog</a>
                    <a href="/opinions">Opinions</a>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Footer