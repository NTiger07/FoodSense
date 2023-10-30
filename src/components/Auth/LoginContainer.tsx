import axios from "axios";
import { useEffect, useState } from "react";

const LoginContainer = () => {
    // const handleAuth = () => {
    //     const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    //     const redirectUri = 'http://localhost:3000/auth/google/callback';
    //     const scope = 'email profile';
    //     const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`;
    //     window.location.href = authUrl;
    // }


    function navigate(url) {
        window.location.href = url;
    }

    async function auth() {
        const response = await fetch('http://127.0.0.1:3000/request', { method: 'post' });

        const data = await response.json();
        console.log(data);
        navigate(data.url);

    }



    return (
        <div>
            <button type="button" className="login-with-google-btn" onClick={auth}>
                Sign in with Google
            </button>
        </div>
    )
}

export default LoginContainer