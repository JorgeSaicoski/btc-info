import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import Navbar from "../Navbar"
import {ArrowCircleLeftIcon, SelectorIcon} from '@heroicons/react/solid'
import AdviceBody from "./AdviceBody"

const option = [
  { id: 1, name: 'Investing', unavailable: false },
  { id: 2, name: 'Buy BTC', unavailable: false },
  { id: 3, name: 'Sell BTC', unavailable: false },
  { id: 4, name: 'Can I trust in crypto?', unavailable: false },
  { id: 5, name: 'Can I use my crypto?', unavailable: false },
]

function Advice() {
  const [selectedOption, setSelectedOption] = useState(option[0])

  return (
    <div className="bg-principalColor min-h-screen p-10">
      <Navbar/>
      <div className="flex flex-col items-center justify-items-start mt-10 h-32 z-10">
        <Listbox value={selectedOption} onChange={setSelectedOption} >
          <Listbox.Button className="border-2 rounded-2xl border-secondColor p-2 bg-extraColor w-full sm:w-1/3 flex flex-row justify-between items-center">{selectedOption.name}<SelectorIcon className="w-8"/></Listbox.Button>
          <Listbox.Options className="border-2 rounded-2xl border-extraColor p-2 bg-secondColor w-1/3 z-10" >
            {option.map((person) => (
              <Listbox.Option className="group w-full hover:bg-atentionColor rounded-3xl p-3 flex flex-row justify-between items-center cursor-pointer"
                key={person.id}
                value={person}
                disabled={person.unavailable}
              >
                <p className="w-full text-center group-hover:animate-bounce items-center">{person.name}</p> <ArrowCircleLeftIcon className="w-8 opacity-0 group-hover:opacity-100 text-secondColor hover:animate-pulse"/>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
      <AdviceBody id={selectedOption}/>
    </div>
  )
}
export default Advice
