import axios from "axios"

const Impact = (props: any) => {
  const { data } = props
  const postKini = () => {
    for (let i = 0; i < 51; i++){

      axios.post(`http://localhost:3000/items/trash/${data[i]._id}`)
    }
  }
  return (
    <div className="IMPACT w-[40%] rounded-lg shadow-lg bg-[#37474F] h-[100%]" onClick={postKini}></div>
  )
}

export default Impact