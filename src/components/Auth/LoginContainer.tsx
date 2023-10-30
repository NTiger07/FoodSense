const LoginContainer = () => {

    const handleAuth = () => {
        const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
        const redirectUri = 'http://localhost:3000/auth/google/callback';
        const scope = 'email profile';
        const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`;
        window.location.href = authUrl;
    }


    return (
        <div>
            <button type="button" className="login-with-google-btn" onClick={handleAuth}>
                Sign in with Google
            </button>
        </div>
    )
}

export default LoginContainer