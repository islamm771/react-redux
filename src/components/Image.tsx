import { useDispatch, useSelector } from "react-redux"
import { imageSelector, toggleView } from "../app/features/ImageSlice"

const Image = () => {
    const {value} = useSelector(imageSelector)
    const disatch = useDispatch()
    
  return (
    <>
        <button className="bg-indigo-500 text-white px-4 py-2 rounded-md mt-2 ml-2"
        onClick={() => disatch(toggleView(!value))}
        >
            {value ? "hide" : "show"}
        </button>
        {value && <img className="mt-4 mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm64c617Ru1xbzmjJNIOzNYt5xMvNcB56l9Q&s" alt="" />}
    </>
  )
}

export default Image