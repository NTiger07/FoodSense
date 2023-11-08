import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MediaType from "../../../types/MediaType";
import ResponseType from "../../../types/ResponseType";




const ConverseContainer = () => {
    const navigate = useNavigate()

    const [response, setResponse] = useState<ResponseType>()
    const [text, setText] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const getAnswer = () => {
        const config = {
            headers: {
                // "Accept-Encoding": "gzip",
            }
        }
        setIsLoading(true)
        axios
            .get(`https://api.spoonacular.com/food/converse?apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}&text=${text}`, config)
            .then((res) => {
                setResponse(res.data)
                setIsLoading(false)
                console.log(response)
            })
            .catch((err) => {
                console.error(err);
                setIsLoading(false)

            });

    };

    return (
        <div className="flex items-center flex-col">
            <div className="QUERY flex justify-between items-center w-[30%] bg-white px-[20px] rounded-xl shadow-lg">
                <input
                    type="text"
                    placeholder="Send a message"
                    className="py-[.8rem] px-[1rem] w-[95%] bg-transparent outline-none border-none text-light-black"
                    onChange={(e) => setText(e.target.value)}
                    onKeyUp={(e) => {
                        if (e.key === "Enter" && text !== "" && text !== " ") {
                            getAnswer();
                        }
                    }}
                />
                <img
                    src="/icons/send.svg"
                    alt="search"
                    className="w-[5%]"
                    onClick={() => { if (text !== "" && text !== " ") { getAnswer() } }}
                />
            </div>

            <div className="RESULTS">
                <span>{response?.answerText}</span>

                {response?.media ? <div className="flex flex-wrap">
                    {response.media.map((item: MediaType) => {
                        return <div onClick={() => navigate(item.link)}>
                            <span>{item.title}</span>
                            <img src={item.image} alt="" />
                        </div>
                    })}
                </div> : null}
            </div>
        </div>
    )
}

export default ConverseContainer