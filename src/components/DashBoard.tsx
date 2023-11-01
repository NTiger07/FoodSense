import { useSelector } from 'react-redux';

const DashBoard = () => {
  const user = useSelector((state) => state.user); 
  console.log(user)
  return (
    <div>DashBoard</div>
  )
}

export default DashBoard