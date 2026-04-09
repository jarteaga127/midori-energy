import { Link } from 'react-router-dom';
import '../styles/hero-sec.css'

const HeroSec = () => {
    return ( 
        <>
        <section className="hero-sec">
            <div className="hero-sec-text">
            <h1>Add more green to your life. <br></br> Drink Midori.</h1>
           <Link to="/shop" className='section-link'>Shop now</Link>
            </div>
        </section>
        </>
     );
}
 
export default HeroSec;