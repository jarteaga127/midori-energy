import '../styles/login-page.css'

const LoginPage = ({handleSubmit, userName, setUserName, password, setPassword, error, setError}) => {
    return ( 
        <section>
            <h1>Please Login</h1>

            
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" 
                id="username" 
                value={userName} 
                onChange={(e) => {
                setUserName(e.target.value);
               if (error.username) setError({...error, username: ''}); 
                }}/>
                {error.username && <span className="error-text">{error.username}</span>}
                <label htmlFor="password">Password:</label>
                <input type="password" 
                id='password' 
                value={password} 
                onChange={(e) => {
                    setPassword(e.target.value);
                    if (error.password) setError({...error, password: ''});
                    }} />
                   {error.password && <span className="error-text">{error.password}</span>} 
                <input type="submit" value="Login" className='login-btn' />
            </form>
            <div className="make-account-sec">
                <p>Don't have an account? Let's make one!</p>
            </div>
        </section>
     );
}
 
export default LoginPage;