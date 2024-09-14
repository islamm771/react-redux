import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../app/store";
import { useState } from "react";
import { addPerson } from "../app/features/PersonSlice";
import { toggleView } from "../app/features/ImageSlice";

const Person = () => {
  const {name} = useSelector( (state:RootState) => state.person )
  const dispatch = useDispatch();
  const [persons , setPersons] = useState<string[]>([])
  return (
    <div>
      <input 
      type="text" 
      className="bg-[#ddd] mt-4 px-4 py-2 rounded-md"
      onChange={ (e)=>{ dispatch(addPerson(e.target.value)) } }
      />
      <button
      className="bg-indigo-500 text-white px-4 py-2 rounded-md mt-2 ml-2"
      onClick={() => {setPersons( prev => [...prev , name] ) ; dispatch(toggleView(false))}}
      >add</button>
      <ul>
        {persons.map( (p,index) => <li key={index}>{p}</li> )}
      </ul>

      </div>
  )
}

export default Person