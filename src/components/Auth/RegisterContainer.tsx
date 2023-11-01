const RegisterContainer = () => {
  return (
    <div className="min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-light-black rounded-xl mx-auto shadow-lg overflow-hidden">


          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-primary">
            <h1 className="text-black text-3xl mb-3">Welcome</h1>
            <div>
              <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse aliquam varius rutrum purus maecenas ac <a href="#" className="text-purple-500 font-semibold">Learn more</a></p>
            </div>
          </div>



          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">Register</h2>
            <p className="mb-4">
              Create your account. It’s free and only takes a minute
            </p>
            <div>
              <div className="grid grid-cols-2 gap-5">
                <input type="text" placeholder="First name" className="outline-none border-none rounded-md py-[.5rem] px-[.6rem]" />
                <input type="text" placeholder="Last name" className="outline-none border-none rounded-md py-[.5rem] px-[.6rem]" />
              </div>
              <div className="mt-5">
                <input type="text" placeholder="Email" className="outline-none border-none rounded-md py-[.5rem] px-[.6rem] w-full" />
              </div>
              <div className="mt-5">
                <input type="password" placeholder="Password" className="outline-none border-none rounded-md py-[.5rem] px-[.6rem] w-full" />
              </div>
              <div className="mt-5">
                <input type="password" placeholder="Confirm Password" className="outline-none border-none rounded-md py-[.5rem] px-[.6rem] w-full" />
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  className="w-full h-12 bg-white text-black rounded-full font-semibold hover:bg-opacity-90 transition duration-300"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterContainer