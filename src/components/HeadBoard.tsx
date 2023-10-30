const HeadBoard = () => {
  const logout = () => {
    window.location.href = "http://localhost:3000/auth/logout";
  }
  return (
    <div className="h-[100%]">
      HeadBoard
      <button onClick={logout}>LOGOUT</button>
    </div>
  )
}

export default HeadBoard