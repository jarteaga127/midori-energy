import '../styles/login-page.css'

const LoginPage = () => {
    return ( 
        <>
            <h1>Please Login</h1>
            <form action="">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username"/>
                <label htmlFor="password">Password:</label>
                <input type="password" />
            </form>
            <div className="make-account-sec">
                <p>Don't have an account? Let's make one!</p>
            </div>
        </>
     );
}
 
export default LoginPage;