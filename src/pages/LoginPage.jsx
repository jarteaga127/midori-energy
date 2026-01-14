import '../styles/login-page.css'

const LoginPage = () => {
    return ( 
        <section>
            <h1>Please Login</h1>
            <form action="">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username"/>
                <label htmlFor="password">Password:</label>
                <input type="password" />
                <input type="submit" value="Login" className='login-btn' />
            </form>
            <div className="make-account-sec">
                <p>Don't have an account? Let's make one!</p>
            </div>
        </section>
     );
}
 
export default LoginPage;