import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MediaType from "../../../types/MediaType";
import ResponseType from "../../../types/ResponseType";




const ConverseContainer = () => {
    const navigate = useNavigate()

    const [response, setResponse] = useState<ResponseType>(
        // {
        // "answerText": "Here are some recipes with chicken for you.",
        // "media": [
        //     {
        //         "title": "35+ Healthy Chicken : Spinach Artichoke Chicken Skillet",
        //         "image": "https://spoonacular.com/recipeImages/1679979-312x231.jpg",
        //         "link": "https://spoonacular.com/recipes/35-healthy-chicken-spinach-artichoke-chicken-skillet-1679979"
        //     },
        //     {
        //         "title": "Chicken Spinoccoli – Breaded Stuffed Chicken Breast With Spinach, Broccoli and Cheese",
        //         "image": "https://spoonacular.com/recipeImages/485365-312x231.jpg",
        //         "link": "https://spoonacular.com/recipes/chicken-spinoccoli-breaded-stuffed-chicken-breast-with-spinach-broccoli-and-cheese-485365"
        //     },
        //     {
        //         "title": "Chicken and Rice with Crispy Onion Strings",
        //         "image": "https://spoonacular.com/recipeImages/797696-312x231.jpg",
        //         "link": "https://spoonacular.com/recipes/chicken-and-rice-with-crispy-onion-strings-797696"
        //     },
        //     {
        //         "title": "Argentinian Chimichurri Chicken",
        //         "image": "https://spoonacular.com/recipeImages/1165056-312x231.jpg",
        //         "link": "https://spoonacular.com/recipes/argentinian-chimichurri-chicken-1165056"
        //     },
        //     {
        //         "title": "Fresh Pineapple and Lychee Chicken - Empress of China, San Fran",
        //         "image": "https://spoonacular.com/recipeImages/122368-312x231.jpg",
        //         "link": "https://spoonacular.com/recipes/fresh-pineapple-and-lychee-chicken-empress-of-china-san-fran-122368"
        //     },
        //     {
        //         "title": "Maple Dijon Potatoes with Apples & Chicken Sausage",
        //         "image": "https://spoonacular.com/recipeImages/519424-312x231.jpg",
        //         "link": "https://spoonacular.com/recipes/maple-dijon-potatoes-with-apples-chicken-sausage-519424"
        //     },
        //     {
        //         "title": "Chicken, Mushroom and Wild Rice Bake",
        //         "image": "https://spoonacular.com/recipeImages/165378-312x231.jpg",
        //         "link": "https://spoonacular.com/recipes/chicken-mushroom-and-wild-rice-bake-165378"
        //     },
        //     {
        //         "title": "Cornmeal-Crusted Chicken with Southern Tomato Gravy",
        //         "image": "https://spoonacular.com/recipeImages/499458-312x231.jpg",
        //         "link": "https://spoonacular.com/recipes/cornmeal-crusted-chicken-with-southern-tomato-gravy-499458"
        //     },
        //     {
        //         "title": "Tandoori-Style Chicken",
        //         "image": "https://spoonacular.com/recipeImages/178434-312x231.jpg",
        //         "link": "https://spoonacular.com/recipes/tandoori-style-chicken-178434"
        //     }
        // ]
    // }
    )
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
                    className="w-[5%] cursor-pointer"
                    onClick={() => { if (text !== "" && text !== " ") { getAnswer() } }}
                />
            </div>

            <div className="RESULTS pb-[5%] mt-[5%]">
                <span className="font-semibold text-[1.5rem]">{response?.answerText}</span>

                {response?.media ? <div className="grid grid-cols-4 gap-10 w-[95%] mt-[5%]">
                    {response.media.map((item: MediaType) => {
                        return <div className="h-[45vh] w-[100%] flex flex-col justify-between bg-whitesmoke-100 shadow-lg rounded-lg text-light-black cursor-pointer" onClick={() => window.open(item.link, '_blank')}>
                            <img src={item.image} alt="item_image" className="rounded-t-lg h-[60%]" />
                            <span className="pt-[10px] h-[40%] px-[.8rem]">{item.title}</span>
                        </div>
                    })}
                </div> : null}
            </div>
        </div>
    )
}

export default ConverseContainer