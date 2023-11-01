const LoginContainer = () => {
    return (
        <div className="flex justify-center items-center min-h-screen overflow-y-hidden">
            <div className="bg-light-black rounded-lg p-8 shadow w-[30%] h-[60vh] overflow-y-hidden">
                <h1 className="text-3xl text-center mb-6">Login</h1>
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Email"
                        className="w-full h-12 border-2 border-white border-opacity-20 rounded-full px-4 text-black"
                        required
                    />
                </div>
                <div className="mb-6">
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full h-12 border-2 border-white border-opacity-20 rounded-full px-4 text-black"
                        required
                    />
                </div>
                <div className="flex justify-between text-sm mb-4">
                    <label className="flex items-center text-white">
                        <input type="checkbox" className="mr-2" />
                        Remember Me
                    </label>
                    <a href="#" className="text-white hover:underline">Forgot Password</a>
                </div>
                <button
                    type="submit"
                    className="w-full h-12 bg-white text-black rounded-full font-semibold hover:bg-opacity-90 transition duration-300"
                >
                    Login
                </button>
                <div className="text-sm text-center mt-4">
                    Don't have an account? <a href="/auth/register" className="text-white font-semibold hover:underline">Register</a>
                </div>
            </div>
        </div>
    )
}

export default LoginContainer