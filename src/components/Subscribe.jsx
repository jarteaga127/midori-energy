import "../styles/subscribe.css";
import { useState } from "react";

const Subscribe = () => {

const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

    const handleSubscribe = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Replace with your actual API endpoint or service function
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Something went wrong. Please try again.');
      }

      setStatus('success');
      setEmail(''); // Clear input on success
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message || 'Failed to subscribe.');
    }
  };
    return ( 
        <section className="subscribe-section">
            {status === 'success' ? (
                <div className="newsletter-success">
          <h3>Thank you for subscribing!</h3>
          <p>Please check your inbox to confirm your subscription.</p>
        </div>
            ) : (
            <div className="subscribe-container">
            <div className="sub-cont-text">
            <h1>Sign up for our newsletter!</h1>
            <p>Stay up to date for our latest products, flavors and where we'll pop up next.</p>
            </div>
            <div className="sub-form-container">
                <form className="subscribe-form">
                    <input type="email" placeholder="Enter your email here" aria-label="Email Address" />
                    <button type="submit">Subscribe</button>
                </form>

{status === 'error' && (
            <p className="newsletter-error-msg" role="alert">
              {errorMessage}
            </p>
          )}

            </div>
            </div> )}
           
        </section>
     );
}
 
export default Subscribe;