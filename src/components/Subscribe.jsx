const Subscribe = () => {
    return ( 
        <section>
           <div className="subscribe-container">
            <div className="sub-cont-text">
            <h1>Sign up for our newsletter!</h1>
            <p>Stay up to date for our laterst products, flavors and where we'll pop up next.</p>
            </div>
            <div className="sub-form-container">
                <form className="newsletter-form">
                    <input type="email" placeholder="Enter your email here" />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
            </div> 
        </section>
     );
}
 
export default Subscribe;