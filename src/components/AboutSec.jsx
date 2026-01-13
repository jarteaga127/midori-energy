import { Link } from 'react-router-dom';
import '../styles/about-sec.css';

const AboutSec = () => {
    return ( 
        <section className="about-sec">
            <div className="about-sec-img"></div>
            <div className="about-sec-text">
            <h2>About us</h2>
            <p>Kyoto ya Nara ni wa Nihon no furui bunka ga nokotteiru. Kyoto, Nara wo otozureru hitobito ga rekishi wo jibun no me de miru koto ga dekiru. Shikashi, mae motte rekishi wo shitteireba, Kyoto ya Nara wo otozureru kachi ga motto fueru to omou.
            </p>
                <Link to="about-us" className='section-link'>Read more about our story here.</Link>
            </div>
        </section>
     );
}
 
export default AboutSec;