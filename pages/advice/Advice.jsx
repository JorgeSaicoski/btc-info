import { useState } from 'react'
import Navbar from "../Navbar"
import AdviceBody from "./AdviceBody"

const option = [
  { id: 0, name: 'Investing', unavailable: false },
  { id: 1, name: 'Buy BTC', unavailable: false },
  { id: 2, name: 'Sell BTC', unavailable: false },
  { id: 3, name: 'Can I trust in crypto?', unavailable: false },
  { id: 4, name: 'Can I use my crypto?', unavailable: false },
]

function Advice() {
  const [selectedOption, setSelectedOption] = useState(option[2])
  const handleChange=(e)=>{
        let i = e.target.value
        setSelectedOption(option[i])
    }

  const [open, setOpen] = useState(false)
  const changeOpen = () =>{
    const divList = document.getElementById('divList')
    if(open){

      divList.classList.remove("h-full")
      divList.classList.add("h-0")
      setOpen(false)
    }else{

      divList.classList.remove("h-0")
      divList.classList.add("h-full")
      setOpen(true)
    }
  }

  return (
    <div className="bg-principalColor min-h-screen p-10">
      <Navbar/>
      <div className="flex flex-col items-center justify-items-start mt-10 h-32 z-10 w-full">
        <div  className="flex flex-col w-full z-10 bg-extraColor p-2 rounded-3xl hover:bg-principalColor">
          <button className="relative border-textColor bg-principalColor text-3xl h-10 overflow-hidden group m-2 hover:border-extraColor border-2 rounded-2xl" onClick={changeOpen}>{selectedOption.name}{/*<SelectorIcon className="w-8"/>*/}</button>
          <div className="rounded-2xl w-full  flex flex-row flex-wrap justify-between items-center h-0 overflow-hidden duration-300" id="divList">
            {option.map((person) => (
              <div className="relative w-full border-textColor h-10 overflow-hidden group m-2 hover:border-extraColor border-2 rounded-2xl"
                onClick={changeOpen}
                key={person.id}
                >
                <input className="absolute top-0 left-0 opacity-0 h-screen w-screen z-50 cursor-pointer"
                  key={person.id}
                  value={person.id}
                  onClick={handleChange}
                >
                </input>
                <label className="w-screen bg-secondColor group-hover:bg-atentionColor h-screen text-center absolute top-0 left-0">{person.name}</label>
                <div className="h-full w-full rounded-full bg-blue-300 group-hover:animate-ping top-0 left-1/6 absolute opacity-0 group-hover:opacity-100"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <AdviceBody id={selectedOption}/>
    </div>
  )
}
export default Advice
